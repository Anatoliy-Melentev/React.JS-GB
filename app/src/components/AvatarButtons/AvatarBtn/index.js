import { Avatar, IconButton } from "@mui/material";
import { auth } from "../../../services/firebase";
import {set} from "firebase/database";
import { getUserAvatarByRef } from "../../../services/firebase";

export const AvatarBtn = ({ avatar: { id, img } }) => (
	<IconButton key={id} onClick={() => set(getUserAvatarByRef(auth.currentUser.uid), img)} aria-label="upload picture">
		<Avatar src={img} alt={id} sx={{ width: 70, height: 70 }} variant="square" />
	</IconButton>
)