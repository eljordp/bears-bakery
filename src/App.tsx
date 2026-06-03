import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import Menu from "./components/sections/Menu";
import About from "./components/sections/About";
import Visit from "./components/sections/Visit";

function App() {
  return (
    <div className="bg-cream text-bark font-serif">
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Menu />
        <About />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
