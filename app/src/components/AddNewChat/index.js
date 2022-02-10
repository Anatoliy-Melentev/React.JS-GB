import { ListItemButton, ListItemText, Button, TextField } from "@mui/material";
import { useState } from "react";
import avatar from "../../img/avatar.png";
import {Add, Create} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

export const AddNewChat = ({ setChats }) => {
	const [showInput, setShowInput] = useState(false);
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const changeState = (e) => {
		if (showInput && value.length) {
			const id = `chat${Date.now()}`;

			setChats(prev => {
				return ({
					...prev,
					[id]: {
						name: value,
						id: id,
						messages: [],
						emptyText: 'Это вновь добавленный чат..',
						img: avatar,
					},
				})
			});

			setValue('');
		}

		setShowInput(!showInput);
	}

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
							color="#aaa"
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