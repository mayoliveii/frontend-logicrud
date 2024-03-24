import { render } from '@testing-library/react';
import About, { AboutTags, AboutAuthor } from '../components/About/About';
import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';

describe('About', () => {
  describe('About component', () => {
    it('renders About component and matches snapshot', () => {
      const { asFragment } = render(
        <ChakraProvider>
          <About />
        </ChakraProvider>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('AboutTags component', () => {
    it('renders AboutTags component and matches snapshot', () => {
      const tags = ['Gestão de Veículos', 'Transporte de Carga'];
      const { asFragment } = render(
        <ChakraProvider>
          <AboutTags tags={tags} />
        </ChakraProvider>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('AboutAuthor component', () => {
    it('renders AboutAuthor component and matches snapshot', () => {
      const name = 'Fernando Silva';
      const date = new Date('2022-01-01T19:01:27Z');
      const { asFragment } = render(
        <ChakraProvider>
          <AboutAuthor name={name} date={date} />
        </ChakraProvider>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});