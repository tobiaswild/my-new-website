import Link from "next/link";

export function CoolButton({ children, link }) {
  return (
    <Link href={link} passHref>
      <a className="bg-primery justify-end rounded-md p-2 text-white">
        {children}
      </a>
    </Link>
  );
}
