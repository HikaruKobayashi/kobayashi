import * as React from 'react';
import {Heading, Box, Text, Image, Link} from '@chakra-ui/react';
import useLocale from '../../../locales/lang';

const Work = () => {
  const lang = useLocale();

  return (
    <Box
      as="section"
      mx="auto"
      width={{base: '90%', lg: '45%'}}
      pt="6"
      data-title={lang.lang.works.title}>
      <Heading as="h2" size="xl" marginBottom="4">
        {lang.lang.works.title}
      </Heading>
      <Box
        display={{base: 'block', md: 'flex'}}
        justifyContent={{base: 'center', md: 'space-between'}}>
        <Box
          width={{base: '80%', md: '50%'}}
          cursor="pointer"
          margin={{base: 'auto', md: 0}}
          paddingBottom={{base: 4, md: 0}}>
          <Link
            href="https://t.co/f8s1QIeBaP"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}>
            <Box
              width={{base: '100%', md: '70%'}}
              borderWidth="1px"
              borderRadius="10px"
              boxShadow="base"
              margin="auto">
              <Image
                src="./images/cafe-sampo.png"
                width="90px"
                height="100%"
                margin="auto"
                py="5"
              />
            </Box>
            <Heading as="h3" size="lg" textAlign="center" py="2">
              {lang.lang.works.cafeSampo.name}
            </Heading>
            <Text textAlign="center"> {lang.lang.works.cafeSampo.text}</Text>
          </Link>
        </Box>
        <Box width={{base: '80%', md: '50%'}} cursor="pointer" margin={{base: 'auto', md: 0}}>
          <Link
            href="https://kobanote.net/"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}>
            <Box
              width={{base: '100%', md: '70%'}}
              borderWidth="1px"
              borderRadius="10px"
              boxShadow="base"
              align="center"
              margin="auto">
              <Box width="100px" margin="auto" py="12">
                <Text> {lang.lang.works.kobanote.name}</Text>
              </Box>
            </Box>
            <Heading as="h3" size="lg" textAlign="center" py="2">
              kobanote
            </Heading>
            <Text textAlign="center"> {lang.lang.works.kobanote.text}</Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Work;
