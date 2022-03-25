import Header from "./Components/Header/Header";
import TopNavigation from "./Components/TopNavigation/TopNavigation";
import Footer from "./Components/Footer/Footer";
import Hot from "./Pages/Hot/Hot";
import { Button } from "./StyledComponents/Style";

import "./App.css";

function App() {
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
