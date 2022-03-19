import { SanityImage } from "ui/Images"

export default function Header({ imageUrl, text, desc }) {
  return (
    <header className="relative h-96">
      <div className="absolute z-10 h-full w-full bg-blue-900 bg-opacity-40"></div>
      <SanityImage imageUrl={imageUrl} alt={text} />
      <div className="absolute z-20 mx-0 flex h-full w-full flex-col items-center justify-center text-white">
        <h1>{text}</h1>
        <p>{desc}</p>
      </div>
    </header>
  )
}
