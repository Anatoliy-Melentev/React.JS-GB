import home from "../img/home.png";
import chat from "../img/chat.png";
import user from "../img/user.png";

import chats from "../img/chats.png";
import work from "../img/work.png";
import study from "../img/study.jpg";
import friend from "../img/friend.png";
import family from "../img/family.jpg";

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
	{
		name: 'articles',
		path: '/articles',
		text: 'Articles',
		icon: study,
	},
];

export const AUTHORS = {
	ME: {
		id: 'me',
		type: 'user',
		name: 'Я',
		img: avatar4
	},
	ELEPHANT: {
		id: 'bot',
		type: 'bot',
		name: 'Продавец слонов',
		img: elephant,
		answer: (text) => `Все говорят "${text}", а ты купи слона!`,
	},
	BOSS: {
		id: 'boss',
		type: 'bot',
		name: 'Начальник',
		img: avatar3,
		answer: (text) => `Все говорят "${text}", а тебе нужно поработать в эти выходные!`,
	},
	RECTOR: {
		id: 'rector',
		type: 'bot',
		name: 'Ректор',
		img: avatar6,
		answer: (text) => `Все говорят "${text}", но пересдача тебе не светит!`,
	},
	MOTHERINLAW: {
		id: 'motherinlaw',
		type: 'bot',
		name: 'Тёща',
		img: avatar7,
		answer: (text) => `Все говорят "${text}", а я завтра приеду погостить на месяцок!`,
	},
	FRIEND: {
		id: 'friend',
		type: 'bot',
		name: 'Лучший друг',
		img: avatar1,
		answer: (text) => `Все говорят "${text}", а я говорю пойдем выпьем!`,
	},
	QUIZ: {
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
		messages: [{
			id: 'msg-0',
			text: 'I want to play the same game with you!',
			author: AUTHORS.QUIZ,
		}],
		emptyText: 'I want to play the same game with you!',
		img: quiz,
		bot: 'QUIZ',
	},
	work: {
		name: 'Рабочий',
		id: 'work',
		messages: [],
		emptyText: 'Пока никто ничего не писал..',
		img: work,
		bot: 'BOSS',
	},
	study: {
		name: 'Учебный',
		id: 'study',
		emptyText: 'Пока никто ничего не писал..',
		messages: [],
		img: study,
		bot: 'RECTOR',
	},
	friends: {
		name: 'Друзья',
		id: 'friends',
		emptyText: 'Пока никто ничего не писал..',
		messages: [],
		img: friend,
		bot: 'FRIEND',
	},
	family: {
		name: 'Семья',
		id: 'family',
		emptyText: 'Пока никто ничего не писал..',
		messages: [],
		img: family,
		bot: 'MOTHERINLAW',
	}
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

