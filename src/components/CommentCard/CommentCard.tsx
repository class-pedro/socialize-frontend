import { ICommentCard } from "./types";

export const CommentCard = ({ userImage, name, content }: ICommentCard) => {
  return (
    <div className="w-full flex flex-row items-center gap-2 px-2 py-2 border-b-2 border-appBorder">
      <img
        className="max-w-[30px] rounded-[50%] border-2"
        src={userImage}
        alt="user logo"
      />
      <div className="flex flex-col items-start">
        <span className="text-white text-xs font-bold">{name}</span>
        <span className="text-white/90 text-sm">{content}</span>
      </div>
    </div>
  );
};
