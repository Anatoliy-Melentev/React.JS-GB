import { Avatar, Button, FormControlLabel, Checkbox, ListItemText, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_SHOW_NAME, CHANGE_NAME } from "../../store/profile/actions";
import { ThemeContext } from "../../utils/ThemeContext";
import { Save, Edit } from "@mui/icons-material";
import { AvatarButtons } from "../AvatarButtons";
import { Header } from "../Header";
import './style.sass';
import {grey} from "@mui/material/colors";

export const Profile = () => {
	//const { setMessageColor } = useContext(ThemeContext);
	const [value, setValue] = useState(true);
	const [valueName, setValueName] = useState('');
	const [showInput, setShowInput] = useState(false);

	const dispatch = useDispatch();
	const { showName, name, avatar } = useSelector((state) => state);

	const handleChangeShowName = () => {
		setValue(!value);
		dispatch({
			type: CHANGE_SHOW_NAME,
			payload: value,
		});
	};

	const handleChange = (e) => {
		setValueName(e.target.value);
	};

	//const handleClick = () => {
	//	setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
	//};

	const handleChangeName = (text) => {
		if (showInput && valueName.length) {
			dispatch({
				type: CHANGE_NAME,
				payload: valueName,
			});
		}

		setShowInput(!showInput);
	};

	return (
		<>
			<Header>Profile</Header>
			<section className="avatars">
				<Avatar src={avatar.img} alt="User Avatar" sx={{ width: 250, height: 250 }} />
				<AvatarButtons />
			</section>
			<div className='nameSection'>
				<div>
				{
					showName && (
						showInput
						?
							<>
								<TextField
									value={valueName}
									onChange={handleChange}
									placeholder="Введите новое имя"
									size="small"
									sx={{ width: 268, marginLeft: 5.2, marginRight: 3 }}
								/>
								<Save
									color="#aaa"
									onClick={handleChangeName}
									sx={{ width: 24, height: 24, marginRight: 1, marginTop: 1, color: grey[700] }}
								/>
							</>
						:
						<Button onClick={handleChangeName} size='large'>
							<ListItemText className="userName" primary={name} sx={{ float: 'right' }} />
							<Edit sx={{ width: 35, height: 35, marginRight: 1.5 }} />
						</Button>
					)
				}
				</div>
				<div>
					<FormControlLabel
						label="Показывать имя под аватаркой"
						control={<Checkbox checked={value} onChange={handleChangeShowName} />}
					/>
				</div>
			</div>
		</>
	);
}