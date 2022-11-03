import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
