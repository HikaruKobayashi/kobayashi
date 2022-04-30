import * as React from 'react';
import {Heading, Box, Text, Image, Stack} from '@chakra-ui/react';
import useLocale from './../../../locales/lang';
import ExternalBtn from './external-btn';

const Top = () => {
  const lang = useLocale();
  const btnText = lang.lang.btn;

  return (
    <Box as="section" width={{base: '90%', lg: '45%'}} margin="0 auto" py="6" id="top">
      <Stack direction="row" align="center" justify="center">
        <Heading as="h1" fontSize={{base: '4xl', lg: '5xl'}} textAlign="center">
          Hikaru
          <br />
          Kobayashi
        </Heading>
        <Image
          rounded="full"
          width={{base: '130px', md: '150px'}}
          height={{base: '130px', md: '150px'}}
          minWidth={{base: '130px', md: '150px'}}
          src="./images/cafe.jpg"
          alt="Kobayashi's icon"
          margin="auto"
        />
      </Stack>
      <Text textAlign="center" py="4" fontSize="lg">
        {lang.lang.top.subTitle}
      </Text>
      <ExternalBtn data={btnText} />
    </Box>
  );
};

export default Top;
