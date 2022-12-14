import React from "react"
import * as style from "./Communications.module.scss"
import {StaticImage} from "gatsby-plugin-image";
import Electro from "../../images/communications/Electro.svg"
import Severage from "../../images/communications/Severage.svg"
import Warm from "../../images/communications/Warm.svg"
import Water from "../../images/communications/Water.svg"
import Ventilation from "../../images/communications/Ventilation.svg"
import {isMobile} from "../../utils/isMobile";

const list = [
	{
		icon: Electro,
		title: "Электроснабжение",
		text: "Заведено в дом от щитка со столба, установлен временный щит внутри дома"
	},
	{
		icon: Water,
		title: "Водоснабжение",
		text: "Скважина глубиной 32 метра, заведена в дом труба с кабелем подогревом"
	},
	{
		icon: Severage,
		title: "Канализация",
		text: "Септик из бетонных колец, все выводы заведены в дом"
	},
	{
		icon: Warm,
		title: "Отопление",
		text: "На выбор будет водяное или электрическими конвекторами"
	},
	{
		icon: Ventilation,
		title: "Вентиляция",
		text: "Приточные клапаны в помещениях, вытяжка в санузле, на кухне и общая в зале. С выводками"
	}
]

export const Communications = () => {
	return (
		<div>
			{isMobile() &&
                <div className={style.titleMobile}>
                    Коммуникации
                </div>
			}
			<div className={style.container}>
				<div className={style.bg}>
					<StaticImage
						src={"../../images/communications/bg.jpg"}
						alt={""}
						placeholder={"blurred"}
						style={{height: "100%"}}
					/>
				</div>
				<div className={style.bgMobile}>
					<StaticImage
						src={"../../images/communications/bgMobile.jpg"}
						alt={""}
						placeholder={"blurred"}
						style={{height: "100%"}}
						sizes={
							"(max-width: 359px) 150vw," +
							"(max-width: 399px) 130vw," +
							"(max-width: 479px) 120vw," +
							"100vw"
						}
					/>
				</div>
				<div className={style.title}>
					Коммуникации
				</div>
				<div className={style.list}>
					{list.map(row =>
						<div className={style.row}>
							<img src={row.icon} alt={""} />
							<div className={style.col}>
								<div className={style.colTitle}>{row.title}</div>
								<div className={style.colText}>{row.text}</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}