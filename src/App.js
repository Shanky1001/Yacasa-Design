import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Recommended from "./components/Recommended";

function App() {
  return (
    <div id="container" className="">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Recommended />
      </main>
    </div>
  );
}

export default App;
