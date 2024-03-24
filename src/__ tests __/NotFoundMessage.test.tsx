import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import NotFoundMessage from '../components/NotFoundMessage/NotFoundMessage';
import '@testing-library/jest-dom';

describe('NotFoundMessage', () => {
  it('renders Error component with given title and description', () => {
    const { getByText, asFragment } = render(
      <ChakraProvider>
        <NotFoundMessage title="Test Error" description="This is a test error" />
      </ChakraProvider>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByText('Test Error')).toBeInTheDocument();
    expect(getByText('This is a test error')).toBeInTheDocument();
  });
});