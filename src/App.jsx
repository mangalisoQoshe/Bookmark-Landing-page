import "./App.css";
import Footer from "./assets/components/Footer";
import Intro from "./assets/components/Intro";
import Main from "./assets/components/Main";
import Nav from "./assets/components/Nav";

function App() {
  return (
    <div className="containter">
      <Nav />
      <Intro />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
