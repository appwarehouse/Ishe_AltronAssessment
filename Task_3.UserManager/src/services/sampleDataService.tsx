import logService from "./logService";

export const dummyUsers = [
  {
    userId: "e9bf5fae-32e7-4e3e-9f5a-ec10b5ee81f1",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john@example.com",
    password: "password123",
    isActive: true,
  },
  {
    userId: "68a30d71-58cb-4d19-b3de-51ad8898a3ab",
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    email: "jane@example.com",
    password: "password456",
    isActive: false,
  },
  {
    userId: "3fd5a478-5c5c-4654-91bb-c8d8d472a1d4",
    firstName: "Alice",
    lastName: "Smith",
    username: "alice",
    email: "alice@example.com",
    password: "password789",
    isActive: true,
  },
  {
    userId: "80f9ddcb-b694-4fc2-97ec-79bdf3b8e681",
    firstName: "Bob",
    lastName: "Johnson",
    username: "bob",
    email: "bob@example.com",
    password: "passwordABC",
    isActive: false,
  },
  {
    userId: "ac1b87d9-f8b2-4249-b8fc-bd5d9b11a33e",
    firstName: "Emily",
    lastName: "Brown",
    username: "emily",
    email: "emily@example.com",
    password: "passwordDEF",
    isActive: true,
  },
  {
    userId: "d95e1a85-446f-4e35-8a20-94d166f1fb3d",
    firstName: "Michael",
    lastName: "Williams",
    username: "michael",
    email: "michael@example.com",
    password: "passwordGHI",
    isActive: false,
  },
  {
    userId: "6f2909f0-9020-47f6-b5b7-9d579f4cbf6f",
    firstName: "Sophia",
    lastName: "Jones",
    username: "sophia",
    email: "sophia@example.com",
    password: "passwordJKL",
    isActive: true,
  },
  {
    userId: "cfa36358-ae32-40db-9d86-4e0a91a3e78a",
    firstName: "William",
    lastName: "Brown",
    username: "william",
    email: "william@example.com",
    password: "passwordMNO",
    isActive: false,
  },
  {
    userId: "3e13d7c2-11e8-4f21-8f21-56b5db18a785",
    firstName: "Olivia",
    lastName: "Davis",
    username: "olivia",
    email: "olivia@example.com",
    password: "passwordPQR",
    isActive: true,
  },
  {
    userId: "b5c2e104-212d-40d7-a511-731556cc2e7b",
    firstName: "James",
    lastName: "Wilson",
    username: "james",
    email: "james@example.com",
    password: "passwordSTU",
    isActive: false,
  },
];

export async function createUser(user: DbUser, users: DbUser[]) {
  try {
    return [...users, user];
  } catch (error) {
    logService.log(error);
    return [];
  }
}

export async function allUsers() {
  return dummyUsers;
}

export async function getUser(userId: string) {
  return dummyUsers.find((x) => x.userId === userId);
}

export async function updateUser(user: DbUser, users: DbUser[]) {
  try {
    const index = users.findIndex((u) => u.userId === user.userId);
    const updatedUsers = [...users];
    updatedUsers[index] = user;

    return updatedUsers;
  } catch (error) {
    logService.log(error);
    return users;
  }
}

export async function deleteUser(userId: string, users: DbUser[]) {
  try {
    const updatedUsers = users?.map((user) => {
      if (user.userId === userId) {
        return { ...user, isActive: false };
      }
      return user;
    });
    return updatedUsers;
  } catch (error) {
    logService.log(error);
    return users;
  }
}
