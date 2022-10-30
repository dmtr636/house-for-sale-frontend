import React from 'react';
import * as style from "./LinksMobile.module.scss";
import {socialLinks} from "../Header/Header";

export const LinksMobile = () => {
	return (
		<div className={style.container}>
			<div className={style.social}>
				{socialLinks.map(link =>
					<a
						href={link.href}
						key={link.href}
						target={"_blank"}
						rel={"noreferrer"}
						className={style.socialLink}
					>
						<img src={link.icon}/>
					</a>
				)}
			</div>
			<a
				className={style.button}
				href={"tel:+79774888608"}
			/>
		</div>
	);
};