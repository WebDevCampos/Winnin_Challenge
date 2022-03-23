import Button from "../Button/Button";
import Hot from "../../Pages/Hot/Hot";
import News from "../../Pages/News/News";
import Rising from "../../Pages/Rising/Rising";
import "./TopNavigation.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function TopNavigation() {
  return (
    <Router>
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center p-3">
          <Link
            to="/"
            className="linkToPage"
            onClick={(e) => {
              console.log(e.target);
            }}
          >
            <Button categorie="Hot" />
          </Link>
          <Link to="news" className="linkToPage">
            <Button categorie="News" />
          </Link>
          <Link to="rising" className="linkToPage">
            <Button categorie="Rising" />
          </Link>
        </div>
      </div>
      <Routes>
        <div className="container  d-flex justify-content-center align-items-center p-3">
          <Route exact path="/" element={<Hot />} />
          <Route path="/news" element={<News />} />
          <Route path="/rising" element={<Rising />} />
        </div>
      </Routes>
    </Router>
  );
}
export default TopNavigation;
