import { twMerge } from "tailwind-merge";
import { TPost } from "../../types";
import { FaMessage, FaUserPen } from "react-icons/fa6";
import { RiTimelineView } from "react-icons/ri";
import CommentCard from "./CommentCard";

const TimelineCard = ({ post }: { post: TPost; loading: boolean }) => {
  return (
    <li>
      <div className="timeline-middle">
        <RiTimelineView />
      </div>
      <div
        className={twMerge(
          "mb-10",
          post.id % 2 === 0
            ? "timeline-end md:text-start"
            : "timeline-start md:text-end"
        )}
      >
        <div className="text-lg font-black">{post.title}</div>
        <p>{post.body}</p>
        <div
          className={twMerge(
            "flex items-center gap-2 font-mono italic",
            post.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
          )}
        >
          <FaUserPen /> {post.user.name}
        </div>
        <p></p>

        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-1" />
          <div className="text-xl font-medium collapse-title">
            <div
              className={twMerge(
                "flex items-center gap-2 text-sm",
                post.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
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
      <hr />
    </li>
  );
};

export default TimelineCard;
