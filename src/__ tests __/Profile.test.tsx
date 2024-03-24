import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Profile } from '../components/Profile/Profile';
import '@testing-library/jest-dom';

const profileProps = {
  backgroundImage: 'testBackground.jpg',
  profileImage: 'testProfile.jpg',
  name: 'John Doe',
  role: 'Engineer',
  description: 'Engineer with 5 years of experience',
  tags: ['tag1', 'tag2', 'tag3']
};

describe('Profile', () => {
  it('renders Profile component and matches snapshot', () => {
    const { asFragment } = render(
      <ChakraProvider>
        <Profile {...profileProps} />
      </ChakraProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Profile component with given props', () => {
    const { getByText } = render(
      <ChakraProvider>
        <Profile {...profileProps} />
      </ChakraProvider>
    );

    expect(getByText(profileProps.name)).toBeInTheDocument();
    expect(getByText(profileProps.role)).toBeInTheDocument();
    expect(getByText(profileProps.description)).toBeInTheDocument();
    profileProps.tags.forEach(tag => {
      expect(getByText(tag)).toBeInTheDocument();
    });
  });
});