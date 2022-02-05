import type { NextPage, GetStaticProps } from 'next'
import * as React from 'react'
import ProfileSection from '../src/components/profile'

const Home: NextPage = () => {
  return (
      <ProfileSection />
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}