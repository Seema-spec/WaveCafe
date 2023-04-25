
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CafeMenu from './cafe/CafeMenu'
import About from './cafe/About';
import DrinkMenu from './cafe/DrinkMenu';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route path="/" Component={CafeMenu}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/drinkMenu" Component={DrinkMenu}></Route>
      </Routes>
    </Router>
  );
}

export default App;
