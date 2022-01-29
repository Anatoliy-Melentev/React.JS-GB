import React from "react";
import "./styles.sass";

// export const Message = ({ text }) => {
// 	return <div className="header rotate">{text}</div>
// }

export class Message extends React.Component {
	render() {
		const { img, author, text, onMessageClick } = this.props;
		const posClass = author === 'Me' ? 'message message__right-direction' : 'message';

		return (
			<div className={posClass}>
				<div className="message__avatar">
					<div className="message__avatar-border">
						<img className="message__avatar-img" src={img} alt={author} />
					</div>
					<div className="message__author">{author}</div>
				</div>
				<div className="message__text" onClick={onMessageClick}> {text}</div>
			</div>
		);
	}
}