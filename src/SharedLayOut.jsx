import { Outlet } from "react-router";
import Header from "./Components/Head/Header";
import Footer from "./Components/Footer/Footer";

const SharedLayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayOut;
