import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import fromUnixTime from "date-fns/fromUnixTime";

const TopNavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
 
   
  }
`;
const Button = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #a7b0be;
  color: #fff;
  width: 202px;
  height: 48px;
  margin: 0px 10px;
  border-radius: 8px;
  font: normal 600 25px/25px Mulish, sans-serif;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100%;
    font: normal 600 20px/25px Mulish, sans-serif;
  }
  @media (max-width: 500px) {
    width: 100%;
    font: normal 600 13px/25px Mulish, sans-serif;
  }
`;

function App() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState("hot");

  useEffect(() => {
    fetch(`https://www.reddit.com/r/reactjs.json?limit=1`).then((res) =>
      res.json().then((data) => {
        const mainContent = data.data.children;

        setContent(mainContent);

        console.log(data);
      })
    );
  }, []);
  function FetchMe(categorie, limit, x, y) {
    fetch(
      `https://www.reddit.com/r/reactjs/${categorie}.json?limit=${limit}`
    ).then((res) =>
      res.json().then((data) => {
        const mainContent = data.data.children;

        setPage(categorie);
        setContent(mainContent);
        console.log(categorie);
        console.log(data);
        scrollBy(x, y);
      })
    );
  }
  function fetchMore() {
    let bringMorePosts = content.length + 10;
    let scrollto = { position_x: 0, position_y: 500 };
    page == "hot"
      ? FetchMe("hot", bringMorePosts, scrollto.position_x, scrollto.position_y)
      : page == "new"
      ? FetchMe("new", bringMorePosts, scrollto.position_x, scrollto.position_y)
      : FetchMe(
          "top",
          bringMorePosts,
          scrollto.position_x,
          scrollto.position_y
        );
  }
  return (
    <>
      <Header />

      <TopNavigationContainer className="my-5">
        {page == "hot" ? (
          <Button
            style={{ backgroundColor: "var(--mainBackground)" }}
            onClick={() => {
              FetchMe("hot", 1);

              console.log(page);
            }}
          >
            Hot
          </Button>
        ) : (
          <Button
            className="topBtn"
            onClick={() => {
              FetchMe("hot", 1);

              console.log(page);
            }}
          >
            Hot
          </Button>
        )}
        {page == "new" ? (
          <Button
            style={{ backgroundColor: "var(--mainBackground)" }}
            className="topBtn"
            onClick={() => {
              FetchMe("new", 3);

              console.log(page);
            }}
          >
            News
          </Button>
        ) : (
          <Button
            className="topBtn"
            onClick={() => {
              FetchMe("new", 3);

              console.log(page);
            }}
          >
            News
          </Button>
        )}
        {page == "top" ? (
          <Button
            style={{ backgroundColor: "var(--mainBackground)" }}
            className="topBtn"
            onClick={() => {
              FetchMe("top", 3);

              console.log(page);
            }}
          >
            Rising
          </Button>
        ) : (
          <Button
            className="topBtn"
            onClick={() => {
              FetchMe("top", 3);

              console.log(page);
            }}
          >
            Rising
          </Button>
        )}
      </TopNavigationContainer>
      {content &&
        content.map((item) => (
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
        ))}
      <Footer evento={() => fetchMore()} />
    </>
  );
}

export default App;
