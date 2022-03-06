import * as React from 'react';
import {Heading, Box, Text, Image} from '@chakra-ui/react';
import Bio from '../profile/bio';

const ProfileSection = () => {
  return (
    <Box as="section" mx="auto" maxW="2xl" py="6" px={{base: '4', md: '8'}}>
      <Box display={{md: 'flex'}}>
        <Box>
          <Heading as="h1" size="lg" isTruncated>
            Hi,I&apos;m Hikaru Kobayashi.
          </Heading>
          <Text marginY="4">
            I&apos;m a frontend engineer working in Tokyo.I work at DIP Corporation as a frontend
            engineer, and I&apos;m doing personal development.
          </Text>
        </Box>
        {/* <Image rounded="full" maxWidth="200px" maxHeight="200px" src="./images/kobayashi.jpg" alt="Hikaru Kobayashi" margin="auto"/> */}
      </Box>
      <Bio />
    </Box>
  );
};

export default ProfileSection;
