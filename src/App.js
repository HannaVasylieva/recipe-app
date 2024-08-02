import "./App.css";
import { useEffect, useState } from "react";
import video from "./food.mp4";
import { MyRecipesComponents } from "./MyRecipesComponent";

function App() {
  const MY_ID = "b3e25307";
  const MY_KEY = "0029fe87b3eed4c3f2707e9745f02b0d";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("")


  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );
      const data = await response.json();
      setMyRecipes(data.hits);
      console.log(data.hits)
    };
    getRecipe();
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>

        <h1>Find a Recipe</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch}>
          <input className="search" onChange={myRecipeSearch} value={mySearch} placeholder="Write down the ingredient..." />
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
        <MyRecipesComponents key={index}
          calories={element.recipe.calories}
          image={element.recipe.image}
          label={element.recipe.label}
          ingredients={element.recipe.ingredientLines}
          link={element.recipe.url}
        />
      ))}

    </div>
  );
}

export default App;
