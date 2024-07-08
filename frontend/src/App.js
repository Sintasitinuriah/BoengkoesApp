import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/Homepage";
import Beranda from "./pages/Beranda";
import Cartpage from "./pages/Cartpage";
import Profile from "./Components/Profile";
import "./App.css";
import Storepage from "./pages/Storepage";
import Buttonsmall from "./Components/button-small";
import CardToko from "./Components/CardToko";
import Navigasi from "./Components/Navigasi";
import Searchbar from "./Components/Searchbar";
import NavbarSearching from "./Components/NavbarSearching";
import StoreDetail from "./pages/Storedetail";
import HeaderToko from "./Components/HeaderToko";

function App() {
  const isAuthenticated = false;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/storedetail" element={<StoreDetail />} />
          <Route path="/navbarsearching" element={<NavbarSearching />} />
          <Route path="/search" element={<Searchbar />} />
          <Route path="/navigasi" element={<Navigasi />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/cardtoko" element={<CardToko />} />
          <Route path="/buttonsmall" element={<Buttonsmall />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/store" element={<Storepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
