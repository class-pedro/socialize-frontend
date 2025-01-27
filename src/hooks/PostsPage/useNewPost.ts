import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { newPost } from "../../api/posts/newPost";

export function useNewPost() {
  const queryClient = useQueryClient();

  const [isWritingPost, setIsWritingPost] = useState<boolean>(false);
  const [newPostContent, setNewPostContent] = useState<string>("");

  const { mutateAsync: createPostMutate, isPending: loadingCreatePost } =
    useMutation({
      mutationFn: newPost,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["list-posts"],
        });
      },
    });

  return {
    newPostContent,
    setNewPostContent,
    isWritingPost,
    setIsWritingPost,
    createPostMutate,
    loadingCreatePost
  };
}
