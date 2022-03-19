import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaXing } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-dark dark:bg-darker flex flex-col justify-center py-8 text-center text-sm text-neutral-400">
      <div className="flex flex-row justify-center">
        <Link href={"/#about"}>
          <a className="footer-link">About</a>
        </Link>
        <Link href={"/#contact"}>
          <a className="footer-link">Contact</a>
        </Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link href={"https://github.com/tobiaswild/"}>
          <a target="_blank" className="footer-link text-2xl">
            <FaGithub />
          </a>
        </Link>
        <Link href={"/"}>
          <a target="_blank" className="footer-link text-2xl">
            <FaInstagram />
          </a>
        </Link>
        <Link href={"/"}>
          <a target="_blank" className="footer-link text-2xl">
            <FaXing />
          </a>
        </Link>
        <Link href={"/"}>
          <a target="_blank" className="footer-link text-2xl">
            <FaLinkedin />
          </a>
        </Link>
      </div>
      <div className="pt-2">
        &copy; {new Date().getFullYear()} Tobias Wild. No rights reserved.
      </div>
    </footer>
  )
}
