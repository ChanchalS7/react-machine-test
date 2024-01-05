import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";
import "./App.css";
const Button = () => {
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
	return (
		<button
			onClick={toggleTheme}
			className={`${isDarkTheme ? "lightbtn" : "darkBtn"}`}
		>
			Change theme
		</button>
	);
};

export default Button;
