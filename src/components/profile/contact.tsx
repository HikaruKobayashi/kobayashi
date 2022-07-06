import React, {useState} from 'react';
import {
  Box,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  useColorMode,
} from '@chakra-ui/react';
import {CheckCircleIcon} from '@chakra-ui/icons';
import {WarningIcon} from '@chakra-ui/icons';
import useLocale from './../../../locales/lang';
import {useForm} from 'react-hook-form';

const Contact = () => {
  const lang = useLocale();
  const {colorMode} = useColorMode();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [contentError, setContentError] = useState<boolean>(false);
  const [nameErrorText, setNameErrorText] = useState<string>('');
  const [emailErrorText, setEmailErrorText] = useState<string>('');
  const [contentErrorText, setContentErrorText] = useState<string>('');
  const [sendStatus, setSendStatus] = useState<boolean>(false);
  const {handleSubmit} = useForm();

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value.length === 0) {
      setNameError(true);
      setNameErrorText(lang.lang.contact.nameError);
    } else if (event.target.value.length > 20) {
      setNameError(true);
      setNameErrorText(lang.lang.contact.nameCaraError);
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
      setEmailErrorText(lang.lang.contact.emailNeedError);
    } else if (!reg.test(event.target.value)) {
      setEmailError(true);
      setEmailErrorText(lang.lang.contact.emailInvalidError);
    } else {
      setEmailError(false);
    }
  };

  const contentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    if (event.target.value.length === 0) {
      setContentError(true);
      setContentErrorText(lang.lang.contact.contentError);
    } else if (event.target.value.length > 300) {
      setContentError(true);
      setContentErrorText(lang.lang.contact.contentCaraError);
    } else {
      setContentError(false);
    }
  };

  const sendMsg = async () => {
    setSendStatus(true);
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: content,
      }),
    });

    if (res.ok) {
      alert(lang.lang.contact.success);
    } else {
      alert(lang.lang.contact.failed);
    }

    setSendStatus(false);
    setName('');
    setEmail('');
    setContent('');
  };

  return (
    <Box
      as="section"
      width={{base: '90%', lg: '30%'}}
      margin="0 auto"
      pt="6"
      textAlign="center"
      data-title={lang.lang.contact.title}>
      <Heading as="h2">{lang.lang.contact.title}</Heading>
      <form onSubmit={handleSubmit(sendMsg)}>
        <FormControl isInvalid={nameError} isRequired>
          <FormLabel htmlFor="name">{lang.lang.contact.name}</FormLabel>
          <Input type="name" value={name} onChange={nameChange} backgroundColor={colorMode === 'light' ? '#fff' : '#1A202B'} />
          {nameError ? (
            <Box display="flex" alignItems="center" marginTop="2">
              <WarningIcon color={colorMode === 'light' ? 'red.500' : 'red.300'} />
              <FormErrorMessage marginTop="0" marginLeft="1">
                {nameErrorText}
              </FormErrorMessage>
            </Box>
          ) : (
            <></>
          )}
        </FormControl>
        <FormControl isInvalid={emailError} isRequired>
          <FormLabel htmlFor="email" marginTop="2">
            {lang.lang.contact.email}
          </FormLabel>
          <Input id="email" type="email" value={email} onChange={emailChange} backgroundColor={colorMode === 'light' ? '#fff' : '#1A202B'} />
          {emailError ? (
            <Box display="flex" alignItems="center" marginTop="2">
              <WarningIcon color={colorMode === 'light' ? 'red.500' : 'red.300'} />
              <FormErrorMessage marginTop="0" marginLeft="1">
                {emailErrorText}
              </FormErrorMessage>
            </Box>
          ) : (
            <></>
          )}
        </FormControl>
        <FormControl isInvalid={contentError} isRequired>
          <FormLabel htmlFor="content" marginTop="2">
            {lang.lang.contact.content}
          </FormLabel>
          <Textarea id="content" type="content" value={content} onChange={contentChange} backgroundColor={colorMode === 'light' ? '#fff' : '#1A202B'} />
          {contentError ? (
            <Box display="flex" alignItems="center" marginTop="2">
              <WarningIcon color={colorMode === 'light' ? 'red.500' : 'red.300'} />
              <FormErrorMessage marginTop="0" marginLeft="1">
                {contentErrorText}
              </FormErrorMessage>
            </Box>
          ) : (
            <></>
          )}
        </FormControl>
        {name.length != 0 &&
        email.length != 0 &&
        content.length != 0 &&
        !nameError &&
        !emailError &&
        !contentError ? (
          <Button
            isLoading={sendStatus ? true : false}
            leftIcon={<CheckCircleIcon />}
            type="submit"
            colorScheme="green"
            variant="solid"
            margin="16px auto">
            {lang.lang.contact.button}
          </Button>
        ) : (
          <Button
            leftIcon={<WarningIcon />}
            isDisabled
            colorScheme="gray"
            variant="solid"
            margin="16px auto">
            {lang.lang.contact.button}
          </Button>
        )}
      </form>
    </Box>
  );
};

export default Contact;
