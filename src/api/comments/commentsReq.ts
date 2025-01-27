import { api } from "../../constants/api";
import { NewComment } from "../../types/commentTypes";

export const addNewComment = async (token: string, newComment: NewComment) => {
  try {
    const { data } = await api.post("/new-comment", newComment, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
