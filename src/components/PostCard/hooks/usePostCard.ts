import { useState } from "react";
import { NewComment } from "../../../types/commentTypes";
import { deletePosts } from "../../../api/posts/deletePost";
import { addNewComment } from "../../../api/comments/commentsReq";

export function usePostCard() {
  const [idPost, setIdPost] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");
  const [addingComment, setAddingComment] = useState(false);

  const handleDeletePost = async (token: string, id: string) => {
    await deletePosts(token, id);
  };

  const handleShowComment = (postId: string) => {
    setIdPost(postId);
  };

  const handleShowAddCommentInput = (postId: string) => {
    if (addingComment && idPost) {
      setAddingComment(false);
      setIdPost("");
      setNewComment("");

      return;
    }

    setIdPost(postId);
    setAddingComment(true);
  };

  const handleNewComment = async (
    token: string,
    newCommentData: NewComment
  ) => {
    await addNewComment(token, newCommentData);
    setNewComment("");
  };

  return {
    idPost,
    newComment,
    setNewComment,
    addingComment,
    handleDeletePost,
    handleNewComment,
    setAddingComment,
    handleShowComment,
    handleShowAddCommentInput,
  };
}
