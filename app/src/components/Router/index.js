import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MainMenu } from "../MainMenu";
import { Home } from "../Home";
import { ChatPage } from "../ChatPage";
import { Chat } from "../Chat";
import { Profile } from "../Profile";
import { grey } from "@mui/material/colors";
import "./style.sass";
import { useState } from "react";
import { CHATS } from "../../utils/constants";

const theme = createTheme({
	palette: {
		primary: { main: grey[400] },
	},
});

export const Router = () => {
	const [chats, setChats] = useState(CHATS);

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<div className="page">
					<div className="mainmenu">
						<MainMenu/>
					</div>
					<div className="content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="profile" element={<Profile />} />
							<Route path="chats" element={<ChatPage chatlist={Object.values(chats)} setChats={setChats} />}>
								<Route path=":chatId" element={<Chat chats={chats} setChats={setChats} />} />
							</Route>
							<Route element={<h2>404</h2>} />
						</Routes>
					</div>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
};