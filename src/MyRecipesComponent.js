export function MyRecipesComponents({
  image,
  calories,
  label,
  ingredients,
  link,
}) {
  return (
    <div>
      <div className="container">
        <h2>{label}</h2>
      </div>

      <div className="container">
        <img src={image} alt="foodpicture" />
      </div>

      <ul className="conteiner list">
        For that recipe you need:
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <img
              src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png "
              alt="checkIcon"
              className="icon"
            />
            {ingredient}
          </li>
        ))}
      </ul>

      <div className="info">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          View Full Recipe
        </a>

        <p className="calories">{calories.toFixed()} calories</p>
      </div>

      <hr />
    </div>
  );
}
