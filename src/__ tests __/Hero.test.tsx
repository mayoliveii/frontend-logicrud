import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import '@testing-library/jest-dom';

jest.mock('./../apiServices/apiService', () => ({
  createCategory: jest.fn(),
}));

describe('Hero', () => {
  it('renders Hero component and matches snapshot', () => {
    const { asFragment } = render(
      <ChakraProvider>
        <Router>
          <Hero />
        </Router>
      </ChakraProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the heading', () => {
    const { getByText } = render(
      <ChakraProvider>
        <Router>
          <Hero />
        </Router>
      </ChakraProvider>
    );
    expect(getByText('Gerenciamento eficiente')).toBeInTheDocument();
    expect(getByText('de veículos de transporte de carga')).toBeInTheDocument();
  });

  it('renders the description', () => {
    const { getByText } = render(
      <ChakraProvider>
        <Router>
          <Hero />
        </Router>
      </ChakraProvider>
    );
    expect(getByText('Gerencie sua frota de transporte com facilidade. Cadastre, atualize e remova veículos com eficiência. Acompanhe manutenção, custos e disponibilidade. Simplifique suas operações logísticas com LogiCRUD.')).toBeInTheDocument();
  });
});