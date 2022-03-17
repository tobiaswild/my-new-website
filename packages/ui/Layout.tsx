import Footer from "Components/Footer";
import HomeHeader from "../../apps/web/components/header/HomeHeader";
import BasicMeta from "../../apps/web/components/meta/BasicMeta";
import HomeNavigation from "../../apps/web/components/navigation/HomeNavigation";
import Navigation from "../../apps/web/components/navigation/Navigation";

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
