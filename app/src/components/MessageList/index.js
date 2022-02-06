import { Message } from '../Message';

export const MessageList = ({ messages, list }) => {
	return messages.map((message, i) =>
		<Message key={message.id} message={ message } />
	)
}