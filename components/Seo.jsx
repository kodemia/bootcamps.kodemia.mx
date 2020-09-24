
import Head from 'next/head'

import defaults from '../config/seo-deafaults.json'

const SEO = (props) => {
  return (
    <Head>
      <title>{props.title || defaults.title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='author' content='SVAcademy' />
      <meta name='description' content={props.description || defaults.description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='og:title' content={props.title || defaults.title} />
      <meta property='og:type' content='website' />
      <meta property='og:description' content={props.description || defaults.description} />
      <meta property='og:site_name' content='SVAcademy' />
      <meta property='og:image' content={props.image || defaults.image} />
      <meta name='theme-color' content='#FA0D1B' />
    </Head>
  )
}

export default SEO
