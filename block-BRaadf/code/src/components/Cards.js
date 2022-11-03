import { useContext } from "react";
import Card from "./Card";
import { ThemeContext } from "./ThemeContext";

function Cards() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="cards_wrap">
      <Card isDarkMode={isDarkMode} />
      <Card isDarkMode={isDarkMode} />
      <Card isDarkMode={isDarkMode} />
    </div>
  );
}

export default Cards;
