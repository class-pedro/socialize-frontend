import { FaRegComment, FaTrash } from "react-icons/fa";
import { IPostCard } from "./types";
import userImage from "../../assets/user-img.jpg";
import { formatDate } from "../../utils/formatDate";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";
import { CommentCard } from "../CommentCard/CommentCard";
import { usePostCard } from "./hooks/usePostCard";
import { Button } from "../Button/Button";
import { twMerge } from "tailwind-merge";

export const PostCard = ({
  token,
  userId,
  post: {
    authorId,
    id: postId,
    author,
    createdAt,
    content,
    // title,
    comments,
  },
}: IPostCard) => {
  const {
    idPost,
    newComment,
    setNewComment,
    addingComment,
    handleDeletePost,
    handleNewComment,
    setAddingComment,
    handleShowComment,
    handleShowAddCommentInput,
  } = usePostCard();

  return (
    <div className="appCard max-w-[500px] w-[90%] px-6 py-8 flex flex-col items-center r gap-4 rounded-2xl shadow-2xl">
      {userId === authorId && (
        <div className="w-full flex flex-row items-center justify-between">
          <div />
          <Button
            variant="icon-button"
            onClick={async () => await handleDeletePost(token, postId)}
            className="text-red-500 hover:opacity-90"
            icon={<FaTrash size={16} />}
          />
        </div>
      )}
      <div className="w-full flex items-center gap-4">
        <img
          className="max-w-[50px] rounded-[50%] border-2"
          src={userImage}
          alt="user logo"
        />
        <div className="flex flex-col">
          <span className="text-white text-base font-bold">{author.name}</span>
          <span className="text-sm text-gray-300">{formatDate(createdAt)}</span>
        </div>
      </div>

      <section className="w-full">
        <span className="text-white">{content}</span>
      </section>

      <section className={twMerge("w-full flex items-center pt-6 border-t-2 border-appBorder", comments.length > 0 ? "justify-between" : "justify-end")}>
        {comments.length > 0 && (
          <Button
            variant="icon-button"
            icon={<FaRegComment size={24} />}
            onClick={() => handleShowComment(postId)}
          >
            {Number(comments.length)}
          </Button>
        )}
        <Button
          variant="icon-button"
          icon={<FiPlusCircle size={24} />}
          onClick={() => handleShowAddCommentInput(postId)}
        >
          {addingComment ? "Cancelar" : "Novo comentário"}
        </Button>
      </section>

      {addingComment && postId === idPost && (
        <section className="w-full flex items-center gap-2 mt-1">
          <input
            type="text"
            className="bg-transparent w-full text-white h-8 border-2 border-appBorder rounded-xl outline-none px-4 focus:border-blue-500"
            placeholder="Digite seu comentário"
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
          <Button
            variant="default-button"
            onClick={async () =>
              await handleNewComment(token, {
                authorId: userId,
                content: newComment,
                postId,
              })
            }
            buttonClassName="bg-blue-500 p-2 rounded-[50%] text-white hover:opacity-90"
          >
            <IoMdSend size={16} />
          </Button>
        </section>
      )}

      {postId === idPost && comments.length > 0 && (
        <section className="w-full max-h-[300px] flex flex-col items-center gap-2 mt-2 border-s-2 ps-2 pe-1 overflow-y-auto custom-scroll">
          {comments.map(({ id: commentId, content, author: { name } }) => (
            <CommentCard
              key={commentId}
              userImage={userImage}
              name={name}
              content={content}
            />
          ))}
        </section>
      )}
      {postId === idPost && comments.length > 0 && (
        <Button
          variant="default-button"
          buttonClassName="text-xs text-blue-500 hover:underline"
          onClick={() => {
            handleShowComment("");
            setNewComment("");
            setAddingComment(false);
          }}
        >
          Esconder comentários
        </Button>
      )}
    </div>
  );
};
