import Head from "next/head"
const { base_url, twitter_account } = require("../lib/config.json")

export default function TwitterCardMeta({ title, description, url }: Props) {
  return (
    <Head>
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:site" content={twitter_account} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:url" content={base_url + url} />
    </Head>
  )
}

interface Props {
  title: string
  description: string
  url: string
}
