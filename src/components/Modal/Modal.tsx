import React, {ReactNode} from "react"
import * as style from "./Modal.module.scss"

export const Modal = (props: {children: ReactNode}) => {
	return (
		<div className={style.backdrop}>
			{props.children}
		</div>
	)
}