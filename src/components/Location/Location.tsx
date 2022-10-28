import {InfoSection} from "../InfoSection/InfoSection";
import React from "react";

export const Location = () => {
	return (
		<InfoSection title={"Местоположение"} contentType={"custom"} id={"location"}>
			<iframe
				src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaae5a552d11f4bd220bc9153d60ede48266e970278afab250d277c499209cc62&amp;source=constructor"
				width="1200" height="435" frameBorder="0">
			</iframe>
		</InfoSection>
	)
}