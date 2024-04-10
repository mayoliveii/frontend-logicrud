'use client';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Image,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { FaLinkedin } from 'react-icons/fa';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

export const NavLink = ({ children, href, noHover }: NavLinkProps & { noHover?: boolean }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={noHover ? {} : {
        textDecoration: 'none',
        bg: bgColor,
      }}
      href={href}>
      {children}
    </Box>
  );
};

const Links = [
  { name: 'Veículos', path: '/vehicle-list' },
  { name: 'Sobre', path: '/about' },
  { name: 'Time', path: '/team' },
];

export const MenuComponent = () => (
  <Menu>
    <MenuButton
      as={Button}
      rounded={'full'}
      variant={'link'}
      cursor={'pointer'}
      minW={0}>
      <Avatar
        size={'sm'}
        src={'/images/avatar-3.png'}
        style={{ maxWidth: '40px', maxHeight: '40px', borderRadius: '50%' }}
      />
    </MenuButton>
    <MenuList>
      <Box p={2}>
        <Text>Mayara Oliveira</Text>
        <Text fontSize="sm" color="gray.500">Desenvolvedora de Software</Text>
      </Box>
      <MenuDivider />
      <MenuItem>
        <ChakraLink href="https://www.linkedin.com/in/mayoliveii/" isExternal>
          <HStack spacing={2}>
            <FaLinkedin />
            <Text>LinkedIn</Text>
          </HStack>
        </ChakraLink>
      </MenuItem>
    </MenuList>
  </Menu>
);

export const IconButtonComponent = ({ isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void }) => (
  <IconButton
    size={'md'}
    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
    aria-label={'Open Menu'}
    display={{ md: 'none' }}
    onClick={isOpen ? onClose : onOpen}
  />
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} m={1}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButtonComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          <HStack spacing={8} alignItems={'center'}>
            <NavLink noHover href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width="150px"
                height="80px"
              />
            </NavLink>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ChakraLink href="https://verticalti.com.br/#solucoes" isExternal>
              <Button
                variant={'solid'}
                bg={'#FF7A50'}
                _hover={{ bg: '#FF5823' }}
                color={'white'}
                size={'sm'}
                mr={4}
                leftIcon={<AddIcon />}>
                Soluções
              </Button>
            </ChakraLink>
            <MenuComponent />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}