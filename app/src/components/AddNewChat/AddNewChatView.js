import {Button, ListItemButton, ListItemText, TextField} from "@mui/material";
import {Add, Create} from "@mui/icons-material";
import {grey} from "@mui/material/colors";

export const AddNewChatView = ({ value, setValue, edit, changeState }) => (
	<div style={{ textDecoration: 'none' }} className="listitem">
		<ListItemButton alignItems="flex-start">
			{edit ? (
				<>
					<TextField
						value={value} onChange={e => setValue(e.target.value)}
						placeholder="Введите название чата" size="small"
						sx={{ width: 268, marginLeft: 5.2, marginRight: 3 }}
					/>
					<Create
						onClick={changeState}
						sx={{ width: 24, height: 24, marginRight: 1, marginTop: 1, color: grey[700] }}
					/>
				</>
			) : (
				<Button className="create-chat" onClick={changeState} size='large'>
					<Add sx={{ width: 35, height: 35, marginRight: 1.5 }} />
					<ListItemText primary="Создать чат" sx={{ float: 'right' }} />
				</Button>
			)}
		</ListItemButton>
	</div>
)