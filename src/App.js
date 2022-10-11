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
import { createContext, useEffect } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import MyOrders from "./pages/dashboard/MyOrders/MyOrders";
import AddReview from "./pages/dashboard/AddReview";
import Settings from "./pages/MyProfile/Settings";
import EditProfile from "./pages/MyProfile/EditProfile";
import MyProfile from "./pages/MyProfile/MyProfile";
import { useQuery } from "react-query";
import FullPageLoading from "./pages/shared/FullPageLoading";
import ManageProducts from "./pages/dashboard/ManageProducts/ManageProducts";
import UpdateProducts from "./pages/dashboard/ManageProducts/UpdateProducts";
import AddProducts from "./pages/dashboard/ManageProducts/AddProducts";

export const AppContext = createContext();

function App() {
  const {data, isLoading} = useQuery('loadContextUser', ()=>fetch('https://damp-reef-67167.herokuapp.com/finduser', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
  })
  .then(res=>res.json()))
  
  if(isLoading){
    return <FullPageLoading></FullPageLoading>
  }
  return (
    <div>
      <AppContext.Provider value={data}>
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
          <Route path="addproduct" element={<AddProducts></AddProducts>}></Route>
          <Route path="manageproducts" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="manageproducts/updateproduct/:id" element={<UpdateProducts></UpdateProducts>}></Route>
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
      </AppContext.Provider>
    </div>
  );
}

export default App;
