function BodyButton({ label, onClick }) {
  return (
    <button
      className="btn btn-primary btn-sm text-uppercase"
      style={{
        border: "2px solid white",
        boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.7)",
        backgroundColor: "rgba(0,0,0,0)",
        fontFamily: "Michroma",
        color: "#F5F5F5",
        fontSize: "15px",
        textShadow: "1px 2px 3px rgba(0, 0, 0, 0.7)",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default BodyButton;
