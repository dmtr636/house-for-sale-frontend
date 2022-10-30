import * as style from "./Main.module.scss"
import locationIcon from "../../images/main/Location.svg"
import phoneIcon from "../../images/main/Phone.svg"
import React from "react"
import {StaticImage} from "gatsby-plugin-image";

export const Main = () => {
	return (
		<div className={style.main}>
			<StaticImage
				src={"../../images/main/Photo.jpg"}
				alt={""}
				placeholder={"blurred"}
				className={style.bg}
			/>
			<StaticImage
				src={"../../images/main/PhotoMobile.jpg"}
				alt={""}
				placeholder={"blurred"}
				className={style.bgMobile}
			/>
			<div className={style.header}>
				В продаже<br/>
				двухэтажный дом!
			</div>
			<div className={style.header}>
				1 000 000 ₽
			</div>
			<div className={style.parameters}>
				<div className={style.parameter}>Площадь 100 м<sup>2</sup></div>
				<div className={style.parameter}>Участок 6 соток</div>
				<div className={style.parameter}>Панорамные окна</div>
				<div className={style.parameter}>Высота этажа 2.7 метров</div>
			</div>
			<div className={style.panel}>
				<a
					className={style.panelLink}
					href={"https://yandex.ru/maps/6/kaluga/?ll=36.261215%2C54.513845&z=12"}
					target={"_blank"}
					rel={"noreferrer"}
				>
					<img src={locationIcon.src}/>
					<div>Дом в КП «Восточный Сад» в Раменском районе</div>
				</a>
				<a
					className={style.panelLink}
					href={"tel:+79774888608"}
				>
					<img src={phoneIcon.src}/>
					<div>8 (977) 488-86-08</div>
				</a>
			</div>
		</div>
	)
}