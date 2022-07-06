import {Box, Text, useColorMode} from '@chakra-ui/react';
import * as React from 'react';
import Links from '../common/social-link';

const Footer = () => {
  const {colorMode} = useColorMode();
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      width="100%"
      py="6"
      textAlign="center"
      px={{base: '4', md: '8'}}
      borderTop="1px"
      borderColor="gray.300"
      backgroundColor={colorMode === 'light' ? '#fff' : '#1A202B'}
    >
      <Links />
      <Text>&copy;&nbsp;{new Date().getFullYear()}&nbsp;Kobayashi</Text>
    </Box>
  );
};

export default Footer;
