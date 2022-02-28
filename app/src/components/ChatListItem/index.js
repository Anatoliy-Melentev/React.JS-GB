import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { initChatsTracking } from "../../store/chats/actions";

import { ListItemButton, ListItemAvatar, Avatar, ListItemText, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { LastText } from "./LastText";

import './style.sass';
import { onValue, set } from "firebase/database";
import { getChatsLastMsgRefById, getChatsRefById } from "../../services/firebase";
import {useEffect, useState} from "react";
import {initMessagesTracking} from "../../store/messages/actions";
import { CHATS } from "../../utils/constants";


export const ChatListItem = ({ value: { id, name, img, emptyText } }) => {
	const
		dispatch = useDispatch(),
		[ lastMsg, setLastMsg ] = useState('Здесь пока ни кто ничего не писал'),
		handleDelete = () => set(getChatsRefById(id), null);

	useEffect(() => dispatch(initChatsTracking()), []);
	useEffect(() => dispatch(initMessagesTracking(id)), []);

	useEffect(() => onValue(getChatsLastMsgRefById(id), snapshot => setLastMsg(snapshot.val())));

	if (['quiz','elephant'].includes(id)) {
		img = CHATS[id].img;
	}

	return (
		<ListItemButton className="listitem" key={id}>
			<NavLink className="linkitem" to={`/chats/${id}`} >
				<ListItemAvatar>
					<Avatar alt={name} src={img}/>
				</ListItemAvatar>
				<ListItemText
					className='text'
					primary={name}
					secondary={(lastMsg && <LastText text={lastMsg} />) || emptyText}
				/>
			</NavLink>
			{
				!['quiz','elephant'].includes(id) &&
				<IconButton sx={{ width: 40, height: 40 }} className="deleteButton" onClick={handleDelete} >
					<Delete />
				</IconButton>
			}
		</ListItemButton>
	);
};