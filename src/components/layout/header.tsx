import { Box } from '@chakra-ui/react'
import ThemeBtn from '../common/theme-btn'

const Header = () => {
  return (
    <Box as="header" mx="auto"maxW="2xl" px={{ base: '4', md: '8'}}>
      <ThemeBtn />
    </Box>
  )
}

export default Header