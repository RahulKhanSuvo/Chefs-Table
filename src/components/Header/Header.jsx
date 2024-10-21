import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className=" container mx-auto mt-6 md:mt-9">
      <NavBar></NavBar>
      <Banner></Banner>
    </header>
  );
};

export default Header;
