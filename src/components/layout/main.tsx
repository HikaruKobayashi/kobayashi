import { Box, Container } from '@chakra-ui/react'
import { ReactNode } from 'react'
import HomeHead from '../common/head'
import Footer from './footer'

type Props = {
  children: ReactNode
}

const Main = ({ children, ...props }: Props) => {
  return (
    <Box as="main">
      <HomeHead />
      <Container maxW="container.md" {...props}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main