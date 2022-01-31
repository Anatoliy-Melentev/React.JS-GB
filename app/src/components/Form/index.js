import { useState } from "react";
import userpic from '../../img/user.png';
/* Картинки тоже пришлось подключить в разных блоках кода, там где передаю в функцию */
import "./styles.sass";

export const Form = ({ onSubmit }) => {
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		onSubmit({
			text: value,
			author: 'Me',
			img: userpic,
		});
		setValue('');
	};

	return (
		<form className="form-msg container" onSubmit={handleSubmit}>
			<input className="form-msg__field" value={value} onChange={handleChange} type="text" />
			<input className="form-msg__button" type="submit" value=":)" />
		</form>
	);
};