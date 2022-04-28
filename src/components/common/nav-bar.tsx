import {IconButton, Menu, MenuButton, MenuList, MenuItem, Link} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import useLocale from './../../../locales/lang';

interface Props {
  name: string;
  link: string;
}
const Navbar = () => {
  const lang = useLocale();

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
          <MenuItem as={Link} href={'#' + item.link} style={{textDecoration: 'none'}} key={index}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Navbar;
