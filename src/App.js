import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div id="container" className="">
      <NavBar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
