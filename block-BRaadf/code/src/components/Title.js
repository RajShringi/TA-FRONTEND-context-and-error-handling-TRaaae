import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Title({ text }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
