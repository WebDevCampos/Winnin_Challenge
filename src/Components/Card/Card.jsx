import styled from "styled-components";

const PostInfo = styled.p`
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;

  color: #4c5667;
  @media (max-width: 780px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
const PostTime = styled.span`
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;

  color: #4c5667;
  @media (max-width: 780px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
const PostTitle = styled.h3`
  @media (max-width: 780px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const PostAuthor = styled.span`
  color: #6324c6;
  @media (max-width: 780px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
const PostDetail = styled.p`
  font: normal 700 16px/20px Mulish, sans-serif;

  color: #000000;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
function Card({ title, postedby, time }) {
  return (
    <div className="container d-flex py-1 border-top my-5">
      <img
        src="https://via.placeholder.com/77x77"
        className="me-2"
        style={{ width: "77px", height: "77px" }}
      />
      <div>
        <PostTitle>{title}</PostTitle>
        <PostInfo>
          enviado há <PostTime>{time}</PostTime> por{" "}
          <PostAuthor>{postedby}</PostAuthor>
        </PostInfo>
        <PostDetail>dominio.io</PostDetail>
      </div>
    </div>
  );
}
export default Card;
