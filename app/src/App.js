import React, { useState, useEffect, useRef } from "react";
import './App.sass';
import { AUTHORS } from "./utils/constants";
import { MessageList } from './components/MessageList';
import { Form } from './components/Form';
import { ListChat } from './components/ListChat';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: { main: grey[400] },
	},
});

function App() {
	const [messageList, setMessageList] = useState([{
		text: "Купи слона!",
		author: AUTHORS.BOT,
	}]);

	const messenger = useRef();

	const handleAddMessage = text => setMessageList((prevMessageList) => [...prevMessageList, text]);

	useEffect(() => {
		if (messageList[messageList.length - 1]?.author.id !== 'bot') {
			setTimeout(() => {
				handleAddMessage({
					text: `Все говорят "${messageList[messageList.length - 1].text}", а ты купи слона!`,
					author: AUTHORS.BOT,
				})
			}, 1000)
		}

		messenger.current?.scrollIntoView();
	}, [messageList]);

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<div className="App-body">
					<section>
						<ListChat />
					</section>
					<section>
						<div  className="container messenger">
							<div className="full-height"></div>
							<MessageList messages={messageList} />
							<div ref={messenger} />
						</div>
						<Form onSubmit={handleAddMessage} />
					</section>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
