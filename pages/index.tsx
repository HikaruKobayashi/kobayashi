import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import * as React from 'react'
import HomeHead from './../src/components/common/head'
import Footer from './../src/components/layout/footer'

const Home: NextPage = () => {
  return (
    <Box as="main">
      <HomeHead />
      <Footer />
    </Box>
  )
}

export default Home
