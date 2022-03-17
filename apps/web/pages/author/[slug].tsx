import { PortableText } from "@portabletext/react";
import Header from "Components/header/Header";
import Layout from "Components/Layout";
import SanityClient from "Lib/SanityClient";

export default function Post({ author }) {
  return (
    <Layout url={`/author/${author.slug.current}`}>
      <Header imageUrl={author.image} text={author.name} desc={} />
      <main className="px-4 py-2">
        <PortableText value={author.bio} />
      </main>
    </Layout>
  );
}

const authorsQuery = `*[_type == "author"] { slug }`;

const singleAuthorQuery = `*[_type == "author" && slug.current == $slug] {
    ...,
}[0]`;

export const getStaticPaths = async () => {
  const authors = await SanityClient.fetch(authorsQuery);
  const paths = authors.map((author) => ({
    params: { slug: author.slug.current },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const author = await SanityClient.fetch(singleAuthorQuery, {
    slug: params.slug,
  });
  return { props: { author } };
};
