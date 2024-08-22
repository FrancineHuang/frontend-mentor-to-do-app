import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import BgDesktopLight from './images/bg-desktop-light.jpg'
import BgDesktopDark from './images/bg-desktop-dark.jpg'

function App() {
  const [themeLight, setThemeLight] = useState(true)

  const themeClass = themeLight? 'very-light-gray' : 'very-dark-blue'
  const bgImage = themeLight? `url(${BgDesktopLight})` : `url(${BgDesktopDark})`

  return (
    <div 
      className={`${themeClass} bg-no-repeat bg-top bg-cover pt-80 pb-80`}
      style={{ backgroundImage: bgImage }}
    >
      <div className='max-w-864 mx-auto'>
        <Header themeLight={themeLight} setThemeLight={setThemeLight}/>
      </div>
    </div>
  );
}

export default App;
