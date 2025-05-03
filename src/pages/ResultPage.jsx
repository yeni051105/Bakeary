import { useLocation, Link } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const { mood, flavor } = location.state || {};

  let dessert = "Cookies";
  let recipeUrl = "https://www.allrecipes.com/recipe/15462/neiman-marcus-chocolate-chip-cookie/";

  if (mood === "stressed" && flavor === "chocolate") {
    dessert = "Chocolate Lava Cake";
    recipeUrl = "https://www.allrecipes.com/recipe/219964/chef-johns-chocolate-lava-cake/";
  } else if (mood === "happy" && flavor === "fruity") {
    dessert = "Strawberry Shortcake";
    recipeUrl = "https://www.allrecipes.com/recipe/8201/strawberry-shortcake/";
  } else if (flavor === "light") {
    dessert = "Lemon Pound Cake";
    recipeUrl = "https://www.allrecipes.com/recipe/236915/lemon-buttermilk-pound-cake-with-aunt-evelyns-lemon-glaze/";
  }

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
        height: "430px",
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
        <h2 style={{ color: "#F28797", fontSize: "22px", fontWeight: "bold" }}>🎉 Your Recommended Dessert:</h2>
        <h3 style={{ color: "#F28797", marginTop: "10px", fontSize: "50px", fontWeight: "bold" }}>{dessert}</h3>
        <p style={{ color: "#F28797", fontSize: "14px", marginTop: "10px" }}>
          Based on your mood and taste, this might hit the spot!
        </p>
        <a href={recipeUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: "10px", color: "#F28797", fontWeight: "bold", textDecoration: "underline" }}>
          View Recipe
        </a>
        <Link to="/">
          <button
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
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ResultPage;



