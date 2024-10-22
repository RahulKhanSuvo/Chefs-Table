import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = ({ recipe, addRecipeQueue }) => {
  const {
    image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card  h-full w-full border">
        <figure className="px-6 pt-6">
          <img
            className="h-64 w-full object-fill rounded-xl"
            src={image}
            alt={recipe_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold font-Lexend">
            {recipe_name}
          </h2>
          <p className="font-Fira text-[#878787]">{short_description}</p>
          <div className="border-t pt-6">
            <h3 className="font-Lexend font-medium mb-4">
              Ingredients: {ingredients.length}
            </h3>
            <ul className="list-disc list-inside font-Fira space-y-2 text-[#878787] border-b pb-4">
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex gap-6 items-center mt-6 font-Fira text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <CiClock2 />
                <p>{preparing_time} minutes</p>
              </div>
              <div className="flex items-center gap-1">
                <AiOutlineFire />
                <p>{calories} calories</p>
              </div>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button
              onClick={() => addRecipeQueue(recipe)}
              className="btn rounded-full font-Lexend font-semibold px-6 bg-[#0BE58A]"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
