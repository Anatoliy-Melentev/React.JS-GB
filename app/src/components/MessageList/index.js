import { Message } from '../Message'

export const MessageList = ({ messages }) => {
	return messages.map((message, i) => <Message key={i} message={ message } />)
}