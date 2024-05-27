import axios from "axios";
import { useEffect, useState } from "react";
import { TPost, TUser, TComment } from "../types";

// Define the return type for the hook
interface UsePostsResult {
  posts: TPost[] | null;
  loading: boolean;
  error: string | null;
}

export const usePosts = (): UsePostsResult => {
  const [posts, setPosts] = useState<TPost[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const postsResponse = await axios.get<TPost[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (postsResponse.status === 200) {
          const postsData = postsResponse.data;

          // Fetch user information for each post
          const userIds = [...new Set(postsData.map((post) => post.userId))];
          const userPromises = userIds.map((id) =>
            axios.get<TUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
          );
          const usersResponses = await Promise.all(userPromises);

          const usersMap: Record<number, TUser> = {};
          usersResponses.forEach((response) => {
            if (response.status === 200 && response.data) {
              usersMap[response.data.id] = response.data;
            }
          });

          // Fetch comments for each post
          const commentPromises = postsData.map((post) =>
            axios.get<TComment[]>(
              `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
            )
          );
          const commentsResponses = await Promise.all(commentPromises);

          const commentsMap: Record<number, TComment[]> = {};
          commentsResponses.forEach((response, index) => {
            if (response.status === 200 && response.data) {
              commentsMap[postsData[index].id] = response.data;
            }
          });

          // Map users and comments to posts
          const postsWithUsersAndComments = postsData.map((post) => ({
            ...post,
            user: usersMap[post.userId],
            comments: commentsMap[post.id],
          }));

          setPosts(postsWithUsersAndComments);
        } else {
          setError("Failed to fetch posts data");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);
  console.log(posts);

  return { posts, loading, error };
};
