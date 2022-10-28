import React from "react"
import * as style from "./CloseButton.module.scss"

export const CloseButton = (props: {onClick: () => void}) => {
	return (
		<button
			className={style.button}
			onClick={props.onClick}
		/>
	)
}