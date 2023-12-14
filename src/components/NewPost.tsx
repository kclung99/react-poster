import React, { useState } from "react";
import classes from "./NewPost.module.css";
import { PostProps } from "./Post";

type NewPostProps = {
  onCancel: () => void;
  onAddPost: (post: PostProps) => void;
};

const NewPost = (props: NewPostProps) => {
  const [authorName, setAuthorName] = useState("");
  const [textBody, setTextBody] = useState("");

  const onChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthorName(event.target.value);
  };

  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextBody(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onAddPost({ author: authorName, text: textBody });
    props.onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="author">author</label>
        <input id="author" type="text" onChange={onChangeAuthor}></input>
      </p>
      <p>
        <label htmlFor="text">text</label>
        <textarea id="text" onChange={onChangeText}></textarea>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          cancel
        </button>
        <button>submit</button>
      </p>
    </form>
  );
};

export default NewPost;
