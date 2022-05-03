export const CHANGE_SHOW_NAME = 'PROFILE::CHANGE_SHOW_NAME';
export const CHANGE_AVATAR = 'PROFILE::CHANGE_AVATAR';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';

export const changeShowName = (showName) => ({
  type: CHANGE_SHOW_NAME,
  showName,
});

export const changeName = (newName) => ({
  type: CHANGE_NAME,
  name: newName,
});

export const changeAvatar = (newAvatar) => ({
  type: CHANGE_AVATAR,
  id: newAvatar,
});
