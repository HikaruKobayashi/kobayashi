import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ThemeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      _focus={{focus: "none"}}
      mb={10}
      aria-label="DarkMode Switch"
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  )
}

export default ThemeBtn