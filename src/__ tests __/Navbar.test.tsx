import { render, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar, { IconButtonComponent, MenuComponent, NavLink } from '../components/Navbar/Navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('renders snapshot correctly', () => {
    const { asFragment } = render(
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders NavLink correctly', () => {
    const { getByText } = render(
      <ChakraProvider>
        <NavLink href="/test">Test Link</NavLink>
      </ChakraProvider>
    );
    expect(getByText('Test Link')).toBeInTheDocument();
  });

  it('renders MenuComponent correctly', () => {
    const { getByText } = render(
      <ChakraProvider>
        <MenuComponent />
      </ChakraProvider>
    );
    expect(getByText('Mayara Oliveira')).toBeInTheDocument();
    expect(getByText('Desenvolvedora de Software')).toBeInTheDocument();
  });

  it('renders IconButtonComponent correctly and responds to click events', () => {
    const mockOnOpen = jest.fn();
    const mockOnClose = jest.fn();
    const { getByLabelText } = render(
      <ChakraProvider>
        <IconButtonComponent isOpen={false} onOpen={mockOnOpen} onClose={mockOnClose} />
      </ChakraProvider>
    );
    fireEvent.click(getByLabelText('Open Menu'));
    expect(mockOnOpen).toHaveBeenCalled();
  });

  it('renders Navbar correctly', () => {
    const { getByText } = render(
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    );
    expect(getByText('Veículos')).toBeInTheDocument();
    expect(getByText('Sobre')).toBeInTheDocument();
    expect(getByText('Time')).toBeInTheDocument();
  });
});