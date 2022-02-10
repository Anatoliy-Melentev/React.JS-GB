import { Link } from "react-router-dom";
import { MAINMENU } from "../../utils/constants";
import {Avatar, ListItemIcon, MenuItem, MenuList,Typography} from "@mui/material";
import {Header} from "../Header";

export const Home = () => {
	return (
		<>
			<Header>Home page</Header>
				{
					MAINMENU.filter(menu => menu.name !== 'home').map((menu, i)=> (
						<Link key={i} to={menu.path}>
							<MenuItem>
								<ListItemIcon>
									<Avatar src={menu.icon} alt={menu.text} sx={{width: 50, height: 50}} variant="square"/>
								</ListItemIcon>
								<Typography sx={{ marginLeft: 10 }} variant="inherit">{menu.text}</Typography>
							</MenuItem>
						</Link>
					))
				}
		</>
	);
}