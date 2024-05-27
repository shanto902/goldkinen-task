import { twMerge } from "tailwind-merge";
import { TPost } from "../../types";
import { FaMessage, FaUserPen } from "react-icons/fa6";
import CommentCard from "./CommentCard";
import { FaDotCircle } from "react-icons/fa";

const TimelineCard = ({ post }: { post: TPost; loading: boolean }) => {
  return (
    <li>
      <div className="timeline-middle">
        <FaDotCircle />
      </div>
      <div
        className={twMerge(
          "mb-5 md:mx-5 space-y-2",
          post.id % 2 === 0
            ? "timeline-end md:text-start"
            : "timeline-start md:text-end"
        )}
      >
        <div className="text-xl font-bold">{post.title}</div>
        <p>{post.body}</p>
        <div
          className={twMerge(
            "flex items-center gap-2 font-mono italic",
            post.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          )}
        >
          <FaUserPen /> {post.user.name}
        </div>
        <p></p>

        <div className="collapse collapse-arrow">
          <input type="checkbox" name="my-accordion" />
          <div className="-mt-2 text-xl font-medium collapse-title">
            <div
              className={twMerge(
                "flex items-center gap-2 text-sm mt-1",
                post.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <FaMessage /> Comments {post.comments.length}
            </div>
          </div>
          <div className="collapse-content">
            {post.comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
      <hr className="bg-base-300" />
    </li>
  );
};

export default TimelineCard;
