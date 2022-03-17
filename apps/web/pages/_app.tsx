import "Styles/style.css";

export default function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps} key={router.route} />;
}
