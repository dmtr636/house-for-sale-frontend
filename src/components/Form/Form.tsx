import React, {useState} from "react"
import * as style from "./Form.module.scss"
import {Modal} from "../Modal/Modal";
import {CloseButton} from "../common/CloseButton";
import InputMask from "react-input-mask";

export const Form = (props: {onClose: () => void}) => {
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [checked, setChecked] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	const validate = () => {
		return !(phone.includes("_") || !phone.length || !checked || !name.length);
	}

	const handleClose = () => {
		props.onClose()
	}

	const submit = () => {
		setSubmitted(true)
	}

	return (
		<Modal>
			<div className={style.container}>
				<div className={style.closeButton}>
					<CloseButton onClick={handleClose} />
				</div>

				{!submitted
					?
					<>
						<div className={style.title}>
							Перезвоним вам за 30 секунд!
						</div>
						<input
							className={style.inputName}
							value={name}
							onChange={event => setName(event.target.value)}
							placeholder={"Как к вам обращаться?"}
						/>
						<InputMask
							className={style.inputPhone}
							mask="+7 (999) 999-99-99"
							placeholder={"+7"}
							value={phone}
							onChange={event => setPhone(event.target.value)}
							pattern={"\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}"}
						/>
						<div className={style.checkboxRow}>
							<button
								className={checked ? style.checkboxActive : style.checkbox}
								onClick={() => setChecked(!checked)}
							/>
							<div className={style.politicsText}>
								{"Нажимая на кнопку вы соглашаетесь с "}
								<a className={style.link}><b>политикой конфиденциальности</b></a>
							</div>
						</div>
						<button
							className={validate() ? style.buttonActive : style.buttonDisabled}
							disabled={!validate()}
							onClick={submit}
						>
							Отправить
						</button>
					</>
					:
					<div className={style.successText}>Приняли! Ждите звонка</div>
				}
			</div>
		</Modal>
	)
}