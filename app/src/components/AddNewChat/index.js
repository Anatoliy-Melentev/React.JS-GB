import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { initChatsTracking } from "../../store/chats/actions";
import { set } from "firebase/database";

import { ListItemButton, ListItemText, Button, TextField } from "@mui/material";
import { Add, Create } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { getChatsRefById, getMessagesRefByChatId } from "../../services/firebase";

export const AddNewChat = () => {
	const
		[showInput, setShowInput] = useState(false),
		[value, setValue] = useState(''),
		dispatch = useDispatch();

	const
		handleChange = e => setValue(e.target.value),
		changeState = () => {
			if (showInput && value.length) {
				const id = `chat${Date.now()}`;
				set(getChatsRefById(id), { id: id, name: value });
				set(getMessagesRefByChatId(id), { empty: true });
				setValue('');
			}

			setShowInput(!showInput);
		}

	useEffect(() => dispatch(initChatsTracking()), []);

	return (
		<div style={{ textDecoration: 'none' }} className="listitem">
			<ListItemButton alignItems="flex-start">
				{
					showInput
					?
					<>
						<TextField
							value={value}
							onChange={handleChange}
							placeholder="Введите название чата"
							size="small"
							sx={{ width: 268, marginLeft: 5.2, marginRight: 3 }}
						/>
						<Create
							onClick={changeState}
							sx={{ width: 24, height: 24, marginRight: 1, marginTop: 1, color: grey[700] }}
						/>
					</>
					:
					<Button onClick={changeState} size='large'>
						<Add sx={{ width: 35, height: 35, marginRight: 1.5 }} />
						<ListItemText primary="Создать чат" sx={{ float: 'right' }} />
					</Button>
				}
			</ListItemButton>
		</div>
	);
};