import {Box, Container, ColorModeScript} from '@chakra-ui/react';
import {ReactNode} from 'react';
import HomeHead from '../common/head';
import Header from './header';
import Footer from './footer';
import theme from './../../../lib/theme';

type Props = {
  children: ReactNode;
};

const Main = ({children, ...props}: Props) => {
  return (
    <Box as="main">
      <HomeHead />
      <Container maxW="container.md" {...props}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Header />
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
