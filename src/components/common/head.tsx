import Head from 'next/head'
import * as React from 'react'

const HomeHead = () => {
  return (
    <Head>
      <title>Kobayashi</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Kobayashi" />
      <meta name="description" content="Kobayashi's Homepage" />
      <meta property="og:site_name" content="Kobayashi's Homepage" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@0719kobayashi" />
      <meta name="twitter:creator" content="@0719kobayashi" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HomeHead
