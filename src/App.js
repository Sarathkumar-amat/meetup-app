import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { IndividualMeet } from './pages/IndividualMeet';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individualMeet/:meetId" element={<IndividualMeet />} />
       
      </Routes>
    </div>
  );
}

export default App;
