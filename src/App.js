import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { IndividualMeet } from './pages/IndividualMeet';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individualMeet/:meetId" element={<IndividualMeet />} />
       
      </Routes>
    </div>
  );
}

export default App;
