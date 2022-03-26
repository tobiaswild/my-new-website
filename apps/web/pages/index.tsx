import About from "Components/About"
import Contact from "Components/Contact"
import { HomeNavigation } from "Components/HomeNavigation"
import NewSkills from "Components/NewSkills"
import Projects from "Components/Projects"
import Skills from "Components/Skills"
import groq from "groq"
import { GitHub } from "lib/GitHub"
import SanityClient from "lib/SanityClient"
import Footer from "ui/Footer"
import { StartHeader } from "ui/StartHeader"

type Hompage = {
  name: string
  image: string
  info: string
}

type Skill = {
  title: string
  image: string
  level: number
}

type Project = {}

interface Props {
  homepage: Hompage
  profilePic: URL
  skills: Array<Skill>
  projects: Array<Project>
}

export default function Home(props: Props) {
  return (
    <>
      <HomeNavigation />
      <StartHeader
        sImage={props.homepage.image}
        big={props.homepage.name}
        small={props.homepage.info}
      />
      <main className="wrapper">
        <About homepage={props.homepage} profilePic={props.profilePic} />
        <Skills />
        <NewSkills skills={props.skills} />
        <Projects projects={props.projects} />
        <Contact />
      </main>
      <Footer />
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
