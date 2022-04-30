import {Box, Link} from '@chakra-ui/react';

interface Props {
  data: {
    text: string;
    link: string;
  };
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
        href={props.data.link}
        target="_blank"
        rel="noopener noreferrer"
        width="50%"
        fontSize="lg"
        color="#fff"
        fontWeight="bold"
        style={{
          textDecoration: 'none',
        }}>
        {props.data.text}
      </Link>
    </Box>
  );
};

export default ExternalBtn;
