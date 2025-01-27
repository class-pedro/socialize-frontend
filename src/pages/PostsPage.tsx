import { PostCard } from "../components/PostCard/PostCard";
import { FaPlus } from "react-icons/fa";
import { Loader } from "../components/Loader/Loader";
import { useListPostsPage } from "../hooks/PostsPage/useListPostsPage";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import userImage from "../assets/user-img.jpg";
import { useNewPost } from "../hooks/PostsPage/useNewPost";
import { Button } from "../components/Button/Button";

function PostsPage() {
  const { user, token } = useAuth();
  const { posts, postsError, isLoadingPosts } = useListPostsPage();
  const {
    isWritingPost,
    setIsWritingPost,
    newPostContent,
    setNewPostContent,
    createPostMutate,
    loadingCreatePost,
  } = useNewPost();

  const handleCreatePost = async () => {
    if (!newPostContent) {
      return;
    }
    await createPostMutate({
      token: token as string,
      newPost: {
        authorId: user?.id as string,
        title: "default",
        content: newPostContent,
      },
    });
    setNewPostContent("");
    setIsWritingPost(false);
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center gap-4 overflow-hidden">
      {/* header */}
      <section className="fixed top-0 w-full flex items-center justify-center py-4 backdrop-blur-sm bg-gradient-to-b from-black/50 to-transparent z-50">
        <div className="max-w-[500px] w-[90%] py-2 flex flex-row items-center justify-between gap-4 border-b-2 border-appBorder shadow-2xl">
          <span className="text-white">{user?.username}</span>
          <Button
            variant="icon-button"
            icon={<FaPlus size={18} />}
            onClick={() => setIsWritingPost(true)}
          >
            Novo Post
          </Button>
        </div>
      </section>
      {/* header */}

      {/* newPostCard */}
      {isWritingPost && (
        <section className="appCard w-[90%] max-w-[500px] flex flex-col items-center gap-4 mt-20 px-6 py-8">
          <div className="w-full flex flex-row items-start gap-4">
            <img
              src={userImage}
              alt="Imagem do usuário"
              className="max-w-[40px] rounded-full"
            />
            <textarea
              maxLength={280}
              value={newPostContent}
              placeholder="Digite sua nova postagem"
              className="bg-transparent w-full min-h-12 text-white h-8 border-2 border-appBorder rounded-xl outline-none py-2 px-4 focus:border-blue-500 resize-none overflow-hidden"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
              onChange={(e) => {
                setNewPostContent(e.target.value);
              }}
            />
          </div>
          <div className="w-full flex flex-row items-center justify-between gap-2">
            <span className="text-gray-300 text-sm">{`${newPostContent.length}/280`}</span>
            <div className="w-fit flex flex-row items-center justify-end gap-2">
              <Button
                variant="default-button"
                buttonClassName="text-gray-300 border-2 border-gray-300"
                onClick={() => setIsWritingPost(false)}
              >
                Cancelar
              </Button>
              {!loadingCreatePost ? (
                <Button
                  variant="default-button"
                  buttonClassName="bg-blue-500 text-white"
                  onClick={handleCreatePost}
                >
                  Postar
                </Button>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </section>
      )}
      {/* newPostCard */}

      <section className="w-[90%] h-[85vh] flex flex-col items-center gap-4 pt-4 overflow-y-auto custom-scroll">
        {posts &&
          !isLoadingPosts &&
          !postsError &&
          posts
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((post) => (
              <PostCard
                key={post.id}
                post={post}
                token={token as string}
                userId={user?.id as string}
              />
            ))}
        {isLoadingPosts && <Loader />}

        {postsError && !isLoadingPosts && (
          <div className="w-full max-w-[300px] flex flex-col items-center mt-12">
            <span className="text-[130px] font-bold opacity-30 animate-pulse">
              Ops!
            </span>
            <span className="text-xl text-center font-semibold opacity-30">
              Não foi possível carregar as postagens, reinicie a página e tente
              novamente.
            </span>
          </div>
        )}
      </section>
    </main>
  );
}

export default PostsPage;
