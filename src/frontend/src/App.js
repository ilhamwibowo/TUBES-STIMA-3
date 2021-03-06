import './App.css';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import DiseasePage from './Pages/DiseasePage/DiseasePage';
import DNAPage from './Pages/DNAPage/DNAPage';
import HistoryPage from './Pages/HistoryPage/HistoryPage';

function App() {
  // const [data,setData] = React.useState(null);
  // const [fileNameDisease, setFileNameDisease] = React.useState([]);
  // const [fileNameDNA, setFileNameDNA] = React.useState([]);

  return (
    <Router>
      <div className="App">
        <h1 className='bigTitle'>DNA SEQUENCE PATTERN CHECKER</h1>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<DNAPage/>}/>
            <Route path="/disease" element={<DiseasePage/>}/>
            <Route path="/history" element={<HistoryPage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}



export default App;