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
    <MainFooter className="container" onClick={evento}>
      + Ver Mais
    </MainFooter>
  );
}
export default Footer;
