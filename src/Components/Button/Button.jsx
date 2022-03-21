import "./Button.css";
function Button({ categorie }) {
  return (
    <div className="activeCategorie categorieButton  mx-3">{categorie}</div>
  );
}
export default Button;
