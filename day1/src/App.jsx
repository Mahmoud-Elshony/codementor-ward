import BoxSx from "./components/boxs";
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
    </>
  );
}

export default App;
