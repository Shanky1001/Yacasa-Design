import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div id="container" className="">
      <NavBar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
