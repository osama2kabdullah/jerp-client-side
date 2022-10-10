import "./App.css";
import FooterMe from "./pages/FooterMe";
import Header from "./pages/Home/header/Header";
import Home from "./pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import FogotPass from "./pages/login/FogotPass";
import ToolsDetails from "./pages/Home/Tools/ToolsDetails";
import RequirAuth from "./pages/shared/RequireAuth";
import { useEffect } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import MyOrders from "./pages/dashboard/MyOrders/MyOrders";
import AddReview from "./pages/dashboard/AddReview";
import Settings from "./pages/MyProfile/Settings";
import EditProfile from "./pages/MyProfile/EditProfile";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/forgotpassword" element={<FogotPass></FogotPass>}></Route>
        <Route path="/forgotpassword" element={<FogotPass></FogotPass>}></Route>
        <Route
          path="/productdetail/:id"
          element={
            <RequirAuth>
              <ToolsDetails></ToolsDetails>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequirAuth>
              <Dashboard></Dashboard>
            </RequirAuth>
          }
        >
          <Route path="" element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
        </Route>
        <Route
          path="/settings"
          element={
            <RequirAuth>
              <Settings></Settings>
            </RequirAuth>
          }
        >
          <Route path="" element={<EditProfile></EditProfile>}></Route>
        </Route>
        <Route path="/myprofile" element={<MyProfile></MyProfile>}></Route>
      </Routes>
      <FooterMe></FooterMe>
    </div>
  );
}

export default App;
