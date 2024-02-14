import http from "./httpService";
import config from "./../config/config.json";
import logService from "./logService";

const apiEndpoint = `${config.apiEndpoint}/UserManagement/`;

export async function createUser(user: DbUser) {
  try {
    const resp = await http.post(`${apiEndpoint}/Create`, {
      user,
    });
    const { status, data } = resp;
    if (status === 201) return data;
    return null;
  } catch (error) {
    logService.log(error);
    return null;
  }
}

export async function allUsers() {
  try {
    const resp = await http.get(`${apiEndpoint}/Users`);
    const { status, data } = resp;
    if (status === 200) return data;
    return [];
  } catch (error) {
    logService.log(error);
    return [];
  }
}

export async function getUser(userId: string) {
  try {
    const resp = await http.get(`${apiEndpoint}/User/${userId}`);
    const { status, data } = resp;
    if (status === 200) return data;
    return null;
  } catch (error) {
    logService.log(error);
    return null;
  }
}

export async function updateUser(userId: string, user: DbUser) {
  try {
    const resp = await http.put(`${apiEndpoint}/Update/${userId}`, user);
    const { status, data } = resp;
    if (status === 200) return data;
    return null;
  } catch (error) {
    logService.log(error);
    return null;
  }
}

export async function deleteUser(userId: string) {
  try {
    const resp = await http.delete(`${apiEndpoint}/Delete/${userId}`);
    const { status, data } = resp;
    if (status === 204) return data;
    return null;
  } catch (error) {
    logService.log(error);
    return null;
  }
}
