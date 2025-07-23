import logo from './logos/jlclogo1.jpg'

function Navbar(){
return(
    <nav className="d-flex align-items-center justify-content-between px-5" style={{ height: "60px", backgroundColor: '#40509d' }}>
      <div className='d-flex'>
        <h2>
          Temp Logo
        </h2>
      </div>
      <div className='d-flex justify-content-end flex-grow-1 gap-3'>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </nav>
);
}
export default Navbar;