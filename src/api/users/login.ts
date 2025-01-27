import axios from "axios";
import { api } from "../../constants/api";
import { ILogin } from "../../types/userTypes";
import Cookies from "js-cookie";

export const login = async (loginForm: ILogin) => {
  try {
    const { data } = await api.post("/login", loginForm);
    const token = data.token;
    Cookies.set("sessionToken", token, { expires: 1 / 24 });

    return token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Erro desconhecido");
    }
    throw new Error("Ocorreu um erro inesperado");
  }
};
