import About from "Components/home/About";
import Contact from "Components/home/Contact";
import NewSkills from "Components/home/NewSkills";
import Projects from "Components/home/Projects";
import Skills from "Components/home/Skills";
import Layout from "Components/Layout";
import groq from "groq";
import { GitHub } from "Lib/GitHub";
import SanityClient from "Lib/SanityClient";

export default function Home({ homepage, profilePic, skills, projects }) {
  return (
    <Layout homepage={homepage} url={"/"}>
      <main>
        <About homepage={homepage} profilePic={profilePic} />
        <Skills />
        <NewSkills skills={skills} />
        <Projects projects={projects} />
        <Contact />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const query = groq`
    {
      "homepage": *[_type == "homepage"],
      "skills": *[_type == "skill"] | order(level desc, title),
    }`;

  const data = await SanityClient.fetch(query);
  const user = await GitHub();
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);

  return {
    props: {
      homepage: data.homepage[0],
      skills: data.skills,
      projects: pinnedItems,
      profilePic: user.avatarUrl,
    },
  };
}
