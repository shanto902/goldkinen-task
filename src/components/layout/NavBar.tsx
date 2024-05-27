import PaddingContainer from "./PaddingContainer";

const NavBar = () => {
  return (
    <nav className="sticky mb-5 bg-base-100 drop-shadow-md">
      <PaddingContainer className="navbar">
        {" "}
        <div className="flex-1">
          <a className="text-xl btn btn-ghost">Timeline</a>
        </div>
        <div className="flex-none">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <details>
                <summary>Sort By</summary>
                <ul className="p-2 rounded-t-none bg-base-100">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
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
