import React, { useState } from "react";
import { Header } from "./Header";
import Feed from "./Feed";
import ComposeTweetModal from "./ComposeTweetModal";

const App = () => {
  const [showModal, setModal] = useState(false);
  return (
    <div className="main">
      {/* Publish a tweet*/}
      <ComposeTweetModal showModal={showModal} setModal={setModal} />
      {/* Profile pic */}
      <Header setModal={setModal} />
      {/* Feed */}
      <Feed />
    </div>
  );
};

export default App;
