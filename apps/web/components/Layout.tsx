import Footer from "Components/Footer";
import HomeHeader from "./header/HomeHeader";
import BasicMeta from "./meta/BasicMeta";
import HomeNavigation from "./navigation/HomeNavigation";
import Navigation from "./navigation/Navigation";

export default function Layout({ children, homepage, url }) {
  return (
    <>
      <BasicMeta url={url} />
      {(homepage && (
        <>
          <HomeNavigation />
          <HomeHeader
            imageUrl={homepage.image}
            text={homepage.name}
            desc={homepage.info}
          />
        </>
      )) || <Navigation />}
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
}
