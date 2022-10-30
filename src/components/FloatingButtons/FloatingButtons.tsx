import * as style from "./FloatingButtons.module.scss"
import arrowPc from "../../images/arrow/arrowPc.svg"
import React, {useEffect, useState} from "react"
import {isMobile} from "../../utils/isMobile";
import {useWindowDimension} from "../../hooks/useWindowDimensions";

export const FloatingButtons = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [width, _] = useWindowDimension()
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={style.container}>
			{scrollPosition > 1200 &&
				<>
                    <button
                        className={style.arrow}
                        onClick={() => window.scrollTo({top: 0})}
                    />
					{width < 700 &&
                        <a
                            className={style.callButton}
                            href={"tel:+79774888608"}
                        />
					}
				</>
			}
		</div>
	)
}