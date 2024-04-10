import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';

interface TagProps {
  tag: string;
}

export const TagItem: React.FC<TagProps> = ({ tag }) => (
  <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
    {tag}
  </Tag>
);

interface AboutTagsProps {
  marginTop?: number;
  tags: string[];
}

export const AboutTags: React.FC<AboutTagsProps> = ({ marginTop = 0, tags }) => (
  <HStack spacing={2} marginTop={marginTop}>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} />
    ))}
  </HStack>
);

interface AboutAuthorProps {
  date: Date;
  name: string;
}

export const AboutAuthor: React.FC<AboutAuthorProps> = ({ date, name }) => (
  <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
    <Image
      borderRadius="full"
      boxSize="40px"
      src="/images/avatar-5.png"
      alt={`Avatar of ${name}`}
    />
    <Text fontWeight="medium">{name}</Text>
    <Text>—</Text>
    <Text>{date.toLocaleDateString()}</Text>
  </HStack>
);

export default function About() {
  return (
    <Container maxW={'6xl'} p="12">
      <Heading as="h1">Sobre o LogiCRUD</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
            justifyContent={'center'}
          >
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }} >
              <Image
                borderRadius="lg"
                ml={3}
                src={
                  '/images/controller-logistic.jpg'
                }
                alt="Imagem de um caminhão de transporte de carga"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <AboutTags tags={['Gestão de Veículos', 'Transporte de Carga']} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Revolucionando a Gestão de Veículos de Transporte de Carga
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            textAlign="justify"
          >
            O LogiCRUD é uma aplicação CRUD (Create, Read, Update, Delete) projetada para simplificar e otimizar a
            gestão de veículos de transporte de carga. Com uma interface amigável e intuitiva, o LogiCRUD permite o registro,
            atualização e remoção eficiente de categorias de veículos. Além disso, oferece funcionalidades de pesquisa e filtragem,
            permitindo aos usuários localizar e visualizar categorias de veículos com base em títulos, IDs e intervalos de datas específicos.
          </Text>
          <AboutAuthor name="Fernando Silva" date={new Date('2022-01-01T19:01:27Z')} />
        </Box>
      </Box>
      <Divider marginTop="5" />
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Nossa Missão</Heading>
        <Text as="p" fontSize="lg" textAlign="justify" >
          No mundo acelerado de hoje, a eficiência na logística de transporte de carga é mais crucial do que nunca.
          Com o aumento constante da demanda global, as empresas de transporte enfrentam o desafio de gerenciar suas
          frotas de maneira eficaz e eficiente. É aqui que o LogiCRUD entra em cena.
        </Text>
        <Text as="p" fontSize="lg" textAlign="justify">
          Nosso objetivo com o LogiCRUD é simplificar e revolucionar suas operações logísticas. Compreendemos que a
          gestão de uma frota de transporte pode ser uma tarefa complexa e demorada. Por isso, desenvolvemos uma solução
          que torna esse processo fácil e sem complicações.
        </Text>
        <Text as="p" fontSize="lg" textAlign="justify">
          O LogiCRUD é uma aplicação CRUD (Create, Read, Update, Delete) intuitiva e fácil de usar, projetada especificamente
          para a gestão de veículos de transporte de carga. Com o LogiCRUD, você pode registrar, atualizar e remover informações
          de veículos com apenas alguns cliques. Além disso, nossa aplicação oferece funcionalidades de pesquisa e filtragem
          robustas, permitindo que você localize e visualize categorias de veículos com base em títulos, IDs e intervalos de datas específicos.
        </Text>
        <Text as="p" fontSize="lg" textAlign="justify">
          Mas não paramos por aí. Estamos constantemente atualizando e melhorando o LogiCRUD, incorporando as mais recentes tecnologias
          de ponta para garantir que nossa aplicação permaneça na vanguarda da gestão de veículos de transporte de carga. Com o LogiCRUD,
          você pode ter certeza de que está usando a solução mais avançada e eficiente disponível no mercado.
        </Text>
      </VStack>
    </Container>
  )
}