import "./style.sass";

export const LastText = ({ author, text }) => {
	return (
		<span>
			<span className="author">{author}: </span>
			<span className="text">{text.slice(0, 30 - author.length) + '...'}</span>
		</span>
	);
};