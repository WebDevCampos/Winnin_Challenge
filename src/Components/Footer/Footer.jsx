import styled from "styled-components";

const MainFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--mainBackground);
  color: #fff;
  font-family: Mulish;
  height: 48px;
  border-radius: 8px;
`;
function Footer({ evento }) {
  return (

    <footer
      className="container d-flex justify-content-center align-items-center mainFooter  bottom-0"
      onClick={() => {
        document.querySelector("main").style.overflow = "visible";
        document.querySelector("main").style.height = "auto";
        scroll(0, 500);
      }}
    > </footer>
  );
}
export default Footer;
