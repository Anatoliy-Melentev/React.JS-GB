import React, { useState } from "react";
import './App.sass';
import elephant from './img/elephant.png';
import { Message } from './components/Message';
//import { Counter } from './components/Counter';
import { Form } from './components/Form';
import { useEffect } from "react/cjs/react.development";

function App() {
	const [messageList, setMessageList] = useState([{
		text: "Купи слона!",
		author: "Продавец слонов",
		img: elephant,
	}]);

	const handleMessageClick = () => {
		console.log("hello!!!");
	};

	const handleAddMessage = (text) => {
		setMessageList((prevMessageList) => [...prevMessageList, text]);
	};

	useEffect(() => {
		console.log(messageList[messageList.length - 1]);
		if (messageList[messageList.length - 1].author !== 'Продавец слонов') {
			setTimeout(() => {
				handleAddMessage({
					text: `Все говорят "${messageList[messageList.length - 1].text}", а ты купи слона!`,
					author: 'Продавец слонов',
					img: elephant,
				})
			}, 1000)
		}
		let messenger = document.querySelector('.messenger');
		messenger.scrollTop = messenger.scrollHeight;
	}, [messageList]);

	return (
		<>
			<div className="header">
				<h2>Добрый день! Здесь вам требуется купить слона!</h2>
			</div>
			<div className="App">
				<div className="App-body">
					<div className="container messenger">
						<div className="full-height"></div>
						{messageList.map(({ pos, img, text, author}, i) => (
							<Message
								key={i} pos={pos} img={img} text={text} author={author}
								onMessageClick={handleMessageClick} />
						))}
					</div>
					{/* <Counter /> */}
					<Form onSubmit={handleAddMessage} />
				</div>
			</div>
		</>
	);
}

export default App;
