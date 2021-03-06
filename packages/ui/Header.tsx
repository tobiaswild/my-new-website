import { SanityImage } from "ui/Images"

export default function Header({ imageUrl, text, desc }) {
  return (
    <header className="relative h-96">
      <div className="absolute z-10 h-full w-full bg-blue-900 bg-opacity-50"></div>
      <SanityImage imageUrl={imageUrl} alt={text} />
      <div className="absolute z-20 ml-4 flex h-full w-full flex-col justify-end pb-6 text-white">
        <h1 className="text-5xl font-bold">{text}</h1>
        <p>{desc}</p>
      </div>
    </header>
  )
}
