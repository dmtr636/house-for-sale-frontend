import {InfoSection} from "../InfoSection/InfoSection";
import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import * as style from "./HouseLayout.module.scss"

const infoFirstFloor = [
    {name: "Терасса", value: "15 м"},
    {name: "Прихожая", value: "10 м"},
    {name: "Санузел", value: "10 м"},
    {name: "Комната", value: "10 м"},
    {name: "Кухня-зал", value: "10 м"},
    {name: "Лестница", value: "10 м"}
]

const infoSecondFloor = [
    {name: "Балкон", value: "15 м"},
    {name: "Коридор", value: "5 м"},
    {name: "Спальня 1", value: "10 м"},
    {name: "Спальня 2", value: "10 м"},
    {name: "Оснвоная спальня", value: "32 м"},
]

export const HouseLayout = () => {
    return (
        <InfoSection title={"Планировка"} id={"layout"}>
            <StaticImage src={"../../images/houseLayout/firstFloor.jpg"} alt={""}/>
            <div>
                <div className={style.title}>
                    Площадь первого<br/>
                    этажа
                </div>
                <div className={style.info}>
                    {infoFirstFloor.map(row =>
                        <>
                            <div className={style.name}>
                                {row.name}
                            </div>
                            <div className={style.value}>
                                {row.value}<sup>2</sup>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <StaticImage src={"../../images/houseLayout/secondFloor.jpg"} alt={""}/>
            <div>
                <div className={style.title}>
                    Площадь второго<br/>
                    этажа
                </div>
                <div className={style.info}>
                    {infoSecondFloor.map(row =>
                        <>
                            <div className={style.name}>
                                {row.name}
                            </div>
                            <div className={style.value}>
                                {row.value}<sup>2</sup>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </InfoSection>
    )
}