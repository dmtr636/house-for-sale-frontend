import React from "react"
import * as style from "./Form.module.scss"
import {Modal} from "../Modal/Modal";
import {CloseButton} from "../common/CloseButton";

export const Form = (props: {onClose: () => void}) => {
	return (
		<Modal>
			<div className={style.container}>
				<div className={style.title}>
					Перезвоним вам за 30 секунд!
				</div>
				<div className={style.closeButton}>
					<CloseButton onClick={props.onClose} />
				</div>
			</div>
		</Modal>
	)
}