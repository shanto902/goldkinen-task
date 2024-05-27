import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const PaddingContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("px-5 mx-auto  max-w-7xl", className)}>
      {children}
    </div>
  );
};

export default PaddingContainer;
