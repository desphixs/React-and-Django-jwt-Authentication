import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";


import AddService from "./views/seller/AddService";
import SellerDashboard from "./views/seller/SellerDashboard";
import MyServices from "./views/seller/MyServices";
import ServicesListing from "./views/ServicesListing";
import ServiceDetail from "./views/ServiceDetail";
import MyOrders from "./views/seller/MyOrders";
import MyOrdersDetail from "./views/seller/MyOrdersDetail";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Navbar />
          <Switch>
            <PrivateRoute component={ProtectedPage} path="/protected" exact />
            {/* Seller URLS */}
            <PrivateRoute component={AddService} path="/add-service" exact />
            <PrivateRoute component={SellerDashboard} path="/seller-dashboard" exact />
            <PrivateRoute component={MyServices} path="/my-services" exact />
            <PrivateRoute component={MyOrders} path="/my-orders" exact />
            <PrivateRoute component={MyOrdersDetail} path="/my-orders/:order_id" exact />
            
            <PrivateRoute component={ServiceDetail} path="/service-detail/:service_id" exact />
            <Route component={ServicesListing} path="/service-listings" />


            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Home} path="/" />
            <Route component={Home} path="/" />
          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
