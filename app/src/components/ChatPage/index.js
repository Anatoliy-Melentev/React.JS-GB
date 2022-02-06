import { Chats } from "../Chats";
import { Outlet } from "react-router-dom";
import "./style.sass"

export function ChatPage({ chatlist, setChats }) {
	return (
		<section className="chats">
			<Chats chatlist={chatlist} setChats={setChats} />
			<Outlet />
		</section>
	);
};

