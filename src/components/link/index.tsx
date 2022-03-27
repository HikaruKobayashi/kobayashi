import * as React from 'react';
import {ButtonGroup, ButtonGroupProps, IconButton} from '@chakra-ui/react';
import {FaGithub, FaTwitter} from 'react-icons/fa';

const Links = (props: ButtonGroupProps) => {
  return (
    <ButtonGroup variant="ghost" color="glay.600" {...props}>
      <IconButton
        _focus={{focus: 'none'}}
        as="a"
        href="https://github.com/HikaruKobayashi/kobayashi"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        icon={<FaGithub fontSize="20px" />}
      />
      <IconButton
        _focus={{focus: 'none'}}
        as="a"
        href="https://twitter.com/0719kobayashi"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
        icon={<FaTwitter fontSize="20px" />}
      />
    </ButtonGroup>
  );
};

export default Links;
