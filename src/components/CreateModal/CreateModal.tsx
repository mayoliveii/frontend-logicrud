/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
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
  VStack,
} from '@chakra-ui/react';
import { FaTruck } from 'react-icons/fa';
import { useState } from 'react';
import apiService from '../../apiServices/apiService';

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCategoryAdded?: () => void;
}

export function CreateModal({ isOpen, onClose, onCategoryAdded }: CreateModalProps) {
  const [formState, setFormState] = useState({ title: '', description: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const newCategory = await apiService.createCategory(formState);

      setFormState({ title: '', description: '' });

      onClose();
      if (onCategoryAdded) {
        onCategoryAdded();
      }

      return newCategory;
    } catch (error: any) {
      throw new Error(`Error creating category: ${error}`);
    }
  };

  const renderNameInput = () => (
    <FormControl isRequired>
      <FormLabel>Nome</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <FaTruck />
        </InputLeftElement>
        <Input
          type="text"
          name="title"
          placeholder="Your Name"
          value={formState.title}
          onChange={handleInputChange}
        />
      </InputGroup>
    </FormControl>
  );

  const renderDescriptionInput = () => (
    <FormControl isRequired>
      <FormLabel>Descrição</FormLabel>
      <Textarea
        name="description"
        placeholder="Your Message"
        rows={6}
        resize="none"
        value={formState.description}
        onChange={handleInputChange}
      />
    </FormControl>
  );

  return (
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
            shadow="base"
          >
            <VStack spacing={5}>
              {renderNameInput()}
              {renderDescriptionInput()}
            </VStack>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button bg="#FF7A50" mr={3} color={'white'} _hover={{ bg: '#FF5823' }} onClick={handleSubmit}>
            Salvar
          </Button>
          <Button variant="ghost" onClick={onClose}>
            cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}