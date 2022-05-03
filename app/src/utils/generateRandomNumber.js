const curTime = () => new Date().getTime();

export const generateRandomNumber = (id) => Number(
  curTime().toString() + id + Math.floor(Math.random() * 9),
);
