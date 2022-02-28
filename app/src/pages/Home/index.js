import { Link } from "react-router-dom";
import { MAINMENU } from "../../utils/constants";
import { Avatar, ListItemIcon, MenuItem, Typography } from "@mui/material";
import { Header } from "../../components/Header";

export const Home = () => {
	return (
		<>
			<Header>Home page</Header>
				{
					MAINMENU.filter(menu => menu.name !== 'home').map(({ text, icon, path }, i)=> (
						<Link key={i} to={path}>
							<MenuItem>
								<ListItemIcon>
									<Avatar src={icon} alt={text} sx={{width: 50, height: 50}} variant="square"/>
								</ListItemIcon>
								<Typography sx={{ marginLeft: 10 }} variant="inherit">{text}</Typography>
							</MenuItem>
						</Link>
					))
				}
		</>
	);
}