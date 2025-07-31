import logo from './logos/logo3rev.png'
import Button from './button/Button'

function Navbar(){
return(
    <nav className="d-flex align-items-center justify-content-between px-5" style={{ minHeight: "60px", backgroundColor: '#40509d' }}>
      <div className='d-flex'>
        <img src={logo}/>
      </div>
      <div className='d-flex justify-content-end flex-grow-1 gap-3'>
        <Button label="Home"/>
        <Button label="About"/>
        <Button label="Contact"/>
      </div>
    </nav>
);
}
export default Navbar;