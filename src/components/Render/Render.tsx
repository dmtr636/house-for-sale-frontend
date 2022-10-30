import React from "react";
import {InfoSection} from "../InfoSection/InfoSection";
import {StaticImage} from "gatsby-plugin-image";
import {getSizes} from "../../utils/sizes";

export const Render = () => {
	return (
		<InfoSection contentType={"photo"}>
			<StaticImage
				src={"../../images/render/Render1.jpg"}
				placeholder={"blurred"}
				alt={""}
				sizes={getSizes(50)}
			/>
			<StaticImage
				src={"../../images/render/Render2.jpg"}
				placeholder={"blurred"}
				alt={""}
				sizes={getSizes(50)}
			/>
		</InfoSection>
	)
}