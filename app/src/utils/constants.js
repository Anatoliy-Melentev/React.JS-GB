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

export const AUTHORS = {
	ME: {
		id: 'me',
		name: 'Я',
		img: avatar1
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
		img: work,
	},
	study: {
		name: 'Учебный',
		id: 'study',
		emptyText: 'Пока никто ничего не писал..',
		messages: [],
		img: study,
	},
	friends: {
		name: 'Друзья',
		id: 'friends',
		emptyText: 'Пока никто ничего не писал..',
		messages: [],
		img: friend,
	},
	family: {
		name: 'Семья',
		id: 'family',
		emptyText: 'Пока никто ничего не писал..',
		messages: [],
		img: family,
	}
};

export const AVATARS = {
	avatar1: {
		id: 'avatar1',
		sex: 'm',
		img: avatar1,
	},
	avatar2: {
		id: 'avatar2',
		sex: 'm',
		img: avatar2,
	},
	avatar3: {
		id: 'avatar3',
		sex: 'm',
		img: avatar3,
	},
	avatar4: {
		id: 'avatar4',
		sex: 'm',
		img: avatar4,
	},
	avatar5: {
		id: 'avatar5',
		sex: 'w',
		img: avatar5,
	},
	avatar6: {
		id: 'avatar6',
		sex: 'w',
		img: avatar6,
	},
	avatar7: {
		id: 'avatar7',
		sex: 'w',
		img: avatar7,
	},
	avatar8: {
		id: 'avatar8',
		sex: 'w',
		img: avatar8,
	},
};

