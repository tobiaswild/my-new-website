import Layout from "Components/Layout";
import Card, { CardGrid } from "Components/parts/Card";
import groq from "groq";
import { convertTime } from "Lib/convertTime";
import SanityClient from "Lib/SanityClient";

export default function posts({ posts }) {
  return (
    <Layout url={"/blog"}>
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
  );
}

export async function getStaticProps() {
  const query = groq`
    *[_type == "post"] {
        ...,
        "authorName": author->name,
        "authorSlug": author->slug.current
    }`;

  const data = await SanityClient.fetch(query);
  return {
    props: {
      posts: data,
    },
  };
}
