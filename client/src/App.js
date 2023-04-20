import "./App.css";
import Header from "./Header";
import Tale from "./Tale";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <Header />

            <div className="tales">
              <Tale />
              <Tale />
            </div>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
