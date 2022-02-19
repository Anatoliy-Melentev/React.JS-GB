import React from "react";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";

export const EditBtn = ({ onEdit, changeOnEdit }) => (
	!onEdit &&
		<IconButton
			sx={{width: 40, height: 40}}
			onClick={changeOnEdit}
			aria-label="upload picture"
		>
			<Edit/>
		</IconButton>
)