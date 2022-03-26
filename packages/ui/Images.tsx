import Image from "next/image"
import { urlFor } from "../lib/urlFor"

interface Props {
  imageUrl: string
  alt: string
  clsName?: string
}

export function CorrectImage(props: Props) {
  if (props.imageUrl.startsWith("http")) {
    return (
      <NormalImage
        imageUrl={props.imageUrl}
        alt={props.alt}
        clsName={props.clsName}
      />
    )
  } else {
    return (
      <SanityImage
        imageUrl={props.imageUrl}
        alt={props.alt}
        clsName={props.clsName}
      />
    )
  }
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
