import * as React from 'react';
import {Box, Text, List, ListItem} from '@chakra-ui/react';

const BioSection = () => {
  return (
    <Box as="section" mx="auto" maxW="2xl" py="6" px={{base: '4', md: '8'}}>
      <List>
        <ListItem
          pos="relative"
          pl="4"
          pb="6"
          borderLeft="2px"
          borderColor="gray.200"
          _before={{
            content: `''`,
            pos: 'absolute',
            width: '15px',
            height: '15px',
            backgroundColor: 'gray.200',
            borderRadius: '50%',
            left: -2,
          }}>
          <Text fontWeight="semibold">1998</Text>
          <Text>I was bornn in Nagano.</Text>
        </ListItem>
        <ListItem
          pos="relative"
          pl="4"
          pb="6"
          borderLeft="2px"
          borderColor="gray.200"
          _before={{
            content: `''`,
            pos: 'absolute',
            width: '15px',
            height: '15px',
            backgroundColor: 'gray.200',
            borderRadius: '50%',
            left: -2,
          }}>
          <Text fontWeight="semibold">2021</Text>
          <Text>I graduated from Nihon University of Economics.</Text>
        </ListItem>
        <ListItem
          pos="relative"
          pl="4"
          borderLeft="2px"
          borderColor="gray.200"
          _before={{
            content: `''`,
            pos: 'absolute',
            width: '15px',
            height: '15px',
            backgroundColor: 'gray.200',
            borderRadius: '50%',
            left: -2,
          }}>
          <Text fontWeight="semibold">2021</Text>
          <Text>I joined DIP Corporation.</Text>
          <Text>I work as a frontend engineer.</Text>
        </ListItem>
      </List>
    </Box>
  );
};

export default BioSection;
