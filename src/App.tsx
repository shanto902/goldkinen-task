import NavBar from "./components/layout/NavBar";
import { usePosts } from "./hooks/usePosts";
import Timeline from "./pages/home/Timeline";
import { TPost } from "./types";

function App() {
  const { posts, loading, error } = usePosts();

  console.log(posts, loading, error);
  return (
    <>
      <NavBar />
      <Timeline posts={posts as TPost[]} loading={loading} />
    </>
  );
}

export default App;
