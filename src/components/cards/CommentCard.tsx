import { twMerge } from "tailwind-merge";
import { TComment } from "../../types";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const CommentCard = ({ comment }: { comment: TComment }) => {
  return (
    <div
      key={comment.id}
      className={twMerge(
        "chat ",
        comment.id % 2 === 0 ? "chat-start" : "chat-end"
      )}
    >
      <div className="p-4 bg-base-200">
        <div className="font-bold ">
          <h2 className="inline-flex items-center gap-2">
            <FaUserCircle /> {comment.name}
          </h2>
          <br />
          <div className="inline-flex items-center gap-2">
            <MdEmail /> {comment.email}
          </div>
        </div>
        <div>{comment.body}</div>
      </div>
    </div>
  );
};

export default CommentCard;
