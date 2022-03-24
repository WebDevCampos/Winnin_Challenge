import "./Card.css";
function Card({ title, postedby, time }) {
  return (
    <div className="container d-flex py-1 border-top my-5">
      <img
        src="https://via.placeholder.com/77x77"
        className="me-2"
        style={{ width: "77px", height: "77px" }}
      />
      <div>
        <h3 className="post_title">{title}</h3>
        <p className="post_info">
          enviado há <span className="post_time">{time}</span> por{" "}
          <span className="post_author">{postedby}</span>
        </p>
        <p className="post_detail">dominio.io</p>
      </div>
    </div>
  );
}
export default Card;
