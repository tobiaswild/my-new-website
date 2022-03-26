import "styles/style.css"
import { PageTransition } from "ui/PageTransition"

export default function MyApp({ Component, pageProps }) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  )
}
