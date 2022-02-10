import './style.sass';

export const Header = ({ children }) => {
	return (
		<div className="header">
			<h2 className="title">{children}</h2>
		</div>
	)
}