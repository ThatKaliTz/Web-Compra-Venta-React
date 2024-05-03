import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Preline from "./components/Preline";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "./ScrollToTop";

import { NavBar } from "./components/NavBar";
import { AuthProvider } from "./AuthContext";
import { Landing } from "./pages/Landing";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Product } from "./pages/Product";
import { UploadProduct } from "./pages/UploadProduct";
import { EditProduct } from "./pages/EditProduct";
import { ProductApproval } from "./pages/ProductApproval";
import { SalesReport } from "./pages/SalesReport";
import { ShoppingCart } from "./pages/ShoppingCart";
import { ShoppingHistory } from "./pages/ShoppingHistory";
import { PaymentState } from "./pages/PaymentState";
import { Profile } from "./pages/Profile";
import { Chats } from "./pages/Chats";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Preline />
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={
                <PublicRoute>
                  <Landing />
                </PublicRoute>
              }
            />
            <Route
              path="/signUp"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />

            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/search/:query"
              element={
                <PrivateRoute>
                  <Search />
                </PrivateRoute>
              }
            />
            <Route
              path="/product"
              element={
                <PrivateRoute>
                  <Product />
                </PrivateRoute>
              }
            />
            <Route
              path="/uploadProduct"
              element={
                <PrivateRoute>
                  <UploadProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="/editProduct"
              element={
                <PrivateRoute>
                  <EditProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="/productApproval"
              element={
                <PrivateRoute>
                  <ProductApproval />
                </PrivateRoute>
              }
            />
            <Route
              path="/salesReport"
              element={
                <PrivateRoute>
                  <SalesReport />
                </PrivateRoute>
              }
            />
            <Route
              path="/shoppingCart"
              element={
                <PrivateRoute>
                  <ShoppingCart />
                </PrivateRoute>
              }
            />
            <Route
              path="/shoppingHistory"
              element={
                <PrivateRoute>
                  <ShoppingHistory />
                </PrivateRoute>
              }
            />
            <Route
              path="/paymentState"
              element={
                <PrivateRoute>
                  <PaymentState />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/chats"
              element={
                <PrivateRoute>
                  <Chats />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
