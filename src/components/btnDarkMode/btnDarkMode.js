import { useEffect, useRef } from "react";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";
import useStorageData from "../../utilits/getLocalStorage";

const BtnDarkMode = () => {
  // const [darkMode, setDarkMode] = useState("light");

  const [darkMode, setDarkMode] = useStorageData("darkMode", "light");
  const btnRef = useRef();
  console.log(darkMode);
  const toogleDarkMode = function () {
    setDarkMode(() => {
      return darkMode === "light" ? "dark" : "light";
    });
  };

  useEffect(() => {
    if (darkMode === "dark") {
      btnRef.current.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
    } else {
      btnRef.current.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button ref={btnRef} onClick={toogleDarkMode} className="dark-mode-btn">
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
