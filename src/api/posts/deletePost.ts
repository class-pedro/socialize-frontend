import { api } from "../../constants/api";
import axios from "axios";

export const deletePosts = async (token: string, postId: string) => {
  try {
    await api.delete(`/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
        if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Erro desconhecido");
    }
    throw new Error("Ocorreu um erro inesperado");
  }
};
