import React from "react";
import { IconButton } from "@mui/material";
import { Delete} from "@mui/icons-material";

export const DelBtn = ({ deleteMsg }) => (
	<IconButton sx={{ width: 40, height: 40 }} onClick={deleteMsg} aria-label="upload picture">
		<Delete />
	</IconButton>
)