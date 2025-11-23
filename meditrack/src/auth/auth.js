import { users } from "../data/seedUsers";

export function findUserByUsername(username) {
  return users.find((user) => user.username === username) || null;
}

export function verifyPassword(user, password) {
  if (!user) return false;
  return user.password === password;
}

export function authenticate(username, password) {
  const user = findUserByUsername(username);
  if (!user) return null;
  return verifyPassword(user, password) ? user : null;
}