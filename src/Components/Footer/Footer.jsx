import "./Footer.css";

function Footer() {
  return (
    <footer
      className="container d-flex justify-content-center align-items-center mainFooter  bottom-0"
      onClick={() => {
        fetch("https://www.reddit.com/r/reactjs.json")
          .then((res) => res.json())
          .then((data) => setContent(data.data.children))
          .catch((e) => console.log(e));
      }}
    >
      + Ver Mais
    </footer>
  );
}
export default Footer;
