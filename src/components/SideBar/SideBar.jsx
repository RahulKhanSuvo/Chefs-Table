const SideBar = ({
  recipeQueue,
  handelRemove,
  preparedRecipe,
  handelSumOfTime,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="flex-1 md:1/3 border rounded-xl p-6 ">
      <h3 className="text-center font-semibold font-Lexend text-xl  lg:w-3/4 pb-3 mx-auto border-b">
        Want to cook: {recipeQueue.length}
      </h3>
      <div className="">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Head */}
          <thead>
            <tr className="bg-[#0BE58A] text-white">
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Calories</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <th className="p-4">{index + 1}</th>
                <td className="p-4">{recipe.recipe_name}</td>
                <td className="p-4">{recipe.preparing_time}</td>
                <td className="p-4">{recipe.calories}</td>
                <td className="p-4">
                  <button
                    onClick={() => {
                      handelRemove(recipe.recipe_id);
                      handelSumOfTime(recipe.preparing_time, recipe.calories);
                    }}
                    className="px-3 py-1 bg-[#0BE58A] text-white rounded-full hover:bg-[#0ae278]"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="text-center font-semibold font-Lexend text-xl  lg:w-3/4 pb-3 mx-auto border-b mt-8">
        Currently cooking: {preparedRecipe.length}
      </h3>
      <div className="">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Head */}
          <thead>
            <tr className="bg-[#0BE58A] text-white">
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Calories</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody>
            {preparedRecipe.map((recipe, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <th className="p-4">{index + 1}</th>
                <td className="p-4">{recipe.recipe_name}</td>
                <td className="p-4">{recipe.preparing_time}</td>
                <td className="p-4">{recipe.calories}</td>
              </tr>
            ))}
            <tr className="border-none">
              <th></th>
              <td></td>
              <td>Total time={totalTime}</td>
              <td>Total calories={totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideBar;
