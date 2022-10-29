import React from "react"
import * as style from "./Footer.module.scss"

export const Footer = (props: {showPrivacyPolicy: () => void}) => {
	return (
		<div className={style.footer}>
			<a
				className={style.link}
				onClick={props.showPrivacyPolicy}
			>
				Политика конфиденциальности
			</a>
			<div>2022</div>
		</div>
	)
}