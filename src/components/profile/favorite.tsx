import * as React from 'react';
import {Heading, Box, Text} from '@chakra-ui/react';
import useLocale from './../../../locales/lang';

interface Props {
  icon: string;
  content: string;
}

const Favorite = () => {
  const lang = useLocale();

  return (
    <Box
      as="section"
      width={{base: '90%', lg: '45%'}}
      margin="0 auto"
      data-title={lang.lang.favorite.title}>
      <Heading as="h2" size="xl" marginBottom="4" isTruncated>
        {lang.lang.favorite.title}
      </Heading>
      <Box>
        {lang.lang.favorite.items.map((item: Props, index: number) => (
          <Box display="flex" alignItems="center" key={index}>
            <Text fontSize="4xl">{item.icon}</Text>
            <Text fontSize="2xl" paddingLeft="3">
              {item.content}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Favorite;
