import Header from "./Components/Header/Header";
import TopNavigation from "./Components/TopNavigation/TopNavigation";
import Footer from "./Components/Footer/Footer";
import Hot from "./Pages/Hot/Hot";
import { Button } from "./StyledComponents/Style";

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
      {/* <Button>OI</Button>
      <Hot /> */}
      <TopNavigation />
    </div>
  );
}

export default App;
