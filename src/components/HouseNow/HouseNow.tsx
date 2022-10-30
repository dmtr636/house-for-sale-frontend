import * as style from "./HouseNow.module.scss"
import {InfoSection} from "../InfoSection/InfoSection";
import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {getSizes} from "../../utils/sizes";

export const HouseNow = () => {
	return (
		<InfoSection title={"Дом сейчас"} contentType={"custom"} id={"house-now"}>
			<div className={style.photos}>
				<StaticImage
					src={"../../images/houseNow/photo1.jpg"}
					alt={""}
					placeholder={"blurred"}
					sizes={getSizes(60)}
				/>
				<StaticImage
					src={"../../images/houseNow/photo2.jpg"}
					alt={""}
					placeholder={"blurred"}
					sizes={getSizes(40)}
				/>
				<StaticImage
					src={"../../images/houseNow/photo3.jpg"}
					alt={""}
					placeholder={"blurred"}
					className={style.photo2col}
				/>
			</div>
		</InfoSection>
	)
}