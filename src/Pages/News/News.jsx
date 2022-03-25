import { useState } from "react";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import fromUnixTime from "date-fns/fromUnixTime";
import Card from "../../Components/Card/Card";
function News() {
  const [content, setContent] = useState(FetchMe);
  function FetchMe() {
    fetch("https://www.reddit.com/r/reactjs/new.json?limit=3")
      .then((res) => res.json())
      .then((data) => {
        const mainContent = data.data.children;

        setContent(
          mainContent.map((item) => (
            <Card
              key={item.data.id}
              title={item.data.title}
              time={formatDistance(
                new Date(fromUnixTime(item.data.created)),
                new Date(),
                {
                  locale: ptBR,
                }
              )}
              postedby={item.data.author}
            />
          ))
        );
      })
      .catch((e) => console.log(e));
  }

  function FetchMeMore() {
    fetch("https://www.reddit.com/r/reactjs/new.json")
      .then((res) => res.json())
      .then((data) => {
        const mainContent = data.data.children;

        setContent(
          mainContent.map((item) => (
            <Card
              key={item.data.id}
              title={item.data.title}
              time={formatDistance(
                new Date(fromUnixTime(item.data.created)),
                new Date(),
                {
                  locale: ptBR,
                }
              )}
              postedby={item.data.author}
            />
          ))
        );
        scroll(0, 500);
      })
      .catch((e) => console.log(e));
  }
  return (
    <>
      <main className="news_mainContent">{content}</main>
      <footer
        className="container d-flex justify-content-center align-items-center mainFooter  bottom-0"
        onClick={() => {
          FetchMeMore();
        }}
      >
        + Ver Mais
      </footer>
    </>
  );
}
export default News;
