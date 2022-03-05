import {Box, Stack, Text} from '@chakra-ui/react';
import ThemeBtn from '../common/theme-btn';

const Header = () => {
  return (
    <Box as="header" mx="auto" maxW="2xl" py="6" px={{base: '4', md: '8'}}>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Text>Kobayashi</Text>
        <ThemeBtn />
      </Stack>
    </Box>
  );
};

export default Header;
