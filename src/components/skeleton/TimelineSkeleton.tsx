import { BsHourglassSplit } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

const TimelineSkeleton = ({ id }: { id: number }) => {
  return (
    <ul className="w-full timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <BsHourglassSplit />
        </div>
        <div
          className={twMerge(
            "min-w-full mt-3 mb-10 space-y-4 ",
            id % 2 === 0
              ? "timeline-start md:text-end"
              : "timeline-end md:text-start"
          )}
        >
          <div className="w-full h-8 skeleton"></div>

          <div className="w-full h-32 skeleton"></div>
        </div>
        <hr />
      </li>
    </ul>
  );
};

export default TimelineSkeleton;
