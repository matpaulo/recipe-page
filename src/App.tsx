import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import PreparationTime from "./components/PreparationTime";

function App() {
  return (
    <div style={{ backgroundColor: "hsl(30, 54%, 90%)" }}>
      <div className="d-flex flex-column justify-content-center align-items-center pt-4 pb-4">
        <div
          className="card px-4 custom-border-radius"
          style={{ width: "44rem" }}
        >
          <Header />
          <PreparationTime />
          <Ingredients />
          <Instructions />
          <Nutrition />
        </div>
      </div>
    </div>
  );
}

export default App;
