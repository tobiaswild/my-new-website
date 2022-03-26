import { PageTransition } from "ui/PageTransition"
import "../../../packages/styles/style.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  )
}
