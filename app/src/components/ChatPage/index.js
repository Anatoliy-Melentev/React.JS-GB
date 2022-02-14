import { Chats } from "../Chats";
import { Outlet } from "react-router-dom";
import "./style.sass"

export function ChatPage() {
	return (
		<section className="chats">
			<Chats />
			<Outlet />
		</section>
	);
};

