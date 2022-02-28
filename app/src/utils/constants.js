import home from "../img/home.png";
import chat from "../img/chat.png";
import user from "../img/user.png";

import chats from "../img/chats.png";

import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';
import avatar4 from '../img/avatar4.png';
import avatar5 from '../img/avatar5.png';
import avatar6 from '../img/avatar6.png';
import avatar7 from '../img/avatar7.png';
import avatar8 from '../img/avatar8.png';
import quiz from '../img/quiz.jpg';
import quizboss from '../img/quizboss.png';
import elephant from '../img/elephant.png';


export const MAINMENU = [
	{
		name: 'home',
		path: '/',
		text: 'Home',
		icon: home,
	},
	{
		name: 'chat',
		path: 'chats',
		text: 'Chats',
		icon: chat,
	},
	{
		name: 'user',
		path: '/profile',
		text: 'Profile',
		icon: user,
	},
];

export const BOTS = {
	elephant: {
		id: 'elephant',
		type: 'bot',
		name: 'Продавец слонов',
		img: elephant,
		answer: (text) => `Все говорят "${text}", а ты купи слона!`,
	},
	quiz: {
		id: 'quiz',
		type: 'bot',
		name: 'Host',
		img: quizboss,
	},
};

export const CHATS = {
	quiz: {
		name: "Викторина",
		id: 'quiz',
		emptyText: 'I want to play the same game with you!',
		img: quiz,
		bot: 'QUIZ',
	},
	elephant: {
		name: 'Продавец слонов',
		id: 'elephant',
		emptyText: 'Пока никто ничего не писал..',
		img: elephant,
		bot: 'elephant',
	},
};

export const AVATARS = {
	avatar1: {
		id: 'avatar1',
		img: avatar1,
	},
	avatar2: {
		id: 'avatar2',
		img: avatar2,
	},
	avatar3: {
		id: 'avatar3',
		img: avatar3,
	},
	avatar4: {
		id: 'avatar4',
		img: avatar4,
	},
	avatar5: {
		id: 'avatar5',
		img: avatar5,
	},
	avatar6: {
		id: 'avatar6',
		img: avatar6,
	},
	avatar7: {
		id: 'avatar7',
		img: avatar7,
	},
	avatar8: {
		id: 'avatar8',
		img: avatar8,
	},
};

