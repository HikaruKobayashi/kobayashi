import {Box, Link} from '@chakra-ui/react';

interface Props {
  data: string;
}

const ExternalBtn = (props: Props) => {
  return (
    <Box
      width={{base: '80%', md: '40%'}}
      margin="auto"
      textAlign="center"
      backgroundColor="#3AA169"
      borderRadius="30px"
      paddingY="3">
      <Link
        href="https://github.com/HikaruKobayashi/kobayashi"
        target="_blank"
        rel="noopener noreferrer"
        width="50%"
        fontSize="lg"
        color="#fff"
        fontWeight="bold"
        style={{
          textDecoration: 'none',
        }}>
        {props.data}
      </Link>
    </Box>
  );
};

export default ExternalBtn;
