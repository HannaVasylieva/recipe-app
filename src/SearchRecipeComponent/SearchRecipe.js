import { useEffect, useState } from "react";
import { MyRecipesComponents } from "./GetRecipes";

export function SearchRecipe() {
  const MY_ID = "b3e25307";
  const MY_KEY = "0029fe87b3eed4c3f2707e9745f02b0d";
  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("");

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        if (data.hits.length === 0) {
          alert('No recipes found for the entered ingredient. Please check your input.');
          setMyRecipes([]);
        } else {
          setMyRecipes(data.hits);
        }
      } catch (err) {
        alert('There was an error fetching the recipes. Please try again.');
        setMyRecipes([]);
      }
    };
    if (wordSubmitted) {
      getRecipe();
    }
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  };
  return (
    <>
      <div className="container">
        <h1>Find a Recipe</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch}>
          <input
            className="search"
            onChange={myRecipeSearch}
            value={mySearch}
            placeholder="Write down the ingredient..."
          />
        </form>
      </div>

      <div className="container">
        <button onClick={finalSearch}>
          <img
            src="https://icons.iconarchive.com/icons/iconarchive/fruit-illustration/512/Avocado-Illustration-icon.png"
            alt="icon"
            width="50px"
          />
        </button>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipesComponents
          key={index}
          calories={element.recipe.calories}
          image={element.recipe.image}
          label={element.recipe.label}
          ingredients={element.recipe.ingredientLines}
          link={element.recipe.url}
        />
      ))}
    </>
  );
}
