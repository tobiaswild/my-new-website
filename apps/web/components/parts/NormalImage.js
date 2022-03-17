import Image from 'next/image'

export default function NormalImage({ imageUrl, alt, clsName }) {
    if (imageUrl === undefined) return null
    return (
        <Image
            layout="fill"
            className={`absolute object-cover ${clsName}`}
            src={imageUrl}
            alt={alt}
        />
    )
}
