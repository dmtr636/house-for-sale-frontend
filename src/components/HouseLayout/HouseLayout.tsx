import {InfoSection} from "../InfoSection/InfoSection";
import firstFloor from "../../images/houseLayout/firstFloor.jpg"
import secondFloor from "../../images/houseLayout/secondFloor.jpg"
import React from "react";

export const HouseLayout = () => {
    return (
        <InfoSection title={"Планировка"} id={"layout"}>
            <img src={firstFloor}/>
            <div>1 floor</div>
            <img src={secondFloor}/>
            <div>2 floor</div>
        </InfoSection>
    )
}