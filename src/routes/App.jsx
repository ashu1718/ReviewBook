import "./App.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import PostItems from "../components/postitems";
import InputCard from "../components/inputcard";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext } from "react";
import StoredItemProvider from "../store/storedItems";
import { Outlet } from "react-router-dom";
function App() {
  const [currTab, setcurrTab] = useState("Home");

  return (
    <>
      <div className="main-container">
        <StoredItemProvider>
          <Sidebar setTab={currTab} setcurrTab={setcurrTab}></Sidebar>

          <div className="head-foot">
            <Header></Header>

            <Outlet></Outlet>

            <Footer></Footer>
          </div>
        </StoredItemProvider>
      </div>
    </>
  );
}

export default App;
