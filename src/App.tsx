import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/app/Home";
import Predict from "./pages/app/Predict";
import Retrain from "./pages/app/Retrain";
import Visualization from "./pages/app/Visualization";


const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />

        <Route
          path="/predict"
          element={
            <Predict />
          }
        />
        <Route
          path="/retrain"
          element={
            <Retrain />
          }
        />

        <Route
          path="/visualizations"
          element={
            <Visualization />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
