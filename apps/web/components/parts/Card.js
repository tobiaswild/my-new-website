import Button from './Button'
import NormalImage from './NormalImage'
import SanityImage from './SanityImage'

export default function Card({ imageUrl, title, preview, link, type }) {
    return (
        <div className="relative mx-auto flex w-full flex-col overflow-hidden rounded-2xl bg-gray-200 shadow-xl dark:bg-gray-800">
            <figure className="relative h-48 bg-gray-100 dark:bg-gray-900">
                {(type === 'project' && (
                    <NormalImage imageUrl={imageUrl} alt={title} />
                )) || <SanityImage imageUrl={imageUrl} alt={title} />}
            </figure>
            <div className="flex flex-auto flex-col gap-2 p-8">
                <h2 className="flex items-center gap-2 text-xl font-semibold leading-7">
                    {title}
                </h2>
                <p>{preview}</p>
                <div className="flex items-start justify-end gap-2">
                    {(type === 'project' && (
                        <Button link={link}>Go to the {type}</Button>
                    )) || (
                        <Button link={`/post/${link}`}>Go to the {type}</Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export function CardGrid({ children }) {
    return <div className="tablet:grid-cols-2 grid gap-4 p-4">{children}</div>
}
