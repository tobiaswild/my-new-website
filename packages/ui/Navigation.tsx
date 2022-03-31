import Link from "next/link"
import { FaFileAlt, FaHome } from "react-icons/fa"

export default function Navigation() {
  const nav = [
    { link: "https://new.tobiaswild.de", name: "Home", icon: <FaHome /> },
    {
      link: "https://blog.new.tobiaswild.de",
      name: "Blog",
      icon: <FaFileAlt />,
    },
  ]

  return (
    <nav className="dark:bg-dark fixed top-0 z-50 w-screen overflow-hidden bg-white transition-colors">
      <div className="w-4xl mx-auto flex max-w-[95%] flex-row justify-between">
        <Link href="/" passHref>
          <a className="m-2 items-center p-2 text-2xl text-black dark:text-white">
            Tobias Wild
          </a>
        </Link>
        <div className="flex flex-row">
          {nav.map((card, index) => (
            <Link key={index} href={card.link} passHref>
              <a className="m-2 flex h-10 w-auto max-w-sm items-center rounded p-2 text-black dark:text-white">
                <span className="text-xl sm:hidden">{card.icon}</span>
                <span className="hidden sm:block">{card.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
