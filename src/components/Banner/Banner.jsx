import banner from "../../assets/ai-generated-8520995.png";

const Banner = () => {
  return (
    <div
      className="h-full rounded-3xl w-full bg-cover mt-14 mb-24  object-cover text-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${banner})`,
      }}
    >
      <div className="h-full w-full py-32 flex flex-col items-center justify-center text-white">
        <h3 className="text-5xl mb-6">
          Discover an exceptional cooking <br /> class tailored for you!
        </h3>
        <p className="mb-8 text-lg px-4 max-w-2xl leading-relaxed">
          Explore a world of mouth-watering recipes, from quick weekday meals to
          gourmet dishes. Master cooking techniques, experiment with flavors,
          and create unforgettable meals that everyone will love. Your culinary
          journey starts here!
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-[#0BE58A] text-black rounded-full font-semibold hover:bg-[#0ad078] transition">
            Explore Now
          </button>
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;