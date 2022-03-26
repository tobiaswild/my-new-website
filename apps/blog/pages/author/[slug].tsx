import { PortableText } from "@portabletext/react"
import groq from "groq"
import SanityClient from "lib/SanityClient"
import Header from "ui/Header"
import Layout from "ui/Layout"

export default function Post({ author }) {
  return (
    <Layout url={`/author/${author.slug.current}`}>
      <Header imageUrl={author.image} text={author.name} desc={""} />
      <main className="sanityText">
        <PortableText value={author.bio} />
      </main>
    </Layout>
  )
}

const authorsQuery = groq`*[_type == "author"] {slug}`

const singleAuthorQuery = groq`*[_type == "author" && slug.current == $slug] {..}[0]`

export const getStaticPaths = async () => {
  const authors = await SanityClient.fetch(authorsQuery)
  const paths = authors.map((author) => ({
    params: { slug: author.slug.current },
  }))
  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  const author = await SanityClient.fetch(singleAuthorQuery, {
    slug: params.slug,
  })
  return { props: { author } }
}
