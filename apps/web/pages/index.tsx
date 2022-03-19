import About from "Components/About"
import Contact from "Components/Contact"
import { HomeNavigation } from "Components/HomeNavigation"
import NewSkills from "Components/NewSkills"
import Projects from "Components/Projects"
import Skills from "Components/Skills"
import groq from "groq"
import { GitHub } from "ui/lib/GitHub"
import SanityClient from "ui/lib/SanityClient"
import { StartHeader } from "ui/StartHeader"

export default function Home({ homepage, profilePic, skills, projects }) {
  return (
    <>
      <HomeNavigation />
      <StartHeader
        sImage={homepage.image}
        big={homepage.name}
        small={homepage.info}
      />
      <main className="wrapper">
        <About homepage={homepage} profilePic={profilePic} />
        <Skills />
        <NewSkills skills={skills} />
        <Projects projects={projects} />
        <Contact />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const query = groq`
    {
      "homepage": *[_type == "homepage"],
      "skills": *[_type == "skill"] | order(level desc, title),
    }`

  const data = await SanityClient.fetch(query)
  const user = await GitHub()
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node)

  return {
    props: {
      homepage: data.homepage[0],
      skills: data.skills,
      projects: pinnedItems,
      profilePic: user.avatarUrl,
    },
    revalidate: 24 * 60 * 60,
  }
}
