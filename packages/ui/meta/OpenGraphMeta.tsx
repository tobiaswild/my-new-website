import Head from "next/head"
const { base_url } = require("../lib/config.json")

export default function OpenGraphMeta({ title, description, url }: Props) {
  return (
    <Head>
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={base_url + url} />
    </Head>
  )
}

interface Props {
  title: string
  description: string
  url: string
}
