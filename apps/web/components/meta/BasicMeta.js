import Head from 'next/head'
import FaviconMeta from './FaviconMeta'
import OpenGraphMeta from './OpenGraphMeta'
import TwitterCardMeta from './TwitterCardMeta'
const {
    title,
    description,
    author,
    site_keywords,
    base_url,
} = require('Lib/config.json')

export default function BasicMeta({ url }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={site_keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={base_url + url} />
            <link rel="manifest" href="/manifest.json" />
            <FaviconMeta />
            <OpenGraphMeta title={title} description={description} url={url} />
            <TwitterCardMeta
                title={title}
                description={description}
                url={url}
            />
        </Head>
    )
}
