import "./Button.css";
function Button({ categorie }) {
  return (
    <div className="activeCategorie categorieButton  mx-1 mx-md-3">
      {categorie}
    </div>
  );
}
export default Button;
