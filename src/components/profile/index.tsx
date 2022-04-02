import * as React from 'react';
import {Heading, Box, Text, Image} from '@chakra-ui/react';

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
            engineer, and I&apos;m doing personal development.I'm developing native apps outside of
            work.
          </Text>
        </Box>
        <Image
          rounded="full"
          width="full"
          height="150px"
          maxWidth="150px"
          maxHeight="150px"
          src="./images/cafe.jpg"
          alt="Kobayashi's icon"
          margin="auto"
        />
      </Box>
    </Box>
  );
};

export default ProfileSection;
