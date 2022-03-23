import "./Button.css";
function Button({ categorie }) {
  return (
    <div className="activeCategorie categorieButton  mx-3 mx-md-1">
      {categorie}
    </div>
  );
}
export default Button;
