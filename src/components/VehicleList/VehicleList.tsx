import { useCallback, useEffect, useState } from 'react';
import apiService, { CategoryData } from '../../apiServices/apiService';
import { Alert, AlertIcon, Button, Center, CircularProgress, CloseButton, Container, Flex, useDisclosure } from '@chakra-ui/react';
import Vehicle from '../Vehicle/Vehicle';
import { Input } from "@chakra-ui/react";
import NotFoundMessage from '../NotFoundMessage/NotFoundMessage';
import { CreateModal } from '../CreateModal/CreateModal';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from 'react-icons/fa';
import React from 'react';

export interface ModalProps {
  onCategoryAdded?: () => void;
  onCategoryDeleted?: () => void;
  onCategoryUpdated?: () => void;
}

export default function VehicleList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isDateFilterApplied, setDateFilterApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const fetchCategories = useCallback(async () => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setShowAlert(true);
    }, 5000); // Mostrar alerta após 5 segundos

    try {
      const allCategories = await apiService.getAllCategories({
        orderBy: 'created_at_DESC',
        startDate: startDate ? startDate.toISOString() : undefined,
        endDate: endDate ? endDate.toISOString() : undefined
      });
      clearTimeout(timeoutId);
      setCategories(allCategories);
      setDateFilterApplied(!!startDate || !!endDate);
    } catch (error) {
      clearTimeout(timeoutId);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const updateVehicleList = () => {
    fetchCategories();
  }

  const clearFilters = () => {
    setStartDate(null);
    setEndDate(null);
    setSearchTerm("");
    setDateFilterApplied(false);
  };

  const filteredCategories = categories.filter(
    category =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const CustomInput = React.forwardRef<HTMLInputElement, { value?: string, onClick?: () => void, placeholder?: string }>(
    ({ value, onClick, placeholder }, ref) => (
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <FaRegCalendarAlt style={{ position: 'absolute', left: '10px', top: '15px', color: '#FF7A50' }} />
        <input
          style={{
            padding: '11px',
            paddingLeft: '30px',
            fontSize: '16px',
            borderRadius: '25px',
            border: '1px solid #FF7A50',
            width: '150px'
          }}
          onClick={onClick}
          value={value}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    )
  );

  return (
    <Container maxW={'5xl'} my={20}>
      {showAlert && isLoading && (
        <Alert status='warning'>
          <AlertIcon />
          Estamos notando um atraso inesperado na resposta do nosso banco de dados.
          Por favor, aguarde mais alguns segundos enquanto carregamos a lista para você.
          Agradecemos a sua paciência.
        </Alert>
      )}
      <Flex my={8} align="center" justifyContent="space-between">
        <Button
          size={'lg'}
          fontWeight={'normal'}
          px={6}
          onClick={onOpen}
          colorScheme='orange'
          variant='outline'
        >
          Nova categoria
        </Button>
        <CreateModal isOpen={isOpen} onClose={onClose} onCategoryAdded={updateVehicleList} />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <DatePicker
              className="myDatePicker"
              placeholderText="Start date"
              selected={startDate}
              onChange={setStartDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onFocus={() => true}
              customInput={<CustomInput />}
            />
          </div>
          <div style={{ position: 'relative', marginLeft: '15px' }}>
            <DatePicker
              className="myDatePicker"
              placeholderText="End date"
              selected={endDate}
              onChange={setEndDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onFocus={() => true}
              customInput={<CustomInput />}
            />
          </div>
          <CloseButton size="lg" ml={3} rounded={30} _hover={{ bg: 'orange.100' }}
            onClick={clearFilters} variant={'ghost'} />
        </div>
      </Flex>
      <Input
        placeholder='Pesquisar veículo por título ou ID'
        size='md'
        focusBorderColor="#FF7A50"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {isLoading ? (
        <Center ml={'auto'} h={'50vh'}>
          <CircularProgress isIndeterminate color='orange.500' />
        </Center>
      ) : filteredCategories.length > 0 ? (
        filteredCategories.map(category => (
          <Vehicle key={category.title} category={category} onCategoryDeleted={updateVehicleList} onCategoryUpdated={updateVehicleList} />
        ))
      ) : (isDateFilterApplied || categories.length > 0) ? (
        <NotFoundMessage
          title="Ops! Categoria de veículo não encontrada 👀"
          description="A categoria de veículo que você tentou acessar não está disponível em nosso sistema.
    Não encontramos nenhum registro correspondente ao título ou ID fornecido.
    Continue explorando nosso sistema para descobrir outras categorias disponíveis."
        />
      ) : (
        <NotFoundMessage
          title="Nenhuma categoria de veículo cadastrada 😰"
          description="Não há categorias de veículos disponíveis em nosso sistema no momento. Por favor, adicione uma nova categoria."
        />
      )
      }
    </Container>
  );
}