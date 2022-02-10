import {ListItemButton, ListItemAvatar, Avatar, ListItemText, IconButton} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { LastText } from "./LastText";
import './style.sass';


export const ChatListItem = ({ value, setChats }) => {
	const handleDelete = ({ target }) => {
		setChats(prev => ({
			...prev,
			[value.id]: undefined
		}));
	};

	return (
				<ListItemButton className="listitem" key={value.id}>
					<NavLink
						style={{textDecoration: 'none'}}
						className="linkitem"
						to={`/chats/${value.id}`}
					>
						<ListItemAvatar>
							<Avatar alt={value.name} src={value.img}/>
						</ListItemAvatar>
						<ListItemText
							className='text'
							primary={value.name}
							secondary={(
									value.messages.length &&
									<LastText
										author={value.messages[value.messages.length - 1]?.author.name}
										text={value.messages[value.messages.length - 1]?.text}
									/>
								) || value.emptyText }
						/>
					</NavLink>
					<IconButton
						id={value.id} onClick={handleDelete}
						aria-label="upload picture"
						component="span"
					>
						<Delete />
					</IconButton>
				</ListItemButton>
	);
};