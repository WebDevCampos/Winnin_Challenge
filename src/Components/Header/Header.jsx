import styled from "styled-components";

const MainHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 91px;
  background: var(--mainBackground);
  color: #fff;
  font: normal 400 36px/45px Mulish, sans-serif;
  text-align: center;
  span {
    color: #faa403;
  }
`;

function Header() {
  return (
    <MainHeader>
      REACT<span>JS</span>
    </MainHeader>
  );
}

export default Header;
