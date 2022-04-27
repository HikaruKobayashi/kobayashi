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
        <MenuItem as={Link} href="#top" style={{textDecoration: 'none'}}>
          Top
        </MenuItem>
        <MenuItem as={Link} href="#profile" style={{textDecoration: 'none'}}>
          Profile
        </MenuItem>
        <MenuItem as={Link} href="#bio" style={{textDecoration: 'none'}}>
          Bio
        </MenuItem>
        <MenuItem as={Link} href="#favorite" style={{textDecoration: 'none'}}>
          Favorite
        </MenuItem>
        <MenuItem as={Link} href="#work" style={{textDecoration: 'none'}}>
          Work
        </MenuItem>
        <MenuItem as={Link} href="#contact" style={{textDecoration: 'none'}}>
          Contact
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Navbar;
