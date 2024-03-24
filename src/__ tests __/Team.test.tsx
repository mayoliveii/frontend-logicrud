import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Team } from '../components/Team/Team';
import '@testing-library/jest-dom';

describe('Team', () => {
  it('renders Profile component and matches snapshot', () => {
    const { asFragment } = render(
      <ChakraProvider>
        <Team />
      </ChakraProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Team component with Profile components', () => {
    const { getByText } = render(
      <ChakraProvider>
        <Team />
      </ChakraProvider>
    );

    expect(getByText('Pedro Guilherme')).toBeInTheDocument();
    expect(getByText('Engenheiro de Dados')).toBeInTheDocument();
    expect(getByText('Mayara Oliveira')).toBeInTheDocument();
    expect(getByText('Desenvolvedora de Software')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Product Manager')).toBeInTheDocument();
  });
});