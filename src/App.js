
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Card from './pages/card';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
