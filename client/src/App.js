import "./App.css";
// import Header from "./Header";
import Tale from "./Tale";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Tale />} />
        <Route path={"/login"} element={<div>Login Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
