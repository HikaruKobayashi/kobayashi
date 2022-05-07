import {IconButton, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import useLocale from './../../../locales/lang';

interface Props {
  name: string;
  link: string;
}
const Navbar = () => {
  const lang = useLocale();

  const smoothScroll = (item: string) => {
    let target: HTMLElement | null = null;
    let element = '';
    switch (true) {
      case item === 'Top' || item === 'トップ':
        element = 'top';
        break;
      case item === 'Profile' || item === 'プロフィール':
        element = 'profile';
        break;
      case item === 'Biography' || item === '経歴':
        element = 'bio';
        break;
      case item === 'Favorite' || item === '趣味':
        element = 'favorite';
        break;
      case item === 'Work' || item === 'ポートフォリオ':
        element = 'work';
        break;
      case item === 'Contact' || item === 'お問い合わせ':
        element = 'contact';
        break;
      default:
        break;
    }
    target = document.getElementById(element)!;
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
        {lang.lang.nav.map((item: Props, index: number) => (
          <MenuItem
            style={{textDecoration: 'none'}}
            key={index}
            onClick={() => smoothScroll(item.name)}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Navbar;
