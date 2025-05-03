import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuizPage() {
  const [mood, setMood] = useState("");
  const [flavor, setFlavor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const result = { mood, flavor };
    navigate("/result", { state: result });
  };

  const handleSurprise = () => {
    const dessertOptions = [
      "Chocolate Lava Cake",
      "Strawberry Shortcake",
      "Lemon Soufflé",
      "Cookies",
      "Tiramisu",
      "Cheesecake"
    ];
    const random = dessertOptions[Math.floor(Math.random() * dessertOptions.length)];
    navigate("/result", { state: { surprise: true, dessert: random } });
  };

  const selectStyle = {
    padding: "6px",
    borderRadius: "4px",
    backgroundColor: "white",
    color: "#F28797",
    border: "1px solid #F28797",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none"
  };

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
        width: "500px",
        height: "420px",
        borderRadius: "50%",
        backgroundColor: "#ABD9AA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        padding: "20px"
      }}>
        <h2 style={{ color: "#F28797", fontSize: "22px", fontWeight: "bold" }}>🧁 Dessert Quiz</h2>

        <div style={{ marginTop: "10px" }}>
          <p style={{ color: "#F28797", marginBottom: "4px" }}>What's your mood today?</p>
          <select value={mood} onChange={(e) => setMood(e.target.value)} style={selectStyle}>
            <option value="">-- choose --</option>
            <option value="happy">Happy</option>
            <option value="stressed">Stressed</option>
            <option value="lazy">Lazy</option>
          </select>
        </div>

        <div style={{ marginTop: "20px" }}>
          <p style={{ color: "#F28797", marginBottom: "4px" }}>What flavor do you want?</p>
          <select value={flavor} onChange={(e) => setFlavor(e.target.value)} style={selectStyle}>
            <option value="">-- choose --</option>
            <option value="chocolate">Chocolate</option>
            <option value="fruity">Fruity</option>
            <option value="light">Light & airy</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          style={{
            marginTop: "20px",
            padding: "8px 16px",
            backgroundColor: "#F28797",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Get My Dessert
        </button>

        <button
          onClick={handleSurprise}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            backgroundColor: "white",
            color: "#F28797",
            border: "1px solid #F28797",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          🎲 No idea
        </button>
      </div>
    </div>
  );
}

export default QuizPage;
