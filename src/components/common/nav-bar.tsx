import {IconButton, Menu, MenuButton, MenuList, MenuItem, Link} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';

const Navbar = () => {
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
        <MenuItem as={Link} href="/">
          Home
        </MenuItem>
        <MenuItem as={Link} href="/work">
          Work
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Navbar;
