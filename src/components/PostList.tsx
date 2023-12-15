import Post from "./Post";
import classes from "./PostList.module.css";
import { PostProps } from "./Post";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData() as PostProps[];

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              author={post.author}
              text={post.text}
              id={post.id}
              key={post.text}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center" }}>no posts... that's quite sad</div>
      )}
    </>
  );
};

export default PostList;
