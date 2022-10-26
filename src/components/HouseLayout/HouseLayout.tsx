import {InfoSection} from "../InfoSection/InfoSection";
import React from "react";
import {StaticImage} from "gatsby-plugin-image";

export const HouseLayout = () => {
    return (
        <InfoSection title={"Планировка"} id={"layout"}>
            <StaticImage src={"../../images/houseLayout/firstFloor.jpg"} alt={""}/>
            <div>1 floor</div>
            <StaticImage src={"../../images/houseLayout/secondFloor.jpg"} alt={""}/>
            <div>2 floor</div>
        </InfoSection>
    )
}