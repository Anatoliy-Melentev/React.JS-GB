import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MainMenu } from "../MainMenu";
import { Home } from "../Home";
import { ChatPage } from "../ChatPage";
import { Chat } from "../Chat";
import ConnectedProfile, { Profile } from "../Profile";
import { grey } from "@mui/material/colors";
import "./style.sass";

const theme = createTheme({ palette: { primary: { main: grey[400] } } });

export const Router = () => (
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
						<Route path="chats" element={<ChatPage />}>
							<Route path=":chatId" element={<Chat />} />
						</Route>
						<Route element={<h2>404</h2>} />
					</Routes>
				</div>
			</div>
		</ThemeProvider>
	</BrowserRouter>
);