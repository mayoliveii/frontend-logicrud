import { Flex } from "@chakra-ui/react";
import { Profile } from "./../Profile/Profile.tsx";

export function Team() {
  return (
    <Flex
      direction='row'
      alignItems='center'
      justifyContent='center'
      minHeight='80vh'
      gap='20px'
    >
      <Profile
        backgroundImage='https://tewbhv.vtexassets.com/arquivos/ids/158560/image-3fa4291f01d643978250dabb62fa556d.jpg?v=638064571894230000'
        profileImage='https://mayoliveii.s3.us-east-2.amazonaws.com/images/avatar-1.jpeg'
        name='Pedro Guilherme'
        role='Engenheiro de Dados'
        description='Pedro é um engenheiro de dados que cria soluções para análise de grandes volumes de dados, 
        gerando insights importantes para os negócios.'
        tags={['PowerBI', 'SQL', 'Python']}
      />
      <Profile
        backgroundImage='https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-1024x683.jpg'
        profileImage='https://mayoliveii.s3.us-east-2.amazonaws.com/images/avatar-3.jpeg'
        name='Mayara Oliveira'
        role='Desenvolvedora de Software'
        description='Mayara, 24 anos, graduanda em Análise e Desenvolvimento de Sistemas, com mais de 2 anos 
        de experiência como desenvolvedora full stack. Futura colega de trabalho. 😊'
        tags={['Node', 'PostgreSQL', 'Vue']}
      />
      <Profile
        backgroundImage='https://p1p.com.br/blog/wp-content/uploads/2016/02/Dashboards-I.jpg'
        profileImage='https://mayoliveii.s3.us-east-2.amazonaws.com/images/avatar-2.jpg'
        name='John Doe'
        role='Product Manager'
        description='John é um gerente de produto inovador, que lidera equipes multifuncionais para desenvolver 
        soluções de ponta que atendam às necessidades do mercado e dos clientes.'
        tags={['Agile', 'JIRA', 'Scrum']}
      />
    </Flex>
  );
}