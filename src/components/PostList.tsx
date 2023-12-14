import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";
import { PostProps } from "./Post";
import { useState, useEffect } from "react";

type PostListProps = {
  modalIsVisible: boolean;
  onCancel: () => void;
};

const PostList = (props: PostListProps) => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isFetching, setisFetching] = useState(false);

  useEffect(() => {
    // fetch posts from backend
    (async () => {
      setisFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const fetchedPosts = (await response.json()) as { posts: PostProps[] };
      setPosts(fetchedPosts.posts);
      setisFetching(false);
    })();
  }, []);

  const addPostHandler = (post: PostProps) => {
    fetch("http://localhost:8080/posts", {
      method: "post",
      mode: "cors",
      credentials: "omit",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <>
      {props.modalIsVisible && (
        <Modal onClickBackdrop={props.onCancel}>
          <NewPost onCancel={props.onCancel} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post author={post.author} text={post.text} key={post.text} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center" }}>no posts... that's quite sad</div>
      )}
      {isFetching && <div style={{ textAlign: "center" }}>loading...</div>}
    </>
  );
};

export default PostList;
