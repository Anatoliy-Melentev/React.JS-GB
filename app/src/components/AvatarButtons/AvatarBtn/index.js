import {Avatar, IconButton} from "@mui/material";
import {CHANGE_AVATAR} from "../../../store/profile/actions";
import {useDispatch} from "react-redux";


export const AvatarBtn = ({ avatar }) => {
	const dispatch = useDispatch();
	const handleChangeAvatar = () => {
		dispatch({
			type: CHANGE_AVATAR,
			payload: avatar.id,
		});
	};
	return (
			<IconButton
				key={avatar.id}
				onClick={handleChangeAvatar}
				aria-label="upload picture"
			>
				<Avatar
					src={avatar.img}
					alt={avatar.id}
					sx={{ width: 70, height: 70 }}
					variant="square"
				/>
			</IconButton>
	);
};