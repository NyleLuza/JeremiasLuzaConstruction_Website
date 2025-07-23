import logo from './logos/logo3rev.png'

function Navbar(){
return(
    <nav className="d-flex align-items-center justify-content-between px-5" style={{ height: "60px", backgroundColor: '#40509d' }}>
      <div className='d-flex'>
        <img src={logo}/>
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