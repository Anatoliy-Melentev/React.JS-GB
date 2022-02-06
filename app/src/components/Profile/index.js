import { Avatar } from "@mui/material";
import userava from '../../img/userava.png';

export const Profile = () => (
	<section>
		<Avatar src={userava} alt="User Avatar" sx={{width: 250, height: 250}} />
	</section>
)