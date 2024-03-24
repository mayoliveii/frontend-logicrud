import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import Vehicle from '../components/Vehicle/Vehicle';
import '@testing-library/jest-dom';

jest.mock('./../apiServices/apiService', () => ({
  createCategory: jest.fn(),
  deleteCategory: jest.fn(),
}));

describe('Vehicle', () => {
  it('renders Vehicle component with given props', () => {
    const vehicleProps = {
      category: {
        title: 'Test Title',
        id: '1',
        description: 'Test Description',
        created_at: new Date().toString(),
        updated_at: new Date().toString(),
        deleted_at: null,
      },
      onCategoryDeleted: jest.fn(),
      onCategoryUpdated: jest.fn(),
    };

    const { getByText, asFragment } = render(
      <ChakraProvider>
        <Vehicle {...vehicleProps} />
      </ChakraProvider>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByText(vehicleProps.category.title)).toBeInTheDocument();
    expect(getByText(vehicleProps.category.description)).toBeInTheDocument();
  });
});