import { useState } from "react";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import fromUnixTime from "date-fns/fromUnixTime";
import Card from "../../Components/Card/Card";
function Rising() {
  const [content, setContent] = useState(FetchMe);
  function FetchMe(limit = 3) {
    fetch(`https://www.reddit.com/r/reactjs/top.json?limit=${limit}`)
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

  function FetchMeMore(limit) {
    fetch(`https://www.reddit.com/r/reactjs/top.json?limit=${limit}`)
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
      <main className="rising_mainContent">{content}</main>
      <footer
        className="container d-flex justify-content-center align-items-center mainFooter  bottom-0"
        onClick={() => {
          FetchMeMore(100);
        }}
      >
        + Ver Mais
      </footer>
    </>
  );
}
export default Rising;
