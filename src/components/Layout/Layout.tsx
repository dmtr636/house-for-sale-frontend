import * as style from "./Layout.module.scss"
import {useWindowDimension} from "../../hooks/useWindowDimensions";
import React, {ReactNode} from "react";

export const Layout = (props: { children: ReactNode}) => {
	const [width, _] = useWindowDimension()

	let scale = 1
	if (width > 1700) {
		scale = width / 1700
	}
	if (width >= 700 && width < 1280) {
		scale = width / 1280
	}

	return (
		<div
			className={style.layout}
			style={{
				zoom: `${scale}`,
				transform: `scale(${scale})`
			}}
		>
			{props.children}
		</div>
	)
}