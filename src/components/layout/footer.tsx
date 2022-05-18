import {Box, Text} from '@chakra-ui/react';
import * as React from 'react';
import Links from '../common/social-link';

const Footer = () => {
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
      borderColor="gray.300">
      <Links />
      <Text>&copy;&nbsp;{new Date().getFullYear()}&nbsp;Kobayashi</Text>
    </Box>
  );
};

export default Footer;
