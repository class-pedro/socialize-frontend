import axios from "axios";
import { api } from "../../constants/api";
import { Post } from "../../types/postTypes";

export const listPosts = async (token: string): Promise<Post[]> => {
  try {
    const { data } = await api.get("/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Erro desconhecido");
    }
    throw new Error("Ocorreu um erro inesperado");
  }
};
