import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import HeaderComponent from "../components/Header.Component";
import MainPageComponent from "../components/Main.Component";
import LoaderComponent from "../components/Loader.Component";
import RemoveLoader from "../functions/Remove.Loader.Component.Function";
import { useEffect } from "react";

const HomePage: React.FC = () => {
  useEffect(() => {
    RemoveLoader();
  }, []);

  return (
    <>
      <NavigationBarComponent />
      <HeaderComponent />
      <LoaderComponent />
      <MainPageComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
