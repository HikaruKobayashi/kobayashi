import * as React from 'react';
import {Heading, Box, TableContainer, Table, Thead, Tr, Th, Tbody, Td} from '@chakra-ui/react';
import useLocale from '../../../locales/lang';

const Bio = () => {
  const lang = useLocale();

  return (
    <Box as="section" width={{base: '90%', lg: '45%'}} margin="0 auto" py="6" id="bio">
      <Heading as="h2" size="xl" marginBottom="4">
        {lang.lang.bio.title}
      </Heading>
      <Box borderWidth="1px" borderRadius="10px" boxShadow="base">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>{lang.lang.bio.table.company}</Th>
                <Th>{lang.lang.bio.table.period}</Th>
                <Th>{lang.lang.bio.table.occupation}</Th>
                <Th>{lang.lang.bio.table.skill}</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{lang.lang.bio.dip.name}</Td>
                <Td>{lang.lang.bio.dip.period}</Td>
                <Td>{lang.lang.bio.dip.occupation}</Td>
                <Td>
                  HTML5, CSS3, DartSass
                  <br />
                  JavaScript, jQuery, Vue.js, gulp
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Bio;
