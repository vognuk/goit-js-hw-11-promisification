console.log("Task-2-02");

// Задание 2
// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, 
// а принимала всего два параметра allUsers и userName и возвращала промис.

import users from "./users.js";

const toggleUserState = (allUsers, userName) => {
  return Promise.resolve(
    allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    ),
  );
};

const logger = updatedUsers => console.table(updatedUsers);


toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
