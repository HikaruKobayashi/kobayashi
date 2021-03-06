import * as React from 'react';
import {Heading, Box, Text} from '@chakra-ui/react';
import useLocale from './../../../locales/lang';

const Profile = () => {
  const lang = useLocale();

  return (
    <Box
      as="section"
      width={{base: '90%', lg: '45%'}}
      margin="0 auto"
      pt="6"
      data-title={lang.lang.profile.title}>
      <Box display={{md: 'flex'}}>
        <Box>
          <Heading as="h1" size="xl" marginBottom="4" isTruncated>
            {lang.lang.profile.title}
          </Heading>
          <Text fontSize="2xl">{lang.lang.profile.content}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
