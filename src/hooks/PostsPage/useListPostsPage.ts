import { useQuery } from "@tanstack/react-query";
import { listPosts } from "../../api/posts/listPosts";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

export function useListPostsPage() {
  const { token } = useAuth();

  const {
    data: posts,
    isLoading: isLoadingPosts,
    error: postsError,
  } = useQuery({
    queryKey: ["list-posts"],
    queryFn: () => listPosts(token as string),
    enabled: !!token,
  });

  return {
    posts,
    postsError,
    isLoadingPosts,
  };
}
