import { render, fireEvent, waitFor } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { CreateModal } from '../components/CreateModal/CreateModal';

jest.mock('./../apiServices/apiService', () => ({
  createCategory: jest.fn(),
}));

const onClose = jest.fn();
const onCategoryAdded = jest.fn();

describe('CreateModal component', () => {
  it('renders CreateModal component and matches snapshot', () => {
    const { asFragment } = render(
      <ChakraProvider>
        <CreateModal isOpen={true} onClose={jest.fn()} />
      </ChakraProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles input and form submission', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ChakraProvider>
        <CreateModal isOpen={true} onClose={onClose} onCategoryAdded={onCategoryAdded} />
      </ChakraProvider>
    );

    fireEvent.change(getByPlaceholderText('Your Name'), { target: { value: 'Test' } });
    fireEvent.change(getByPlaceholderText('Your Message'), { target: { value: 'Test' } });
    fireEvent.click(getByText('Salvar'));

    await waitFor(() => expect(onClose).toHaveBeenCalled());
    expect(onCategoryAdded).toHaveBeenCalled();
  });

  it('handles form submission error', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ChakraProvider>
        <CreateModal isOpen={true} onClose={onClose} onCategoryAdded={onCategoryAdded} />
      </ChakraProvider>
    );

    fireEvent.change(getByPlaceholderText('Your Name'), { target: { value: 'Test' } });
    fireEvent.change(getByPlaceholderText('Your Message'), { target: { value: 'Test' } });
    fireEvent.click(getByText('Salvar'));

    await waitFor(() => expect(onClose).toHaveBeenCalled());
    expect(onCategoryAdded).toHaveBeenCalled();
  });
});