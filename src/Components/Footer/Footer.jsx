import "./Footer.css";

function Footer() {
  return (
    <footer
      className="container d-flex justify-content-center align-items-center mainFooter  bottom-0"
      onClick={() => {
        document.querySelector("main").style.overflow = "visible";
        document.querySelector("main").style.height = "auto";
        scroll(0, 500);
      }}
    >
      + Ver Mais
    </footer>
  );
}
export default Footer;
