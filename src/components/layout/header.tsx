import {Box, Stack, Link} from '@chakra-ui/react';
import ThemeBtn from '../common/theme-btn';
import Navbar from '../common/nav-bar';

const Header = () => {
  return (
    <Box as="header" mx="auto" maxW="2xl" py="6" px={{base: '4', md: '8'}}>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Link href="/" textDecoration="none">
          Kobayashi
        </Link>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <ThemeBtn />
          <Navbar />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
