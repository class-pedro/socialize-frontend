import { Post } from "../../../types/postTypes";

export interface IPostCard {
  userId: string;
  post: Post;
  token: string
}