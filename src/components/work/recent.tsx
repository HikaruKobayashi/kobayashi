import * as React from 'react';
import {Heading, Box, Text, Image, Flex, Spacer, Link} from '@chakra-ui/react';

const RecentWork = () => {
  return (
    <Box as="section" mx="auto" maxW="2xl" py="6" px={{base: '4', md: '8'}}>
      <Heading as="h2" size="lg" marginBottom="4">
        Works
      </Heading>
      <Flex>
        <Box width="45%" cursor="pointer">
          <Link
            href="https://t.co/f8s1QIeBaP"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}>
            <Box width="100%" borderWidth="1px" borderRadius="10px">
              <Image
                src="./images/cafe-sampo.png"
                width="90px"
                height="100%"
                margin="auto"
                py="5"
              />
            </Box>
            <Heading as="h3" size="md" textAlign="center" py="2">
              cafe sampo
            </Heading>
            <Text textAlign="center">cafe sampo is cafe search app</Text>
          </Link>
        </Box>
        <Spacer />
        <Box width="45%" cursor="pointer">
          <Link
            href="https://kobanote.net/"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}>
            <Box width="100%" borderWidth="1px" borderRadius="10px" align="center">
              <Box width="100px" margin="auto" py="12">
                <Text>kobanote</Text>
              </Box>
            </Box>
            <Heading as="h3" size="md" textAlign="center" py="2">
              kobanote
            </Heading>
            <Text textAlign="center">kobanote is my tech blog</Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default RecentWork;
