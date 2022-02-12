import { useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";

import { List } from "@mui/material";
import { ChatListItem } from "../ChatListItem";
import { AddNewChat } from "../AddNewChat";

import './style.sass';

export const Chats = () => {
	const chatList = useSelector(selectChats);

	return (
		<section className="chatlist">
			<List>
				<AddNewChat />
				{
					chatList && Object.values(chatList).map((value, i) =>
						value && <ChatListItem key={i} value={value} />
					)
				}
			</List>
		</section>
	);
};