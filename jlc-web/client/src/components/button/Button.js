function Button({ label, onClick }) {
  return (
    <button
      className="btn btn-primary btn-sm text-uppercase"
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "Michroma",
        color: "#40509d",
        fontSize: "16px",
        border: "none",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default Button;
