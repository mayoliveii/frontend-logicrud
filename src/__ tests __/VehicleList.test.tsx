jest.mock('react-datepicker/dist/react-datepicker.css', () => { });

import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import VehicleList from '../components/VehicleList/VehicleList';
import '@testing-library/jest-dom';
import apiService from '../apiServices/apiService';

jest.mock('./../apiServices/apiService', () => ({
  getAllCategories: jest.fn(),
}));

describe('VehicleList', () => {
  it('renders VehicleList component and matches snapshot', () => {
    (apiService.getAllCategories as jest.Mock).mockResolvedValue([]);
    const { asFragment } = render(
      <ChakraProvider>
        <VehicleList />
      </ChakraProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the input search', () => {
    (apiService.getAllCategories as jest.Mock).mockResolvedValue([]);
    const { getByPlaceholderText } = render(
      <ChakraProvider>
        <VehicleList />
      </ChakraProvider>
    );
    expect(getByPlaceholderText('Pesquisar veículo por título ou ID')).toBeInTheDocument();
  });
});