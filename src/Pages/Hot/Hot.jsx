// import { useState, useEffect } from "react";
// function Hot() {
//   const [page, setPage] = useState("Hot");
//   const [article, setArticle] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [dist, setDist] = useState(null);

//   useEffect(() => {
//     fetch("https://www.reddit.com/r/reactjs.json?limit=1").then((res) => {
//       if (res.status !== 200) {
//         console.log("ERROR");
//         return;
//       }
//       res.json().then((data) => {
//         if (data != null) {
//           console.log(data);
//           setDist(data.data.dist);
//           console.log(dist);
//         }
//       });
//     });
//   }, []);

//   return <h1>Oi</h1>;
// }
// export default Hot;

import { useState } from "react";
import Card from "../../Components/Card/Card";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import fromUnixTime from "date-fns/fromUnixTime";

function Hot() {
  const [content, setContent] = useState(FetchMe);

  function FetchMe(limit = 1) {
    fetch(`https://www.reddit.com/r/reactjs/hot.json?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        const mainContent = data.data.children;
        console.log(mainContent);
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
    fetch(
      `https://www.reddit.com/r/reactjs/hot.json?limit=${(function fun() {
        for (let x = 0; x <= limit; x++) {
          return (x += limit);
        }
        //Do your loop here
        // Return the result as a string
      })()}`
    )
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
  return (
    <>
      <main className="hot_mainContent">{content}</main>
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
export default Hot;
