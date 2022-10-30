import React, {useState} from 'react';
import * as style from "./HeaderMobile.module.scss"
import location from "../../images/header/Location.svg"

const navLinks = [
	{name: "Планировка", href: "#layout"},
	{name: "Дом сейчас", href: "#house-now"},
	{name: "Местоположение", href: "#location"},
]

export const HeaderMobile = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const [zIndex, setZIndex] = useState("-10")

	const handleOpenMenu = () => {
		setOpenMenu(true)
		setZIndex("10")
	}

	const handleCloseMenu = () => {
		setOpenMenu(false)
		setTimeout(() => setZIndex("-10"), 200)
	}

	return (
		<div className={style.header}>
			<a
				className={style.location}
				href={"https://yandex.ru/maps/-/CCU6EYRtgD"}
				target={"_blank"}
			>
				<img src={location} alt={""}/>
				<div className={style.locationText}>
					Дом в КП «ВосточныйСад»<br/>
					в Раменском районе
				</div>
			</a>
			<button
				className={style.burger}
				onClick={handleOpenMenu}
			/>

			<div
				className={style.menu}
				style={{
					opacity: openMenu ? "1" : "0",
					zIndex
				}}
			>
				<button
					onClick={handleCloseMenu}
					className={style.closeButton}
				/>
				<div className={style.navLinks}>
					{navLinks.map(link =>
						<a
							href={link.href}
							className={style.navLink}
							key={link.name}
							onClick={handleCloseMenu}
						>
							{link.name}
						</a>
					)}
				</div>
			</div>
		</div>
	);
};