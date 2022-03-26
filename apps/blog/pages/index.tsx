import groq from "groq"
import { convertTime } from "lib"
import SanityClient from "lib/SanityClient"
import { Card, CardGrid } from "ui/Card"
import Layout from "ui/Layout"

export default function posts({ posts }) {
  return (
    <Layout url={"/"}>
      <section className="mt-3">
        <h2 className="text-center">My Blog</h2>
        <CardGrid>
          {posts &&
            posts.map((post, index) => (
              <Card
                key={index}
                imageUrl={post.mainImage}
                title={post.title}
                preview={`published by ${post.authorName} on ${convertTime(
                  post.publishedAt
                )}\n${post.preview}`}
                link={post.slug.current}
                type="post"
              />
            ))}
        </CardGrid>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const query = groq`
    *[_type == "post"] {
        ...,
        "authorName": author->name,
        "authorSlug": author->slug.current
    }`

  const data = await SanityClient.fetch(query)
  return {
    props: {
      posts: data,
    },
  }
}
