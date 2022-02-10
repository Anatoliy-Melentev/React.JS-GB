import { Link } from "react-router-dom";
import { Avatar, ListItemIcon, MenuItem, MenuList } from "@mui/material";
import { MAINMENU } from "../../utils/constants";
import "./style.sass"

export const MainMenu = () => {
	return (
		<MenuList className="mainmenu">
			{
				MAINMENU.map((menu, i) => (
					<Link key={i} to={menu.path}>
						<MenuItem>
							<ListItemIcon>
								<Avatar src={menu.icon} alt={menu.text} sx={{width: 30, height: 30}} variant="square"/>
							</ListItemIcon>
						</MenuItem>
					</Link>
				))
			}
		</MenuList>
	);
}