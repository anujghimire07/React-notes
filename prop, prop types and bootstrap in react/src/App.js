
import NavMessage from './components/Navbar'
let x="first"
function App() {
  return (
    <>
  
      <NavMessage title="title" name={x} />{/*string must be inside " " and variables and numbers must be inside { } */}
    </>
  );

}
console.log("object")

export default App;
