import "./Rising.css";
import { useState } from "react";
import Card from "../../Components/Card/Card";
function Rising() {
  function FetchMe() {
    fetch("https://www.reddit.com/r/reactjs/top.json")
      .then((res) => res.json())
      .then((data) => {
        const mainContent = data.data.children;
        setContent(
          mainContent.map((item) => (
            <Card
              title={item.data.title}
              time={(item.data.created_utc / 1000 / 60 / 60 / 24).toFixed(0)}
              postedby={item.data.author}
            />
          ))
        );
      })
      .catch((e) => console.log(e));
  }
  const [content, setContent] = useState(FetchMe);
  return <main className="rising_mainContent">{content}</main>;
}
export default Rising;
