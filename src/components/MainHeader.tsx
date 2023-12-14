import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        react poster
      </h1>
      <p>
        <Link className={classes.button} to="/create-post">
          <MdPostAdd size={18} />
          new post
        </Link>
      </p>
    </header>
  );
};

export default MainHeader;
