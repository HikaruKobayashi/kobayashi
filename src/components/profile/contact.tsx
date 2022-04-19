import * as React from 'react';
import {CheckCircleIcon} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';

const Contact = () => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [content, setContent] = React.useState<string>('');
  const [nameError, setNameError] = React.useState<boolean>(false);
  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [contentError, setContentError] = React.useState<boolean>(false);
  const [nameErrorText, setNameErrorText] = React.useState<string>('');
  const [emailErrorText, setEmailErrorText] = React.useState<string>('');
  const [contentErrorText, setContentErrorText] = React.useState<string>('');

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value.length === 0) {
      setNameError(true);
      setNameErrorText('Name is required.');
    } else if (event.target.value.length > 20) {
      setNameError(true);
      setNameErrorText('20 characters or less');
    } else {
      setNameError(false);
    }
  };

  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reg =
      /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    setEmail(event.target.value);
    if (event.target.value.length === 0) {
      setEmailError(true);
      setEmailErrorText('Email is required.');
    } else if (!reg.test(event.target.value)) {
      setEmailError(true);
      setEmailErrorText('Not a valid email address');
    } else {
      setEmailError(false);
    }
  };

  const contentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    if (event.target.value.length === 0) {
      setContentError(true);
      setContentErrorText('Content is required.');
    } else if (event.target.value.length > 300) {
      setContentError(true);
      setContentErrorText('300 characters or less');
    } else {
      setContentError(false);
    }
  };

  return (
    <Box as="section" width={{base: '90%', lg: '30%'}} margin="0 auto" textAlign="center">
      <Heading as="h2">Contact</Heading>
      <FormControl isInvalid={nameError} isRequired>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input type="name" value={name} onChange={nameChange} />
        {nameError ? <FormErrorMessage>{nameErrorText}</FormErrorMessage> : <></>}
      </FormControl>
      <FormControl isInvalid={emailError} isRequired>
        <FormLabel htmlFor="email" marginTop="2">
          Email
        </FormLabel>
        <Input id="email" type="email" value={email} onChange={emailChange} />
        {emailError ? <FormErrorMessage>{emailErrorText}</FormErrorMessage> : <></>}
      </FormControl>
      <FormControl isInvalid={contentError} isRequired>
        <FormLabel htmlFor="content" marginTop="2">
          Content
        </FormLabel>
        <Textarea id="content" type="content" value={content} onChange={contentChange} />
        {contentError ? <FormErrorMessage>{contentErrorText}</FormErrorMessage> : <></>}
      </FormControl>
      <Button
        leftIcon={<CheckCircleIcon />}
        colorScheme="green"
        variant="solid"
        margin="10px auto 0">
        Submit
      </Button>
    </Box>
  );
};

export default Contact;
