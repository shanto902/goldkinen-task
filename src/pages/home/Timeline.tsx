import TimelineCard from "../../components/cards/TimelineCard";
import PaddingContainer from "../../components/layout/PaddingContainer";
import TimelineSkeleton from "../../components/skeleton/TimelineSkeleton";
import { TPost } from "../../types";

const Timeline = ({ posts, loading }: { posts: TPost[]; loading: boolean }) => {
  return (
    <PaddingContainer>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {!loading ? (
          posts?.map((post) => (
            <TimelineCard key={post.id} post={post} loading={loading} />
          ))
        ) : (
          <TimelineSkeleton />
        )}
      </ul>
    </PaddingContainer>
  );
};

export default Timeline;
