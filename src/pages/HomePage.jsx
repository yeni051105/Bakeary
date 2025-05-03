import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(to bottom, #F28797 50%, #EFCDC4 50%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        backgroundColor: "#ABD9AA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{ color: "#F28797", marginBottom: "10px", fontSize: "50px", fontWeight: "bold" }}>🍰 Welcome to Bakeary</h2>
        <p style={{ color: "#F28797", fontSize: "14px" }}>Take a fun quiz to find your today's perfect dessert!</p>
        <Link to="/quiz">
          <button style={{
            marginTop: "20px",
            padding: "8px 16px",
            backgroundColor: "#F28797",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;





