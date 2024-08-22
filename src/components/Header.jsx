import SwitchToDarkIcon from "../images/icon-moon.svg"
import SwitchToLightIcon from "../images/icon-sun.svg"

const Header = ({ themeLight, setThemeLight }) => {
  const switchThemeIcon = themeLight ? SwitchToDarkIcon : SwitchToLightIcon

  const changeTheme = () => {
    setThemeLight(!themeLight)
  };

  return (
    <header className="text-white flex justify-between items-center mb-77">
      <h1 className="text-58 font-bold">TODO</h1>
      <button className="border-none bg-transparent cursor-pointer focus:outline-none" onClick={changeTheme}>
        <img src={switchThemeIcon} alt="Dark Theme" />
      </button>
    </header>
  );
};

export default Header