import { ICreateUser } from "../../types/userTypes";
import { api } from "../../constants/api";
import axios from "axios";

export const signUp = async (newUser: ICreateUser) => {
  try {
    const { data } = await api.post("/user", newUser);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Erro desconhecido");
    }
    throw new Error("Ocorreu um erro inesperado");
  }
};
