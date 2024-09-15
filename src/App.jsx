import BoxSx from "./components/boxs";
import FooterComponent from "./components/footer";
import PrimarySearchAppBar from "./components/header";
import ResponsiveAppBar from "./components/header";
import MainBox from "./components/mainBox";
import WorldSection from "./components/worldSectionComponent";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      {/* <PrimarySearchAppBar></PrimarySearchAppBar> */}
      <BoxSx />
      <MainBox />
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
