import { render, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { DeletionModal } from '../components/DeletionModal/DeletionModal';

describe('DeletionModal component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <ChakraProvider>
        <DeletionModal isOpen={true} onClose={jest.fn()} onConfirm={jest.fn()} />
      </ChakraProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders when isOpen is true', () => {
    const { getByText } = render(
      <ChakraProvider>
        <DeletionModal isOpen={true} onClose={jest.fn()} onConfirm={jest.fn()} />
      </ChakraProvider>
    );
    expect(getByText('Tem certeza que deseja deletar esta categoria?')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    const { queryByText } = render(
      <ChakraProvider>
        <DeletionModal isOpen={false} onClose={jest.fn()} onConfirm={jest.fn()} />
      </ChakraProvider>
    );
    expect(queryByText('Tem certeza que deseja deletar esta categoria?')).not.toBeInTheDocument();
  });

  it('calls onClose when cancel button is clicked', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <ChakraProvider>
        <DeletionModal isOpen={true} onClose={onClose} onConfirm={jest.fn()} />
      </ChakraProvider>
    );
    fireEvent.click(getByText('cancelar'));
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onConfirm when confirm button is clicked', () => {
    const onConfirm = jest.fn();
    const { getByText } = render(
      <ChakraProvider>
        <DeletionModal isOpen={true} onClose={jest.fn()} onConfirm={onConfirm} />
      </ChakraProvider>
    );
    fireEvent.click(getByText('Sim'));
    expect(onConfirm).toHaveBeenCalled();
  });
});