import * as style from "./Header.module.scss"
import mailIcon from "../../images/header/Mail.svg"
import telegramIcon from "../../images/header/Telegram.svg"
import whatsappIcon from "../../images/header/Whatsapp.svg"
import React from "react"

const navLinks = [
	{name: "Планировка", href: "#layout"},
	{name: "Дом сейчас", href: "#house-now"},
	{name: "Местоположение", href: "#location"},
]

const socialLinks = [
	{icon: whatsappIcon, href: "https://wa.me/+79774888608"},
	{icon: telegramIcon, href: "https://t.me/+79774888608"},
	{icon: mailIcon, href: "mailto:89150238877@mail.ru"}
]

export const Header = () => {
	return (
		<header className={style.header}>
			<nav className={style.nav}>
				{navLinks.map(link =>
					<a
						href={link.href}
						className={style.navLink}
						key={link.name}
					>
						{link.name}
					</a>
				)}
			</nav>
			<div className={style.social}>
				{socialLinks.map(link =>
					<a
						href={link.href}
						className={style.socialLink}
						key={link.href}
						target={"_blank"}
						rel={"noreferrer"}
					>
						<img src={link.icon.src}/>
					</a>
				)}
			</div>
			<button className={style.button}>
				Перезвоните мне<br/>
				за 30 секунд
			</button>
		</header>
	)
}