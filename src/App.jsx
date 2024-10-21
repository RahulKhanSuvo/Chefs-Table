import Header from "./components/Header/Header";
import OurRecipes from "./components/OurRecipes/OurRecipes";
import Recipes from "./components/Recipes/Recipes";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <Header></Header>
      <OurRecipes></OurRecipes>
      {/* recipes card section */}
      <section className="flex container mx-auto flex-col md:flex-row gap-6 mt-9">
        {/* card section */}
        <Recipes />
        {/* sideBar */}
        <SideBar />
      </section>
    </>
  );
}

export default App;
