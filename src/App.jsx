import BoxSx from "./components/boxs";
import FooterComponent from "./components/footer";
import PrimarySearchAppBar from "./components/header";
import ResponsiveAppBar from "./components/header";
import MainBox from "./components/mainBox";
import Navbar from "./components/menuitem";
import WorldSection from "./components/worldSectionComponent";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      {/* <Navbar></Navbar> */}
      {/* <PrimarySearchAppBar></PrimarySearchAppBar> */}
      <BoxSx />
      <MainBox />
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
