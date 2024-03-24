import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { EditionModal } from '../components/EditionModal/EditionModal';
import { CategoryData } from '../apiServices/apiService';

jest.mock('./../apiServices/apiService', () => ({
  editCategory: jest.fn(),
}));

const onClose = jest.fn();
const onCategoryUpdated = jest.fn();

const editionModalPropsMock: CategoryData = {
  id: '1',
  title: 'Test',
  description: 'Test',
  created_at: '2021-09-15T00:00:00.000Z',
  updated_at: '2021-09-15T00:00:00.000Z',
  deleted_at: null
};

describe('EditionModal component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <ChakraProvider>
        <EditionModal isOpen={true} onClose={onClose} onCategoryUpdated={onCategoryUpdated} category={editionModalPropsMock} />
      </ChakraProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('does not render when isOpen is false', () => {
    const { queryByText } = render(
      <ChakraProvider>
        <EditionModal isOpen={false} onClose={onClose} onCategoryUpdated={onCategoryUpdated} category={editionModalPropsMock} />
      </ChakraProvider>
    );
    expect(queryByText('Salvar')).not.toBeInTheDocument();
  });
});