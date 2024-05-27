import { createContext } from "react";
import PaddingContainer from "./PaddingContainer";
export const SortContext = createContext(false);

const NavBar = ({
  setIsAscending,
}: {
  setIsAscending: (value: boolean) => void;
}) => {
  return (
    <nav className="sticky top-0 z-10 w-full mb-5 bg-base-100 drop-shadow-md">
      <PaddingContainer className="navbar">
        {" "}
        <div className="flex items-center flex-1">
          <img className="size-6" src="/favicon.svg" />
          <a className="text-xl btn btn-ghost">Timeline</a>
        </div>
        <div className="flex-none">
          <ul className="z-20 px-1 menu menu-horizontal">
            <li>
              {/* SORTING BASE ON ASCENDING AND DESCENDING  */}
              <details>
                <summary>Sort By</summary>
                <ul className="p-2 rounded-t-none bg-base-100">
                  <li onClick={() => setIsAscending(false)}>
                    <a>Descending</a>
                  </li>
                  <li onClick={() => setIsAscending(true)}>
                    <a>Ascending</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </PaddingContainer>
      <hr className="bg-black" />
    </nav>
  );
};

export default NavBar;
