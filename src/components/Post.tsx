import classes from "./Post.module.css";

export type PostProps = {
  author: string;
  text: string;
  id?: string;
};

const Post = (props: PostProps) => {
  return (
    <li className={classes.post}>
      <div className={classes.author}>{props.author}</div>
      <div className={classes.text}>{props.text}</div>
    </li>
  );
};

export default Post;
