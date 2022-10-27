import * as style from "./Layout.module.scss"
import {useWindowDimension} from "../../hooks/useWindowDimensions";
import React, {ReactNode, useEffect, useRef, useState} from "react";

export const Layout = (props: { children: ReactNode }) => {
	const [width, _] = useWindowDimension()
	const [scale, setScale] = useState(1)

	useEffect(() => {
		if (width > 1700) {
			setScale(width / 1700)
		} else {
			setScale(1)
		}
	}, [width])

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