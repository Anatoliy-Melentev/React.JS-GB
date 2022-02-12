import { useContext, useState } from "react";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
import { changeName, changeShowName } from "../../store/profile/actions";
import { selectName, selectShowName, selectAvatarImg } from "../../store/profile/selectors";

import { ThemeContext } from "../../utils/ThemeContext";
import { Avatar, Button, FormControlLabel, Checkbox, ListItemText, TextField } from "@mui/material";
import { Save, Edit } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import { AvatarButtons } from "../AvatarButtons";
import { Header } from "../Header";

import './style.sass';

export const Profile = () => {
	//const { setMessageColor } = useContext(ThemeContext);
	const
		dispatch = useDispatch(),
		[value, setValue] = useState(true),
		[valueName, setValueName] = useState(''),
		[showInput, setShowInput] = useState(false),
		showName = useSelector(selectShowName, shallowEqual),
		avatar = useSelector(selectAvatarImg),
		name = useSelector(selectName);

	const
		handleChange = (e) => setValueName(e.target.value),
		handleChangeName = () => {
			if (showInput && valueName.length) {
				dispatch(changeName(valueName));
			}

			setShowInput(!showInput);
		},
		handleChangeShowName = () => {
			dispatch(changeShowName(!value));
			setValue(!value);
		};

	//const handleClick = () => {
	//	setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
	//};

	return (
		<>
			<Header>Profile</Header>
			<section className="avatars">
				<Avatar src={avatar} alt="User Avatar" sx={{ width: 250, height: 250 }} />
				<AvatarButtons />
			</section>
			<div className='nameSection'>
				<div>
				{ showName && (
					showInput
					?
						<>
							<TextField value={valueName} onChange={handleChange}
								placeholder="Введите новое имя" size="small" className="textField" />
							<Save onClick={handleChangeName} className="saveBtn" sx={{ color: grey[700] }}/>
						</>
					:
					<Button onClick={handleChangeName} size='large'>
						<ListItemText className="userName" primary={name} />
						<Edit className="editBtn" />
					</Button>
				)}
				</div>
				<div>
					<FormControlLabel label="Показывать имя под аватаркой" control={
						<Checkbox checked={value} onChange={handleChangeShowName} />
					} />
				</div>
			</div>
		</>
	);
}

export const ProfileToConnect = ({ showName, avatar, name, setName, setShowName }) => {
	const
		handleChange = (e) => setValueName(e.target.value),
		handleChangeName = () => {
			if (showInput && valueName.length) {
				setName(valueName);
			}

			setShowInput(!showInput);
		},
		handleChangeShowName = () => {
			setShowName(!value);
			setValue(!value);
		}

	const
		[value, setValue] = useState(true),
		[valueName, setValueName] = useState(''),
		[showInput, setShowInput] = useState(false);

	return (
		<>
			<Header>Profile</Header>
			<section className="avatars">
				<Avatar src={avatar} alt="User Avatar" sx={{ width: 250, height: 250 }} />
				<AvatarButtons />
			</section>
			<div className='nameSection'>
				<div>
					{ showName && (
						showInput
							?
							<>
								<TextField value={valueName} onChange={handleChange}
									placeholder="Введите новое имя" size="small" className="textField" />
								<Save onClick={handleChangeName} className="saveBtn" sx={{ color: grey[700] }}/>
							</>
							:
							<Button onClick={handleChangeName} size='large'>
								<ListItemText className="userName" primary={name} />
								<Edit className="editBtn" />
							</Button>
					)}
				</div>
				<div>
					<FormControlLabel label="Показывать имя под аватаркой" control={
						<Checkbox checked={value} onChange={handleChangeShowName} />
					} />
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
		showName: selectShowName(state),
		avatar: selectAvatarImg(state),
		name: selectName(state),
	});
const mapDispatchToProps = {
		setShowName: changeShowName,
		setName: changeName,
	};
const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(ProfileToConnect);

export default ConnectedProfile;