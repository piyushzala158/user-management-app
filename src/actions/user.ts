import { api } from "@/api";
import { GET_USRES } from "@/constants/endPoints";

export const getUsers = (data) => {
  return api({
    endpoint: GET_USRES?.endPoint,
    method: "GET",
    body: data,
  });
};
