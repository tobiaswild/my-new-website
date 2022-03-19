import Link from "next/link"
import { PropsWithChildren } from "react"
import { NormalImage, SanityImage } from "./Images"

interface Props {
  imageUrl: string
  title: string
  preview: string
  link: URL
  type: string
}

export function Card(props: Props) {
  return (
    <div className="relative mx-auto flex w-full flex-col overflow-hidden rounded-2xl bg-gray-200 shadow-xl dark:bg-gray-800">
      <figure className="relative h-48 bg-gray-100 dark:bg-gray-900">
        {(props.type === "project" && (
          <NormalImage imageUrl={props.imageUrl} alt={props.title} />
        )) || <SanityImage imageUrl={props.imageUrl} alt={props.title} />}
      </figure>
      <div className="flex flex-auto flex-col gap-2 p-8">
        <h2 className="flex items-center gap-2 text-xl font-semibold leading-7">
          {props.title}
        </h2>
        <p>{props.preview}</p>
        <div className="flex items-start justify-end gap-2">
          {(props.type === "project" && (
            <Link href={props.link} passHref>
              <a
                className="bg-primery justify-end rounded-md p-2 text-white"
                target={"_blank"}
              >
                Go to the {props.type}
              </a>
            </Link>
          )) || (
            <Link href={`/post/${props.link}`} passHref>
              <a className="bg-primery justify-end rounded-md p-2 text-white">
                Go to the {props.type}
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

interface GridProps {}

export function CardGrid(props: PropsWithChildren<GridProps>) {
  return (
    <div className="tablet:grid-cols-2 grid gap-4 p-4">{props.children}</div>
  )
}
