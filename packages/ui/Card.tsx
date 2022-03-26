import { PropsWithChildren } from "react"
import { LinkButton } from "ui/Button"
import { CorrectImage } from "./Images"

interface Props {
  imageUrl: string
  title: string
  preview: string
  link: URL
  type: string
}

export function Card(props: Props) {
  return (
    <div className="shadow-xll group space-x-6 rounded-xl bg-gray-200 bg-opacity-50 p-1 hover:rounded-2xl dark:bg-gray-800 sm:flex">
      <div className="relative h-56 w-full object-cover object-top transition duration-500 group-hover:rounded-xl sm:h-full sm:w-5/12">
        <CorrectImage
          imageUrl={props.imageUrl}
          alt={props.title}
          clsName={"rounded-lg"}
        />
      </div>
      <div className="p-5 pl-0 sm:w-7/12">
        <div className="space-y-2">
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">{props.title}</h4>
            <p>{props.preview}</p>
          </div>
          <div className="space-y-4">
            {props.type === "post" ? (
              <LinkButton link={`/post/${props.link}`} target={"_blank"}>
                Go to the {props.type}
              </LinkButton>
            ) : (
              <LinkButton link={`${props.link}`} target={"_blank"}>
                Go to the {props.type}
              </LinkButton>
            )}
          </div>
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
