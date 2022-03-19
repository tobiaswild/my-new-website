import { PortableText } from "@portabletext/react"
import groq from "groq"
import Link from "next/link"
import Header from "ui/Header"
import Layout from "ui/Layout"
import { convertTime } from "ui/lib/convertTime"
import SanityClient from "ui/lib/SanityClient"

export default function Post({ post }) {
  return (
    <Layout url={`/post/${post.slug.current}`}>
      <Header
        imageUrl={post.mainImage}
        text={post.title}
        desc={postInfo({ post })}
      />
      <main className="px-4 py-2">
        <PortableText value={post.body} />
      </main>
    </Layout>
  )
}

function postInfo({ post }) {
  return (
    <>
      {convertTime(post.publishedAt)} by{" "}
      {post.authorSlug && (
        <Link href={`author/${post.authorSlug}`} passHref>
          {post.authorName}
        </Link>
      )}
    </>
  )
}

const postsQuery = groq`*[_type == "post"] {slug}`

const singlePostQuery = groq`*[_type == "post" && slug.current == $slug] {
    ...,
    "authorName": author->name,
    "authorSlug": author->slug.current
  }[0]`

export const getStaticPaths = async () => {
  const posts = await SanityClient.fetch(postsQuery)
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }))
  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  const post = await SanityClient.fetch(singlePostQuery, {
    slug: params.slug,
  })
  return { props: { post } }
}
