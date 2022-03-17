import { urlFor } from 'Lib/urlFor'
import Image from 'next/image'

export default function SanityImage({ imageUrl, alt, clsName }) {
    if (imageUrl === undefined) return null
    return (
        <Image
            layout="fill"
            className={`absolute object-cover ${clsName}`}
            src={urlFor(imageUrl).url()}
            alt={alt}
        />
    )
}
