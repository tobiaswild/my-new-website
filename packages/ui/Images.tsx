import Image from "next/image"
import { urlFor } from "./lib/urlFor"

interface Props {
  imageUrl: string
  alt: string
  clsName?: string
}

export function NormalImage(props: Props) {
  if (props.imageUrl === undefined) return null
  return (
    <Image
      layout="fill"
      className={`absolute object-cover ${props.clsName}`}
      src={props.imageUrl}
      alt={props.alt}
    />
  )
}

export function SanityImage(props: Props) {
  if (props.imageUrl === undefined) return null
  return (
    <Image
      layout="fill"
      className={`absolute object-cover ${props.clsName}`}
      src={urlFor(props.imageUrl).url()}
      alt={props.alt}
    />
  )
}
