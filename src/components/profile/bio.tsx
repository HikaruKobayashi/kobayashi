import * as React from 'react';
import {Text, List, ListItem, Box, Heading} from '@chakra-ui/react';

const Bio = () => {
  return (
    <Box as="section" mx="auto" maxW="2xl" px={{base: '4', md: '8'}}>
      <List>
        <ListItem pb="2">
          <Heading as="h3" size="md" fontWeight="semibold">
            1998
          </Heading>
          <Text>I was born in Nagano.I lived until I graduated from high school.</Text>
        </ListItem>
        <ListItem pb="2">
          <Heading as="h3" size="md" fontWeight="semibold">
            2017
          </Heading>
          <Text>Entered Nihon University of Economics.Started learning programming.</Text>
        </ListItem>
        <ListItem>
          <Heading as="h3" size="md" fontWeight="semibold">
            2021
          </Heading>
          <Text>Joined DIP Corporation.I still work as a frontend engineer.</Text>
        </ListItem>
      </List>
    </Box>
  );
};

export default Bio;
