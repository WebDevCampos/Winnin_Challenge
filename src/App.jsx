import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [content, setContent] = useState([]);
  function FetchData() {
   

    fetch(`https://www.reddit.com/r/reactjs/hot.json`)
      .then((res) => res.json())
      .then((data) => {
        setContent(`${data.data.children[0].data.title} ${obj.titles}`);
      })
      .catch((e) => console.log(e));
  }
  return (
    <div className="App">
      <Header />
      <button
        onClick={(data) => {
          FetchData();
          console.log(data);
        }}
      >
        Hot
      </button>

      <p>{content}</p>
    </div>
  );
}

export default App;
