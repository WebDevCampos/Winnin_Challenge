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
          mainContent.map((item) => (
            <Card
              key={item.data.id}
              title={item.data.title}
              time={(item.data.created_utc / 8.64e7).toFixed(0)}
              postedby={item.data.author}
            />
          ))
        );
        console.log(
          mainContent[0].format(
            new Date(fromUnixTime(article.data.created)),
            "'Dia' dd 'de' MMMM 'de' yyyy', às ' HH:mm'h'"
          ),
          mainContent[1].data.created_utc
        );
      })
      .catch((e) => console.log(e));
  }
  const [content, setContent] = useState(FetchMe);
  return <main className="hot_mainContent">{content}</main>;
}
export default Hot;
