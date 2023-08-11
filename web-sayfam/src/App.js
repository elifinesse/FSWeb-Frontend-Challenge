import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
