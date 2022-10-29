import React, {ReactNode} from "react"
import * as style from "./Modal.module.scss"

export const Modal = (props: {children: ReactNode; onBackdropClick?: () => void}) => {
	return (
		<div className={style.backdrop} onClick={props.onBackdropClick}>
			{props.children}
		</div>
	)
}