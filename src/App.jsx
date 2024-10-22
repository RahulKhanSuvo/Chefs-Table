import { useState } from "react";
import Header from "./components/Header/Header";
import OurRecipes from "./components/OurRecipes/OurRecipes";
import Recipes from "./components/Recipes/Recipes";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const addRecipeQueue = (recipe) => {
    const isHas = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (isHas) {
      alert("recipe already added");
      return;
    }
    setRecipeQueue([...recipeQueue, recipe]);
  };
  return (
    <>
      <Header></Header>
      <OurRecipes></OurRecipes>
      {/* recipes card section */}
      <section className="flex container mx-auto flex-col md:flex-row gap-6 mt-9">
        {/* card section */}
        <Recipes addRecipeQueue={addRecipeQueue} />
        {/* sideBar */}
        <SideBar />
      </section>
    </>
  );
}

export default App;
