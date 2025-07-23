function Button({label, onClick}){
    return(
        <button className="btn btn-primary btn-lg text-uppercase" style={{backgroundColor:'#40509d', fontFamily: 'Michroma', color: '#F5F5F5',fontSize: '22px', border: 'none', fontWeight: 'bold'}}>{label}</button>
    );
}
export default Button;