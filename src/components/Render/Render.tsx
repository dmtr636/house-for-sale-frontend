import React from "react";
import {InfoSection} from "../InfoSection/InfoSection";
import {StaticImage} from "gatsby-plugin-image";

export const Render = () => {
	return (
		<InfoSection contentType={"photo"}>
			<StaticImage
				src={"../../images/render/Render1.jpg"}
				placeholder={"blurred"}
				alt={""}
				sizes={"50vw"}
			/>
			<StaticImage
				src={"../../images/render/Render2.jpg"}
				placeholder={"blurred"}
				alt={""}
				sizes={"50vw"}
			/>
		</InfoSection>
	)
}