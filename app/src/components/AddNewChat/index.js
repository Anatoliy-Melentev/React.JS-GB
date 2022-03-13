import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { initChatsTracking } from "../../store/chats/actions";
import { set } from "firebase/database";
import { getChatsRefById, getMessagesRefByChatId } from "../../services/firebase";
import { AddNewChatView } from "./AddNewChatView";

export const AddNewChat = () => {
	const
		[edit, setEdit] = useState(false),
		[value, setValue] = useState(''),
		dispatch = useDispatch();

	const
		changeState = () => {
			if (edit && value.length) {
				const id = `chat${Date.now()}`;
				set(getChatsRefById(id), { id: id, name: value });
				set(getMessagesRefByChatId(id), { empty: true });
				setValue('');
			}
			setEdit(!edit);
		}

	useEffect(() => dispatch(initChatsTracking()), []);

	return <AddNewChatView
		edit={edit}
		value={value}
		setValue={setValue}
		changeState={changeState}
	/>;
};