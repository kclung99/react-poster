import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalhandler = () => {
    setModalIsVisible(true);
  };

  const hideModalhandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalhandler} />
      <main>
        <PostList modalIsVisible={modalIsVisible} onCancel={hideModalhandler} />
      </main>
    </>
  );
}

export default App;
