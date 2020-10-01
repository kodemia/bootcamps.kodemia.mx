import React, { useEffect } from 'react'
import Head from 'next/head'
import { initGTM } from '../lib/gtm'

import '../styles/index.scss'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    initGTM()
  }, [])
  return (
    <>
      <Component {...pageProps} />
      <Head>

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie-edge' />
        <link
          rel='icon'
          href='https://cdn.kodemia.mx/images/brand/black-isotipo.png'
          type='image/png'
        />
        <title>Kodemia :: La primera academia real para programadores</title>
      </Head>
    </>
  )
}

export default MyApp
