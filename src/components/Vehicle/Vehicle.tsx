import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  List,
  ListIcon,
  ListItem,
  Code,
  Box,
  Badge,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import apiService, { CategoryData } from "../../apiServices/apiService";
import { formatDate } from '../../helpers/date.ts';
import { DeletionModal } from "../DeletionModal/DeletionModal.tsx";
import { EditionModal } from "../EditionModal/EditionModal.tsx";
import { useEffect, useState } from "react";
import { IMAGE_PATH } from "./images-s3.ts";

export interface VehicleProps {
  category: CategoryData;
  onCategoryDeleted: () => void;
  onCategoryUpdated: () => void;
}

function getRandomVehicleImageUrl() {
  const randomIndex = Math.floor(Math.random() * IMAGE_PATH.length);
  const imageUrl = IMAGE_PATH[randomIndex];
  return imageUrl;
}

export default function Vehicle({ category, onCategoryDeleted, onCategoryUpdated }: VehicleProps) {
  const { isOpen: isModalOpen, onOpen: openModal, onClose: closeModal } = useDisclosure();

  const { title, id, description, created_at, updated_at } = category;

  const [imageUrl, setImageUrl] = useState(getRandomVehicleImageUrl());

  useEffect(() => {
    setImageUrl(getRandomVehicleImageUrl());
  }, [id]);

  const deleteCategory = async (categoryId: string) => {
    try {
      await apiService.deleteCategory(categoryId);
      onCategoryDeleted?.();
    } catch (error) {
      console.error('Failed to delete category:', error);
    }
  };

  return (
    <Box my={7} boxShadow='2xl' rounded='md' bg='white'>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        variant='outline'
        gap={3}
      >
        <Image
          borderTopLeftRadius='md'
          borderBottomLeftRadius='md'
          boxSize={{ base: '50%', sm: '200px' }}
          height={{ base: '50%', sm: '330px' }}
          objectFit='cover'
          src={imageUrl} // Use imageUrl here
          alt='Random vehicle category image'
        />
        <Stack w={'100%'}>
          <CardBody>
            <Flex justifyContent="space-between" width="100%">
              <Heading size='md'>{title}</Heading>
              <Box ml="auto">
                <Badge variant='subtle' colorScheme='gray'>
                  {id}
                </Badge>
              </Box>
            </Flex>

            <Text py='2'>
              {description}
            </Text>
          </CardBody>
          <List spacing={3} ml={4}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='yellow.300' />
              Creation date:
              <Code as='span' ml={3}>
                {formatDate(created_at)}
              </Code>
            </ListItem>
            <ListItem>
              <ListIcon as={MdSettings} color='yellow.500' />
              Update date:
              <Code as='span' ml={3}>
                {formatDate(updated_at)}
              </Code>
            </ListItem>
          </List>
          <CardFooter>
            <EditionModal isOpen={isModalOpen} onClose={closeModal} category={category} onCategoryUpdated={onCategoryUpdated} />
            <Button color='gray.400' variant='link' onClick={openModal}>
              deletar
            </Button>
          </CardFooter>
          <DeletionModal isOpen={isModalOpen} onClose={closeModal} onConfirm={() => deleteCategory(id)} />
        </Stack>
      </Card>
    </Box>
  );
}