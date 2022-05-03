import { onChildAdded, onChildRemoved, onChildChanged } from 'firebase/database';
import { getMessageListRefByChatId } from '../../services/firebase';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const EDIT_MESSAGE = 'MESSAGES::EDIT_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';

export const addMessage = (idChat, idMsg, text, author) => ({
  type: ADD_MESSAGE,
  payload: {
    idChat, idMsg, text, author,
  },
});

export const editMessage = (idChat, idMsg, text) => ({
  type: EDIT_MESSAGE,
  payload: { idChat, idMsg, text },
});

export const deleteMessage = (idChat, idMsg) => ({
  type: DELETE_MESSAGE,
  payload: { idChat, idMsg },
});

export const initMessagesTracking = (chatId) => (dispatch) => {
  onChildAdded(getMessageListRefByChatId(chatId), (snapshot) => {
    const { id, text, author } = snapshot.val();
    dispatch(addMessage(chatId, id, text, author));
  });
  onChildChanged(getMessageListRefByChatId(chatId), (snapshot) => {
    dispatch(editMessage(chatId, snapshot.val().id, snapshot.val().text));
  });
  onChildRemoved(getMessageListRefByChatId(chatId), (snapshot) => {
    dispatch(deleteMessage(chatId, snapshot.val().id));
  });
};
