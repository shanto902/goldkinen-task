import { useState } from "react";
import NavBar, { SortContext } from "./components/layout/NavBar";
import { usePosts } from "./hooks/usePosts";
import Timeline from "./pages/home/Timeline";
import { TPost } from "./types";

function App() {
  const { posts, loading, error } = usePosts();
  const [isAscending, setIsAscending] = useState<boolean>(false);

  return (
    <>
      <SortContext.Provider value={isAscending}>
        <NavBar setIsAscending={setIsAscending} />
        <Timeline posts={posts as TPost[]} loading={loading} error={error} />
      </SortContext.Provider>
    </>
  );
}

export default App;
