import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './store/ThemeContext'
import Button from './Button';
//step 4 is to work in app.jsx this is the last step
export default function App() {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className={`App ${isDarkTheme ? "darkTheme" : "lightTheme"}`}>
      <h1>Theme Context API</h1>
      <Button />
    </div>
  );
}

