import { Message } from '../Message';

export const MessageList = ({ messages }) => {
	return messages.map(message => <Message key={message.id} message={ message } />);
}