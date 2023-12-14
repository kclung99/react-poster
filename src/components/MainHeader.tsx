import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";

type MainHeaderProps = {
  onCreatePost: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        react poster
      </h1>
      <p>
        <button className={classes.button} onClick={props.onCreatePost}>
          <MdPostAdd size={18} />
          new post
        </button>
      </p>
    </header>
  );
};

export default MainHeader;
