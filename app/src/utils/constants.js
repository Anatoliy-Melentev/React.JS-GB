import user from '../img/user.png';
import elephant from '../img/elephant.png';
import avatar from '../img/avatar.jpg';

export const AUTHORS = {
	ME: {
		id: 'me',
		name: 'Я',
		img: user
	},
	BOT: {
		id: 'bot',
		name: 'Продавец слонов',
		img: elephant,
	},
};

export const CHATS = [{
	name: 'Рабочий',
	id: 'work',
	lastText: 'Я вчера был очень занят в понедельник точно пришлю…',
	img: avatar,
}, {
	name: 'Учебный',
	id: 'study',
	lastText: 'А когда можно пересдать?',
	img: avatar,
}, {
	name: 'Друзья',
	id: 'friends',
	lastText: 'Пошли на каток!',
	img: avatar,
}, {
	name: 'Семья',
	id: 'family',
	lastText: 'Купи молока',
	img: avatar,
}];
