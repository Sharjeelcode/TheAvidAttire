import { Outlet } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
