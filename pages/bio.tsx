import type { NextPage, GetStaticProps } from 'next'
import * as React from 'react'
import BioSection from '../src/components/profile/bio'

const Bio: NextPage = () => {
  return (
      <BioSection />
  )
}

export default Bio

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}