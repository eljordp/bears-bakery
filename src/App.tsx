import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Story from "./components/sections/Story";
import Menu from "./components/sections/Menu";
import About from "./components/sections/About";
import Visit from "./components/sections/Visit";

function App() {
  return (
    <div className="bg-ivory text-ink font-serif fiber">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Menu />
        <About />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
