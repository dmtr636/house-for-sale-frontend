import React from "react"
import * as style from "./Footer.module.scss"

export const Footer = () => {
	return (
		<div className={style.footer}>
			<a className={style.link}>Политика конфиденциальности</a>
			<div>2022</div>
		</div>
	)
}