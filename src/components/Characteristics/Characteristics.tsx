import React from "react";
import {InfoSection} from "../InfoSection/InfoSection";
import * as style from "./Characteristics.module.scss"

const houseDimensions = [
	{
		name: "Общая площадь",
		value: <div className={style.value}>100 м<sup>2</sup></div>
	},
	{
		name: "Размеры дома",
		value: <div className={style.value}>7.3м*8.3м</div>
	},
	{
		name: "Площадь террасы",
		value: <div className={style.value}>15 м<sup>2</sup></div>
	},
	{
		name: "Площадь балкона",
		value: <div className={style.value}>15 м<sup>2</sup></div>
	},
	{
		name: "Высота 1 этажа",
		value: <div className={style.value}>2.7 м</div>
	},
	{
		name: "Высота 2 этажа",
		value: <div className={style.value}>2.5 м</div>
	}
]

const insulationThickness = [
	{
		name: "Перекрытие 1 этажа",
		value: <div className={style.value}>250 мм (перехлёстное)</div>
	},
	{
		name: "Кровля",
		value: <div className={style.value}>250 мм (перехлёстное)</div>
	},
	{
		name: "Наружные стены",
		value: <div className={style.value}>250 мм (перехлёстное)</div>
	},
	{
		name: "Внутренние стены, перегородки",
		value: <div className={style.value}>150 мм / 100 мм (перехлёстное)</div>
	},
]

const material = [
	{
		name: "Фундамент",
		value: <div className={style.value}>Монолитная плита ЖБ 250 мм</div>
	},
	{
		name: "Каркас",
		value: <div className={style.value}>Сухой пиломатериал 1 сорта, антисептированный</div>
	},
	{
		name: "Утепление",
		value: <div className={style.value}>Базальтовый утеплитель “Кнауф”</div>
	},
	{
		name: "Покрытие кровли",
		value: <div className={style.value}>Направляемая гидроизоляция в 2 слоя</div>
	},
	{
		name: "Окна",
		value: <div className={style.value}>Rehau 2-х камерный стеклопакет</div>
	},
	{
		name: "Входная дверь",
		value: <div className={style.value}>Металлическая с терморазрывом</div>
	}
]

const decoration = [
	{
		name: "Наружная (комбинированная)",
		value: <div className={style.value}>Профлист, планкен окрашенный</div>
	},
	{
		name: "Внутреняя",
		value: <div className={style.value}>Без отделки</div>
	}
]

export const Characteristics = () => {
	return (
		<>
			<InfoSection title={"Характеристики"}>
				<div className={style.container}>
					<div className={style.title}>
						Размеры дома
					</div>
					<div className={style.table}>
						{houseDimensions.map(dim =>
							<div className={style.row}>
								<div className={style.name}>{dim.name}</div>
								{dim.value}
							</div>
						)}
					</div>
					<div className={style.title}>
						Толщина утепления
					</div>
					<div className={style.table}>
						{insulationThickness.map(dim =>
							<div className={style.row}>
								<div className={style.name}>{dim.name}</div>
								{dim.value}
							</div>
						)}
					</div>
				</div>
			</InfoSection>

			<InfoSection>
				<div className={style.container}>
					<div className={style.title}>
						Материал строительства дома
					</div>
					<div className={style.table}>
						{material.map(dim =>
							<div className={style.row}>
								<div className={style.name}>{dim.name}</div>
								{dim.value}
							</div>
						)}
					</div>
				</div>
			</InfoSection>

			<InfoSection>
				<div className={style.container}>
					<div className={style.title}>
						Отделка дома
					</div>
					<div className={style.table}>
						{decoration.map(item =>
							<div className={style.row}>
								<div className={style.name}>{item.name}</div>
								{item.value}
							</div>
						)}
					</div>
				</div>
			</InfoSection>
		</>
	)
}