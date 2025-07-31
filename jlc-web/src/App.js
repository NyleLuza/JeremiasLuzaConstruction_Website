import Navbar from './components/Navbar'
import img from './imgs/house1.jpg'
import './App.css';

function App() {
  return (
    <div className="d-flex flex-grow-1 flex-column h-100">
      <Navbar />
      <div className="d-flex flex-grow-1">
          <img src={img} alt="Example"/>
      </div>
      <footer className="d-flex flex-grow-1">
        This is the footer
      </footer>
    </div>
  );
}

export default App;
