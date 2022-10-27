import * as style from "./Location.scss"
import {InfoSection} from "../InfoSection/InfoSection";
import {StaticImage} from "gatsby-plugin-image";
import React from "react";

export const Location = () => {
	return (
		<InfoSection title={"Местоположение"} contentType={"custom"} id={"location"}>
			<StaticImage
				src={"../../images/location/map.jpg"}
				alt={""}
				placeholder={"blurred"}
				width={1200}
			/>
		</InfoSection>
	)
}