function Button({label, onClick}){
    return(
        <button className="btn btn-primary btn-lg" style={{backgroundColor:'#40509d', fontFamily: 'Michroma', fontSize: '22px', border: 'none', fontWeight: 'bold'}}>{label}</button>
    );
}
export default Button;