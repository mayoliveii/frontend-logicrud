/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { FaTruck } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import apiService, { CategoryData } from '../../apiServices/apiService';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: CategoryData;
  onCategoryUpdated: () => void;
  handleSubmit?(): void;
}

export function EditionModal({ category, onCategoryUpdated }: EditModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState(category.title);
  const [description, setDescription] = useState(category.description);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value);

  const handleSubmit = async () => {
    try {
      const updatedCategory = await apiService.editCategory({ id: category.id, title, description });
      setTitle('');
      setDescription('');

      onClose();
      if (onCategoryUpdated) {
        onCategoryUpdated();
      }

      return updatedCategory;
    } catch (error: any) {
      throw new Error(`Error updating category: ${error.message}`);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTitle(category.title);
      setDescription(category.description);
    }
  }, [isOpen, category]);
  return (
    <>
      <Button
        size={'md'}
        px={6}
        mr={4}
        onClick={onOpen}
        color={'white'}
        bg={'#FF7A50'}
        _hover={{ bg: '#FF5823' }}
      >
        editar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar nova categoria de veículo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              p={8}
              color={useColorModeValue('gray.700', 'whiteAlpha.900')}
              shadow="base">
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel>Nome</FormLabel>

                  <InputGroup>
                    <InputLeftElement>
                      <FaTruck />
                    </InputLeftElement>
                    <Input type="text" value={title} onChange={handleNameChange} />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Descrição</FormLabel>

                  <Textarea
                    rows={6}
                    resize="none"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </FormControl>
              </VStack>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button bg='#FF7A50' mr={3} color={'white'} _hover={{ bg: '#FF5823' }} onClick={handleSubmit}>
              Salvar
            </Button>
            <Button variant='ghost' onClick={onClose}>cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}