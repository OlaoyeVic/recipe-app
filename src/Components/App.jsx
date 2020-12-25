import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const APPID = "14e44f82";
  const APIKEY = "fe99ddd1305dbcdae887ef93cf7ad256";

  async function fetchData() {
    const APIURL = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APPID}&app_key=${APIKEY}`
    );
    const data = await APIURL.json();
    console.log(data.hits);
    setRecipe(data.hits);
  }

  useEffect(() => {
    fetchData();
  }, [query]);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(search);
  }

  return (
    <div className="body">
      <form onSubmit={handleSubmit} className="container">
        <input
          type="text"
          placeholder="Recipe"
          onChange={handleChange}
          className="search-bar"
        />
        <button className="search-button">Search</button>
      </form>
      <div className="recipe-element">
        {recipe.map((recipes) => {
          return (
            <Recipes
              key={recipes.recipe.label}
              title={recipes.recipe.label}
              calories={recipes.recipe.calories}
              image={recipes.recipe.image}
              ingredients={recipes.recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
