import {IconButton} from '@chakra-ui/react';
import {IoLanguage} from 'react-icons/io5';
import useLocale from '../../../locales/lang';

const LangBtn = () => {
  const lang = useLocale();
  return (
    <IconButton
      _focus={{focus: 'none'}}
      aria-label="lang"
      as="a"
      href={lang.locale === 'en' ? 'ja' : '/'}
      icon={<IoLanguage fontSize="30px" />}
    />
  );
};

export default LangBtn;
