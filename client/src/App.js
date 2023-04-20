import "./App.css";
import Header from "./Header";
import Tale from "./Tale";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import GetinPage from "./pages/getinPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/getin"} element={<GetinPage />} />
      </Route>
    </Routes>
  );
}

export default App;
