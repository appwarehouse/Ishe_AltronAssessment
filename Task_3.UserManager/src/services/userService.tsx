import http from "./httpService";
import config from "./../config/config.json";

const apiEndpoint = `${config.apiEndpoint}/UserManagement/`;

export function createUser(user: DbUser) {
  return http.post(`${apiEndpoint}/Create`, {
    user,
  });
}

export async function allUsers() {
  return http.get(`${apiEndpoint}/Users`);
}

export async function getUser(userId: string) {
  var { data } = await http.get(`${apiEndpoint}/User/${userId}`);
  return data;
}

export async function updateUser(userId: string, user: DbUser) {
  return http.put(`${apiEndpoint}/Update/${userId}`, user);
}

export async function deleteUser(userId: string) {
  return http.delete(`${apiEndpoint}/Delete/${userId}`);
}
