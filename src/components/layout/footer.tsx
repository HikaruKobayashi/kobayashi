import {Box, Text, Link} from '@chakra-ui/react';
import * as React from 'react';
import Links from '../link/index';

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
      <Box padding="2">
        <Link href="privacy-policy" width="100%" style={{textDecoration: 'none'}}>
          Privacy&nbsp;Policy
        </Link>
      </Box>
      <Text>&copy;&nbsp;{new Date().getFullYear()}&nbsp;Kobayashi</Text>
    </Box>
  );
};

export default Footer;
