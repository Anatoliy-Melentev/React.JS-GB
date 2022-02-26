import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { selectName, selectShowName, selectAvatarImg } from "../../store/profile/selectors";
import { set, onValue } from "firebase/database";
import { ThemeContext } from "../../utils/ThemeContext";
import { Avatar, Button, FormControlLabel, Checkbox, ListItemText, TextField } from "@mui/material";
import { Save, Edit } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import { AvatarButtons } from "../../components/AvatarButtons";
import { Header } from "../../components/Header";

import './style.sass';
import { getUserAvatarByRef, getUserNameByRef, getUserShowNameByRef, logOut } from "../../services/firebase";

export const Profile = ({ auth }) => {
	//const { setMessageColor } = useContext(ThemeContext);
	const
		[dbName, setDbName] = useState('EmptyName'),
		[inputName, setInputName] = useState(''),
		[showInput, setShowInput] = useState(false),
		[dbShowName, setDbShowName] = useState(true),
		avatar = useSelector(selectAvatarImg),
		[dbAvatar, setDbAvatar] = useState(avatar),
		{ currentUser } = auth;

	const
		handleChangeName = async () => {
			if (showInput && inputName.length) {
				await set(getUserNameByRef(currentUser.uid), inputName);
			} else {
				setInputName(dbName)
			}

			setShowInput(!showInput);
		},
		handleChangeShowName = () => set(getUserShowNameByRef(currentUser.uid), !dbShowName),
		handleLogOut = async () => {
			try {
				await logOut();
			} catch (e) {
				console.warn(e.message);
			}
		};

	//const handleClick = () => {
	//	setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
	//};

	useEffect(() => {
		const unsubscribeName = onValue(getUserNameByRef(currentUser.uid), snapshot => setDbName(snapshot.val()));
		const unsubscribeShowName = onValue(getUserShowNameByRef(currentUser.uid), snapshot => setDbShowName(snapshot.val()));
		const unsubscribeAvatar = onValue(getUserAvatarByRef(currentUser.uid), snapshot => setDbAvatar(snapshot.val()));

		return () => {
			unsubscribeName();
			unsubscribeShowName();
			unsubscribeAvatar();
		};
	});

	return (
		<>
			<Header>Profile</Header>
			<button onClick={handleLogOut}>LOGOUT</button>
			<section className="avatars">
				<Avatar src={dbAvatar} alt="User Avatar" sx={{ width: 250, height: 250 }} />
				<AvatarButtons />
			</section>
			<div className='nameSection'>
				<div>
				{ dbShowName && (
					showInput
					?
						<>
							<TextField value={inputName} onChange={e => setInputName(e.target.value)}
								placeholder="Введите новое имя" size="small" className="textField" />
							<Save onClick={handleChangeName} className="saveBtn" sx={{ color: grey[700] }}/>
						</>
					:
						<Button onClick={handleChangeName} size='large'>
							<ListItemText className="userName" primary={dbName} />
							<Edit className="editBtn" />
						</Button>
				)}
				</div>
				<div>
					<FormControlLabel label="Показывать имя под аватаркой" control={
						<Checkbox checked={dbShowName} onChange={handleChangeShowName} />
					} />
				</div>
			</div>
		</>
	);
}

// export const ProfileToConnect = ({ showName, avatar, name, setName, setShowName }) => {
// 	const
// 		handleChange = (e) => setValueName(e.target.value),
// 		handleChangeName = () => {
// 			if (showInput && valueName.length) {
// 				setName(valueName);
// 			}
//
// 			setShowInput(!showInput);
// 		},
// 		handleChangeShowName = () => {
// 			setShowName(!value);
// 			setValue(!value);
// 		};
//
// 	const
// 		[value, setValue] = useState(true),
// 		[valueName, setValueName] = useState(''),
// 		[showInput, setShowInput] = useState(false);
//
// 	return (
// 		<>
// 			<Header>Profile</Header>
// 			<section className="avatars">
// 				<Avatar src={avatar} alt="User Avatar" sx={{ width: 250, height: 250 }} />
// 				<AvatarButtons />
// 			</section>
// 			<div className='nameSection'>
// 				<div>
// 					{ showName && (
// 						showInput
// 							?
// 							<>
// 								<TextField value={valueName} onChange={handleChange}
// 									placeholder="Введите новое имя" size="small" className="textField" />
// 								<Save onClick={handleChangeName} className="saveBtn" sx={{ color: grey[700] }}/>
// 							</>
// 							:
// 							<Button onClick={handleChangeName} size='large'>
// 								<ListItemText className="userName" primary={name} />
// 								<Edit className="editBtn" />
// 							</Button>
// 					)}
// 				</div>
// 				<div>
// 					<FormControlLabel label="Показывать имя под аватаркой" control={
// 						<Checkbox checked={value} onChange={handleChangeShowName} />
// 					} />
// 				</div>
// 			</div>
// 		</>
// 	);
// };
//
// const mapStateToProps = (state) => ({
// 		showName: selectShowName(state),
// 		avatar: selectAvatarImg(state),
// 		name: selectName(state),
// 	});
// const mapDispatchToProps = {
// 		setShowName: changeShowName,
// 		setName: changeName,
// 	};
// const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(ProfileToConnect);
//
// export default ConnectedProfile;