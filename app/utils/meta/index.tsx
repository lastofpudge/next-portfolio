import Head from 'next/head'
import React from 'react'

import IMeta from './IMeta'

const Meta = ({ title, description }: IMeta) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='viewport'
          content="width=device-width,initial-scale=1,user-scalable=no, viewport-fit=cover'"
        />
        <meta name='author' content='Andrii D.' />
        <meta name='apple-mobile-web-app-status-bar-style' content='#111' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  )
}

export default Meta
