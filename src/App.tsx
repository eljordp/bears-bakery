import { useEffect, useState } from "react";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import SaturdayTable from "./components/sections/SaturdayTable";
import Story from "./components/sections/Story";
import Menu from "./components/sections/Menu";
import About from "./components/sections/About";
import Visit from "./components/sections/Visit";
import { isThemeId, type ThemeId } from "./theme";

function getInitialTheme(): ThemeId {
  if (typeof window === "undefined") {
    return "heirloom";
  }

  const themeFromUrl = new URLSearchParams(window.location.search).get("theme");
  if (isThemeId(themeFromUrl)) {
    return themeFromUrl;
  }

  const themeFromStorage = window.localStorage.getItem("bears-bakery-theme");
  return isThemeId(themeFromStorage) ? themeFromStorage : "heirloom";
}

function App() {
  const [theme, setTheme] = useState<ThemeId>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("bears-bakery-theme", theme);
  }, [theme]);

  return (
    <div data-theme={theme} className="bg-ivory text-ink font-serif fiber">
      <Nav theme={theme} onThemeChange={setTheme} />
      <main>
        <Hero />
        <SaturdayTable />
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
