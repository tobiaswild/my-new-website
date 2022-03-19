import { PropsWithChildren } from "react"
import Footer from "./Footer"
import BasicMeta from "./meta/BasicMeta"
import Navigation from "./Navigation"

interface Props {
  url: string
}

export default function Layout(props: PropsWithChildren<Props>) {
  return (
    <>
      <BasicMeta url={props.url} />
      <Navigation />
      <div className="wrapper">{props.children}</div>
      <Footer />
    </>
  )
}
