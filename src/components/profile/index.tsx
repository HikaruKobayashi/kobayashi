import * as React from 'react';
import {Heading, Box, Text, Image} from '@chakra-ui/react';

const ProfileSection = () => {
  return (
    <Box as="section" width={{base: '90%', lg: '50%'}} margin="0 auto" py="6">
      <Box display={{md: 'flex'}}>
        <Box>
          <Heading as="h1" size="xl" isTruncated>
            Hikaru Kobayashi
          </Heading>
          <Text marginY="4" fontSize="2xl">
            I&apos;m a frontend engineer working in Tokyo. I work at DIP Corporation as a frontend
            engineer, and I&apos;m doing personal development. I'm developing native apps outside of
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
