import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Headeeer from './components/Headeeer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/header" element={<Header/>} />
          <Route path="/headerr" element={<Headeeer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
