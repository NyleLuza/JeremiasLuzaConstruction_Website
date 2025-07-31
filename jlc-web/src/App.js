import Navbar from './components/Navbar'
import img from './imgs/house1.jpg'
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main'

function App() {
  return (
    <div className="d-flex flex-grow-1 flex-column h-100">
      <Navbar />
      <Main />
      <footer className="d-flex flex-grow-1">
        This is the footer
      </footer>
    </div>
  );
}

export default App;
