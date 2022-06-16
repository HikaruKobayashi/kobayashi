import * as React from 'react';
import {Heading, Box, TableContainer, Table, Thead, Tr, Th, Tbody, Td} from '@chakra-ui/react';
import useLocale from '../../../locales/lang';

interface Props {
  name: string;
  period: string;
  occupation: string;
  skill: string;
}
const Bio = () => {
  const lang = useLocale();

  return (
    <Box
      as="section"
      width={{base: '90%', lg: '45%'}}
      margin="0 auto"
      pt="6"
      data-title={lang.lang.bio.title}>
      <Heading as="h2" size="xl" marginBottom="4">
        {lang.lang.bio.title}
      </Heading>
      <Box borderWidth="1px" borderRadius="10px" boxShadow="base">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                {lang.lang.bio.table.map((item: string, index: number) => (
                  <Th key={index}>{item}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {lang.lang.bio.company.map((item: Props, index: number) => {
                return (
                  <Tr key={index}>
                    <Td>{item.name}</Td>
                    <Td>{item.period}</Td>
                    <Td>{item.occupation}</Td>
                    <Td>{item.skill}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Bio;
