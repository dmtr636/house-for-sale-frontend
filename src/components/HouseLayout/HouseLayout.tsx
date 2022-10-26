import {InfoSection} from "../InfoSection/InfoSection";
import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import * as style from "./HouseLayout.module.scss"

export const HouseLayout = () => {
    return (
        <InfoSection title={"Планировка"} id={"layout"}>
            <StaticImage src={"../../images/houseLayout/firstFloor.jpg"} alt={""}/>
            <div className={style.title}>
                Площадь первого<br/>
                этажа
            </div>
            <StaticImage src={"../../images/houseLayout/secondFloor.jpg"} alt={""}/>
            <div className={style.title}>
                Площадь второго<br/>
                этажа
            </div>
        </InfoSection>
    )
}