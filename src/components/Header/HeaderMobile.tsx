import React from 'react';
import * as style from "./HeaderMobile.module.scss"
import location from "../../images/header/Location.svg"

export const HeaderMobile = () => {
	return (
		<div className={style.header}>
			<a
				className={style.location}
				href={"https://yandex.ru/maps/-/CCU6EYRtgD"}
				target={"_blank"}
			>
				<img src={location} alt={""} />
				<div className={style.locationText}>
				 	Дом в КП «ВосточныйСад»<br/>
					в Раменском районе
				</div>
			</a>
			<button className={style.burger}/>
		</div>
	);
};