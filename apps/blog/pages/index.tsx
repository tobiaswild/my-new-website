import groq from "groq"
import { convertTime } from "lib"
import SanityClient from "lib/SanityClient"
import { CardGrid, PostCard } from "ui/Cards"
import Layout from "ui/Layout"

export default function posts({ posts }) {
  return (
    <Layout url={"/"}>
      <section className="section">
        <h2 className="section-header">My Blog</h2>
        <CardGrid>
          {posts &&
            posts.map((post, index) => (
              <PostCard
                key={index}
                imageUrl={post.mainImage}
                title={post.title}
                preview={`published by ${post.authorName} on ${convertTime(
                  post.publishedAt
                )}\n${post.preview}`}
                link={post.slug.current}
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
