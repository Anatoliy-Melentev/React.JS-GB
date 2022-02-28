import "./style.sass";

export const LastText = ({ text }) => <span className="text">{text.slice(0, 30) + '...'}</span>