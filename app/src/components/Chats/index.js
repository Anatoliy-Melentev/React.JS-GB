import { List } from "@mui/material";
import { ChatListItem } from "../ChatListItem";
import './style.sass';
import { AddNewChat } from "../AddNewChat";

export const Chats = ({ chatlist, setChats }) => {
	return (
		<section className="chatlist">
			<List>
				<AddNewChat setChats={setChats} />
				{
					chatlist && chatlist.map((value, i) =>
						value && <ChatListItem setChats={setChats} key={i} value={value} />
					)
				}
			</List>
		</section>
	);
};