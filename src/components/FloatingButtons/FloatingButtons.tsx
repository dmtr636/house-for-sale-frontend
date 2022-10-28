import * as style from "./FloatingButtons.module.scss"
import arrowPc from "../../images/arrow/arrowPc.svg"
import React, {useEffect, useState} from "react"

export const FloatingButtons = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
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
				<button
					className={style.arrow}
                    onClick={() => window.scrollTo({top: 0})}
				/>
			}
		</div>
	)
}