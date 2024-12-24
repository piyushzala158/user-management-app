import { api } from "@/api";
import { User } from "@/views/users/UserTable";

export const getUsers = async (data?: object) => {
  const response = await api({
    endpoint: "/users",
    method: "GET",
    body: data,
  });

  return response as User[];
};
