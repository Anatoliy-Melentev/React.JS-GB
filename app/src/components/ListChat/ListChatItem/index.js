import { ListItemButton, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

export const ListChatItem = ({ value }) => {
	return (
		<ListItemButton alignItems="flex-start" key={value.id}>
			<ListItemAvatar>
				<Avatar alt={value.name} src={value.img}/>
			</ListItemAvatar>
			<ListItemText primary={value.name} secondary={value.lastText}/>
		</ListItemButton>
	);
};