import { useState } from "react";
import Header from "./components/Header/Header";
import OurRecipes from "./components/OurRecipes/OurRecipes";
import Recipes from "./components/Recipes/Recipes";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
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
  const handelRemove = (id) => {
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);
    const updatedRecipes = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedRecipes);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };
  const handelSumOfTime = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };
  return (
    <>
      <Header></Header>
      <OurRecipes></OurRecipes>
      {/* recipes card section */}
      <section className="flex container mx-auto flex-col md:flex-row gap-6 mt-9 mb-24">
        {/* card section */}
        <Recipes addRecipeQueue={addRecipeQueue} />
        {/* sideBar */}
        <SideBar
          totalCalories={totalCalories}
          totalTime={totalTime}
          handelSumOfTime={handelSumOfTime}
          preparedRecipe={preparedRecipe}
          handelRemove={handelRemove}
          recipeQueue={recipeQueue}
        />
      </section>
    </>
  );
}

export default App;
