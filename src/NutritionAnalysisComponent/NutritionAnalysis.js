import { useEffect, useState } from "react";
import { LoaderPage } from "../Loader/LoaderPage";
import { GetNutrition } from "./GetNutrition";

export function NutritionAnalysis() {
  const [mySearch, setMySearch] = useState();
  const [wordSubmitted, setWordSubmitted] = useState("");
  const [myNutrition, setMyNutrition] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async (ingr) => {
    setLoading(true);

    const response = await fetch('https://api.edamam.com/api/nutrition-details?app_id=21898bc7&app_key=53ae8b23b3f04b97027255a51f453901', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingr: ingr })
    })

    if(response.ok) {
      setLoading(false);
      const data = await response.json();
      setMyNutrition(data);
    } else {
      setLoading(false);
      alert('Ingredients entered incorrectly. Please use commas between ingredients, include quantities, and check for mistakes.');
    }
  }

  const myRecipeSearch = e => {
    setMySearch(e.target.value);
  }

  const finalSearch = e => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  useEffect(() => {
    if (wordSubmitted !== '') {
      let ingr = wordSubmitted.split(/[,,;,\n,\r]/);
      fetchData(ingr);
    }
  }, [wordSubmitted])


  return (
    <div className="container">
      {loading && <LoaderPage />}

      <h1>Nutrition Analysis</h1>
      <form onSubmit={finalSearch} className="container">
        <input
          className="search"
          placeholder="2 eggs, 1 cup flour..."
          onChange={myRecipeSearch}
        />
        <button type="submit">Calculate</button>
      </form>
      <div>
        {
          myNutrition && <p>{myNutrition.calories} kcal</p>
        }
        {
          myNutrition && Object.values(myNutrition.totalNutrients)
            .map(({ label, quantity, unit }) =>
              <GetNutrition
                key={label}
                label={label}
                quantity={quantity}
                unit={unit}
              />
            )
        }
      </div>
    </div>
  );
}
