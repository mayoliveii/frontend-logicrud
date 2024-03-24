import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { CreateModal } from '../CreateModal/CreateModal';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={'5xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 2, md: 8 }}
        py={{ base: 5, md: 20 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 2, md: 4 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '20%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#FF5823',
                zIndex: -1,
              }}>
              Gerenciamento eficiente
            </Text>
            <br />
            <Text as={'span'} color={'#FF5823'}>
              de veículos de transporte de carga
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Gerencie sua frota de transporte com facilidade. Cadastre, atualize e remova veículos com eficiência.
            Acompanhe manutenção, custos e disponibilidade. Simplifique suas operações logísticas com LogiCRUD.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'#FF7A50'}
              _hover={{ bg: '#FF5823' }}
            >
              <Link to="/vehicle-list">
                Ver veículos
              </Link>
            </Button>


            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              onClick={onOpen}
              variant='ghost'
            >
              Nova categoria
            </Button>
            <CreateModal isOpen={isOpen} onClose={onClose} />
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'orange.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://mayoliveii.s3.us-east-2.amazonaws.com/images/merchandise-truck.jpg'
              }
            />
          </Box>
        </Flex>

      </Stack>
    </Container>
  )
}

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}