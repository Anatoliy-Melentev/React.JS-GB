import { List } from "@mui/material";
import { CHATS } from "../../utils/constants";
import { ListChatItem } from "./ListChatItem"

export const ListChat = () => {
	return <List>{CHATS.map((value, i) => (<ListChatItem key={i} value={value} />))}</List>;
};