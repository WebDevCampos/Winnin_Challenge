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
<<<<<<< HEAD
    <footer
      className="container d-flex justify-content-center align-items-center mainFooter  bottom-0"
      onClick={() => {
        document.querySelector("main").style.overflow = "visible";
        document.querySelector("main").style.height = "auto";
        scroll(0, 500);
      }}
    >
=======
    <MainFooter className="container" onClick={evento}>
>>>>>>> 4452f1b2f1fd5b6b1d6e0abab134218f618b8bd6
      + Ver Mais
    </MainFooter>
  );
}
export default Footer;
