import Button from "../Button/Button";
import Hot from "../../Pages/Hot/Hot";
import News from "../../Pages/News/News";
import Rising from "../../Pages/Rising/Rising";
import "./TopNavigation.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function TopNavigation() {
  return (
    <Router>
      <div className="d-flex justify-content-around align-items-center p-3">
        <Link to="/" className="linkToHot">
          <Button categorie="Hot" />
        </Link>
        <Link to="news" className="linkToHot">
          <Button categorie="News" />
        </Link>
        <Link to="rising" className="linkToHot">
          <Button categorie="Rising" />
        </Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Hot />} />
        <Route path="/news" element={<News />} />
        <Route path="/rising" element={<Rising />} />
      </Routes>
    </Router>
  );
}
export default TopNavigation;
