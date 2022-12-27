import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class Doc extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Portfolio</title>
          <meta
            name='viewport'
            content="width=device-width,initial-scale=1,user-scalable=no, viewport-fit=cover'"
          />
          <meta name='author' content='Andrii D.' />
          <meta name='apple-mobile-web-app-status-bar-style' content='#111' />
        </Head>
        <body className='out'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
