import { Badge, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

interface ProfileProps {
  backgroundImage: string;
  profileImage: string;
  name: string;
  role: string;
  description: string;
  tags: string[];
}

export function Profile({
  backgroundImage,
  profileImage,
  name,
  role,
  description,
  tags
}: ProfileProps) {
  const boxBg = useColorModeValue("white !important", "#111c44 !important");
  const mainText = useColorModeValue("gray.800", "white");
  const secondaryText = useColorModeValue("gray.400", "gray.400");

  return (
    <Flex
      borderRadius='20px'
      bg={boxBg}
      p='20px'
      h='400px'
      w={{ base: "315px", md: "345px" }}
      alignItems='center'
      boxShadow='dark-lg'
      direction='column'
      justifyContent='space-between'
    >
      <Flex flexDirection='column'>
        <Image
          src={backgroundImage}
          w='300px'
          h='110px'
          borderRadius='20px'
        />
        <Flex flexDirection='column' mb='10px'>
          <Image
            src={profileImage}
            border='5px solid red'
            mx='auto'
            borderColor={boxBg}
            width='68px'
            height='68px'
            mt='-38px'
            borderRadius='50%'
          />
          <Text
            fontWeight='600'
            color={mainText}
            textAlign='center'
            fontSize='xl'>
            {name}
          </Text>
          <Text
            color={secondaryText}
            textAlign='center'
            fontSize='sm'
            fontWeight='500'>
            {role}
          </Text>
        </Flex>
        <Text
          color={mainText}
          fontSize='md'
          textAlign='center'
          mb='10px'>
          {description}
        </Text>
      </Flex>
      <Flex wrap="wrap" justifyContent="center">
        {tags.map((tag) => (
          <Badge colorScheme="gray" fontSize="sm" m="1">{tag}</Badge>
        ))}
      </Flex>
    </Flex>
  );
}