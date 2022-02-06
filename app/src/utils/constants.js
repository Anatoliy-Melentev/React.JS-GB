import userava from '../img/userava.png';
import elephant from '../img/elephant.png';
import avatar from '../img/avatar.jpg';
import home from "../img/home.png";
import chat from "../img/chat.png";
import user from "../img/user.png";

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

export const AUTHORS = {
	ME: {
		id: 'me',
		name: 'Я',
		img: userava
	},
	BOT: {
		id: 'bot',
		name: 'Продавец слонов',
		img: elephant,
	},
};

export const CHATS = {
	work: {
		name: 'Рабочий',
		id: 'work',
		messages: [],
		emptyText: 'Пока никто ничего не писал..',
		img: avatar,
	},
	study: {
		name: 'Учебный',
		id: 'study',
		emptyText: 'Пока никто ничего не писал..',
		messages: [],
		img: avatar,
	},
	friends: {
		name: 'Друзья',
		id: 'friends',
		emptyText: 'Пока никто ничего не писал..',
		messages: [],
		img: avatar,
	},
	family: {
		name: 'Семья',
		id: 'family',
		emptyText: 'Пока никто ничего не писал..',
		messages: [],
		img: avatar,
	}
};

