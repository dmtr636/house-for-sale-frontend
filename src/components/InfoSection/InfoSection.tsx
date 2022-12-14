import React, {ReactNode} from "react"
import * as style from "./InfoSection.module.scss"

interface Props {
	children: ReactNode
	title?: string
	contentType?: "photo" | "mixed" | "custom"
	id?: string
}

export const InfoSection = (props: Props) => {
	const getContentCN = () => {
		switch (props.contentType) {
			case "photo":
				return style.contentPhoto
			case "mixed":
				return style.contentMixed
			case "custom":
				return ""
			default:
				return style.content
		}
	}

	return (
		<div className={style.container} id={props.id}>
			{props.title &&
                <div className={style.title}>{props.title}</div>
			}
			<div className={getContentCN()}>
				{props.children}
			</div>
		</div>
	)
}