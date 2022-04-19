import {Box, ColorModeScript} from '@chakra-ui/react';
import {ReactNode} from 'react';
import HomeHead from './head';
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
      <Box width="100%" height="100vh" margin="0" padding="0" {...props}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Header />
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Main;
