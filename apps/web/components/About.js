import { PortableText } from "@portabletext/react"
import { LinkButton } from "ui/Button"
import { NormalImage } from "ui/Images"

export default function About({ homepage, profilePic }) {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div>
        <div className="relative float-right ml-1 mb-1 h-40 w-40">
          <NormalImage
            imageUrl={profilePic}
            alt={`Profile pic of ${homepage.name}`}
            clsName={"rounded-full"}
          />
        </div>
        <PortableText value={homepage.description} />
      </div>
      <div className="mt-3">
        <LinkButton link={"https://tobiaswild.de"}>My Blog</LinkButton>
      </div>
    </section>
  )
}
