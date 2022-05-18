import {Box, Stack, Link, useColorMode} from '@chakra-ui/react';
import ThemeBtn from '../common/theme-btn';
import LangBtn from '../common/lang-btn';
import Navbar from '../common/nav-bar';

const Header = () => {
  const {colorMode} = useColorMode();
  return (
    <Box
      as="header"
      width="100%"
      position="fixed"
      backgroundColor={colorMode === 'light' ? '#fff' : '#1A202B'}
      top="0"
      left="0"
      py="2"
      px={{base: '4', md: '8'}}
      borderBottom="1px"
      borderColor="gray.300"
      style={{zIndex: 3}}>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Link href="/" style={{textDecoration: 'none'}}>
          Kobayashi
        </Link>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <LangBtn />
          <ThemeBtn />
          <Navbar />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
