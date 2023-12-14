import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";
import { PostProps } from "../components/Post";

const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="author">author</label>
          <input id="author" type="text" name="author"></input>
        </p>
        <p>
          <label htmlFor="text">text</label>
          <textarea id="text" name="text"></textarea>
        </p>
        <p className={classes.actions}>
          <Link type="button" to="..">
            cancel
          </Link>
          <button>submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData) as PostProps;

  await fetch("http://localhost:8080/posts", {
    method: "post",
    mode: "cors",
    credentials: "omit",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
};
