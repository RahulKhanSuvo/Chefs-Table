import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
