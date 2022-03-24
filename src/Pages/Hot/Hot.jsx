import "./Hot.css";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import fromUnixTime from "date-fns/fromUnixTime";

function Hot() {
  // function FetchMe() {
  //   fetch("https://www.reddit.com/r/reactjs/hot.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const mainContent = data.data.children;

  //       setContent(
  //         mainContent.map((item) => (
  //           <Card
  //             key={item.data.id}
  //             title={item.data.title}
  //             time={formatDistance(
  //               new Date(fromUnixTime(item.data.created)),
  //               new Date(),
  //               {
  //                 locale: ptBR,
  //               }
  //             )}
  //             postedby={item.data.author}
  //           />
  //         ))
  //       );
  //     })
  //     .catch((e) => console.log(e));
  // }
  useEffect(() => {});

  return <main className="hot_mainContent"></main>;
  // const [content, setContent] = useState(FetchMe);
  // return (
  //   <>
  //     <main className="hot_mainContent" name="Hot">
  //       {content}
  //     </main>
  //   </>
  // );
}
export default Hot;
