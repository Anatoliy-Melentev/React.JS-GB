import { AVATARS } from "../../utils/constants";
import { AvatarBtn } from "./AvatarBtn";
import './style.sass';

export const AvatarButtons = () => {
	return (
		<div className="change-avatar">
			{
				Object.values(AVATARS).map((avatar) =>
					<AvatarBtn key={avatar.id} avatar={avatar} />)
			}
		</div>
	);
};