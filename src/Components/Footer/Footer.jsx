import "./Footer.css";

function Footer() {
  return (
    <footer
      className="d-flex justify-content-center align-items-center mainFooter"
      onClick={() => {
        document.querySelector("main").style.overflow = "visible";
        document.querySelector("main").style.height = "auto";
        scroll(0, 1000);
      }}
    >
      + Ver Mais
    </footer>
  );
}
export default Footer;
