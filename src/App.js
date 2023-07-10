import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Fact from "./pages/Fact";
import Layout from "./layout/Layout";
import ErrorPage from "./pages/404";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about/:aboutId"} element={<About />} />
        <Route path={"/fact/:factId"} element={<Fact />} />

        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
