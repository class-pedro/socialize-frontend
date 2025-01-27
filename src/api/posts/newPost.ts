import axios from "axios";
import { api } from "../../constants/api";
import { NewPost } from "../../types/postTypes";

interface NewPostInterface {
  token: string;
  newPost: NewPost;
}

export const newPost = async ({ newPost, token }: NewPostInterface) => {
  try {
    const { data } = await api.post("/new-post", newPost, {
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
