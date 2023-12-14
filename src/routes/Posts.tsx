import { PostProps } from "../components/Post";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
};

export default Posts;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");
  const fetchedPosts = (await response.json()) as { posts: PostProps[] };
  return fetchedPosts.posts;
};
