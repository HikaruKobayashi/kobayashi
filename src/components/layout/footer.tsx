import {Box, Stack, Text} from '@chakra-ui/react';
import * as React from 'react';
import Links from '../link/index';

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" mx="auto" maxW="2xl" py="6" px={{base: '4', md: '8'}}>
      <Stack
        direction="row"
        spacing="4"
        align="center"
        justify="space-between"
        borderTop="1px"
        borderColor="gray.600">
        <Text>&copy;&nbsp;{new Date().getFullYear()}&nbsp;Kobayashi</Text>
        <Links />
      </Stack>
    </Box>
  );
};

export default Footer;
