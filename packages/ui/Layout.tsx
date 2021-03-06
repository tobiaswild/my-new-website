import { PropsWithChildren } from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"

interface Props {
  url: string
}

export default function Layout(props: PropsWithChildren<Props>) {
  return (
    <>
      {/* <BasicMeta url={props.url} /> */}
      <Navigation />
      <main className="wrapper">{props.children}</main>
      <Footer />
    </>
  )
}
