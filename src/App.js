import './App.css';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
