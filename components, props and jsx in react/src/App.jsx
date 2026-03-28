import Navcomps from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";
function App() {
  return (
    <>
      <Navcomps />
      <div className="cardcontainer">
        <Cards heading="card 1" des=" this is card 1"></Cards>
        <Cards heading="card 2" des=" this is card 2"></Cards>
        <Cards heading="card 3" des=" this is card 3"></Cards>
        <Cards heading="card 4" des=" this is card 4"></Cards>
      </div>
      <Footer />
    </>
  );
}

export default App;
