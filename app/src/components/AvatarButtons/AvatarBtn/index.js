import { Avatar, IconButton } from "@mui/material";
import { changeAvatar } from "../../../store/profile/actions";
import { useDispatch } from "react-redux";

export const AvatarBtn = ({ avatar: { id, img } }) => {
	const
		dispatch = useDispatch(),
		handleChangeAvatar = () => dispatch(changeAvatar(id));

	return (
		<IconButton key={id} onClick={handleChangeAvatar} aria-label="upload picture">
			<Avatar src={img} alt={id} sx={{ width: 70, height: 70 }} variant="square" />
		</IconButton>
	);
};