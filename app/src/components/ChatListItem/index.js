import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteChat } from "../../store/chats/actions";

import { ListItemButton, ListItemAvatar, Avatar, ListItemText, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { LastText } from "./LastText";

import './style.sass';


export const ChatListItem = ({ value: { id, name, img, messages, emptyText } }) => {
	const
		dispatch = useDispatch(),
		handleDelete = () => dispatch(deleteChat(id)),
		lastMsg = messages.length && messages[messages.length - 1];

	return (
		<ListItemButton className="listitem" key={id}>
			<NavLink className="linkitem" to={`/chats/${id}`} >
				<ListItemAvatar>
					<Avatar alt={name} src={img}/>
				</ListItemAvatar>
				<ListItemText
					className='text'
					primary={name}
					secondary={
						(lastMsg && <LastText author={lastMsg.author.name} text={lastMsg.text} />)
						|| emptyText
					}
				/>
			</NavLink>
			<IconButton onClick={handleDelete} aria-label="upload picture">
				<Delete />
			</IconButton>
		</ListItemButton>
	);
};