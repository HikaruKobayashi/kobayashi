import {IconButton, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import useLocale from './../../../locales/lang';

const Navbar = () => {
  const lang = useLocale();

  const smoothScroll = (item: string) => {
    const target: HTMLElement | null = document.querySelector('[data-title="' + item + '"]')!;
    const position = target.getBoundingClientRect().top + window.pageYOffset - 57;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
  };

  return (
    <Menu>
      <MenuButton
        _focus={{focus: 'none'}}
        as={IconButton}
        icon={<HamburgerIcon />}
        aria-label="Menu"
        variant="outline"
      />
      <MenuList>
        {lang.lang.nav.map((item: string, index: number) => (
          <MenuItem style={{textDecoration: 'none'}} key={index} onClick={() => smoothScroll(item)}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Navbar;
