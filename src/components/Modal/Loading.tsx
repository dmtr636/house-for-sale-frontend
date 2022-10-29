import React from 'react';
import * as style from "./Loading.module.scss"
import {Modal} from "./Modal";

export const Loading = () => {
	return (
		<Modal>
			<div className={style.container}>
				<div className={style.title}>
					Загрузка...
				</div>
			</div>
		</Modal>
	);
};