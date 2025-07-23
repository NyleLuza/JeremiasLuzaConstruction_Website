import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column justify-content-center h-100">
      <Navbar />
      <p className="d-flex">
          <p>Lorsdemdf</p>
      </p>
      <footer className="d-flex">
        This is the footer
      </footer>
    </div>
  );
}

export default App;
