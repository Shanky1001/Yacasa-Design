import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Recommended from "./components/Recommended";

function App() {
  return (
    <>
      <div id="container" className="">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Recommended />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
