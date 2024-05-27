import { useContext } from "react";
import TimelineCard from "../../components/cards/TimelineCard";
import PaddingContainer from "../../components/layout/PaddingContainer";
import TimelineSkeleton from "../../components/skeleton/TimelineSkeleton";
import { TPost } from "../../types";
import { SortContext } from "../../components/layout/NavBar";

const Timeline = ({
  posts,
  loading,
  error,
}: {
  posts: TPost[];
  loading: boolean;
  error: string | null;
}) => {
  const isAscending = useContext(SortContext);
  const sortedPosts = [...posts].sort((a, b) =>
    isAscending ? a.id - b.id : b.id - a.id
  );
  return (
    <PaddingContainer>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {!error ? (
          !loading ? (
            sortedPosts?.map((post) => (
              <TimelineCard key={post.id} post={post} loading={loading} />
            ))
          ) : (
            Array.from({ length: 10 }).map((_, index) => (
              <TimelineSkeleton id={index} key={index} />
            ))
          )
        ) : (
          <div className="flex items-center justify-center h-[60vh] font-bol text-2xl ">
            {error}
          </div>
        )}
      </ul>
    </PaddingContainer>
  );
};

export default Timeline;
