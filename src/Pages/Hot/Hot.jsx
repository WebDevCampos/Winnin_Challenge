import "./Hot.css";
import { useState } from "react";
import Card from "../../Components/Card/Card";
function Hot() {
  function FetchMe() {
    fetch("https://www.reddit.com/r/reactjs/hot.json")
      .then((res) => res.json())
      .then((data) => {
        const mainContent = data.data.children;

        setContent(
          mainContent.reduce((acc, curr) => {
            for (let x = 0; x < 3; x++) {
              x += acc + curr.data.title;
              return x;
            }
          }, "")
        );

        // mainContent.map((item, key) => (
        //   <Card
        //     key={item.data.id}
        //     title={item.data.title}
        //     time={(item.data.created_utc / 3.6e6 / 24).toFixed(0)}
        //     postedby={item.data.author}
        //   />
        // ))
      })
      .catch((e) => console.log(e));
  }
  const [content, setContent] = useState(FetchMe);
  return <main className="hot_mainContent">{content}</main>;
}
export default Hot;
