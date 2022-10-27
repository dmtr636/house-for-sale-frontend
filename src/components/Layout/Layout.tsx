import * as style from "./Layout.module.scss"
import {useWindowDimension} from "../../hooks/useWindowDimensions";
import React, {ReactNode, useEffect, useState} from "react";

export const Layout = (props: { children: ReactNode }) => {
	const [width, _] = useWindowDimension()
	const [scale, setScale] = useState(1)

	useEffect(() => {
		if (width > 1700) {
			setScale(Math.round(width / 17000) / 10)
		} else {
			setScale(1)
		}
	}, [width])

	return (
		<div
			className={style.layout}
			style={{transform: `scale(${scale})`}}
		>
			{props.children}
		</div>
	)
}