import React from "react"
import * as style from "./AdditionalWork.module.scss"

const info = [
	{
		title: "Внутреняя отделка с учётом работы\n и материала",
		rows: [
			{
				text: <div><b>Полы:</b> 1 этаж плитка, 2 этаж ламинат</div>,
				value: <b>300 000-400 000 ₽</b>
			},
			{
				text: <div><b>Стены:</b> отделка имитацией бруса с покраской</div>,
				value: <b>400 000-500 000 ₽</b>
			},
			{
				text: <div><b>Потолок:</b> натяжной матовый с установкой светильников</div>,
				value: <b>100 000-150 000 ₽</b>
			},
			{
				text: <div><b>Санузел:</b> плитка на полу и на стенах, сантехника</div>,
				value: <b>50 000-100 000 ₽</b>
			}
		]
	},
	{
		title: "Коммуникации",
		rows: [
			{
				text: <div><b>Отопление:</b> установка котла отопления, обвязка,<br/>
					разводка по дому, подключение радиаторов</div>,
				value: <b>400 000-500 000 ₽</b>
			},
			{
				text: <div><b>Водоснабжение:</b> установка водонагревателя,<br/>
					гребенок разводка труб до потребителей, подключение</div>,
				value: <b>200 000-300 000 ₽</b>
			},
			{
				text: <div><b>Электрика:</b> сборка щитка, разводка проводки<br/>
					до потребителей. Установка розеток, выключателей,<br/>
					светильников</div>,
				value: <b>200 000-300 000 ₽</b>
			},
		]
	},
	{
		title: "Благоустройство территории",
		rows: [
			{text: <div>Забор</div>, value: ""},
			{text: <div>Отмостка</div>, value: ""},
			{text: <div>Ландшафтный дизайн</div>, value: ""},
		]
	}
]

export const AdditionalWork = () => {
	return (
		<div className={style.container}>
			<div className={style.title}>
				Дополнительные работы под ключ
			</div>
			{info.map(table =>
				<div className={style.table}>
					<div className={style.tableHead}>{table.title}</div>
					{table.rows.map(row =>
						<div className={style.row}>
							{row.text}
							<div>{row.value}</div>
						</div>
					)}
				</div>
			)}
			<div className={style.footer}>
				<div className={style.footerLeft}>
					По всем работам будет представлена подробная смета после согласования материалов и видов работ.
					Вы так же сможете выполнить все эти работы самостоятельно, либо привлечь сторонюю организацию,
					но мы уверены, что наши цены и качество вас устроят, и мы дадим гарантию на дом.
				</div>
				<div className={style.footerRight}>
					<div className={style.footerRightTop}>Итого под ключ</div>
					<div className={style.footerRightBottom}>1 000 000-1 500 000 ₽</div>
				</div>
			</div>
		</div>
	)
}