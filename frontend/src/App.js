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
import "./App.css";
import Storepage from "./pages/Storepage";
import Buttonsmall from "./Components/button-small";
import CardToko from "./Components/CardToko";
import Navigasi from "./Components/Navigasi";
import Searchbar from "./Components/Searchbar";
import NavbarSearching from "./Components/NavbarSearching";
import HeaderToko from "./Components/HeaderToko";
import StoreDetail from "./pages/Storedetail";
import Category from "./Components/Category";
import CardProduk from "./Components/CardProduk";
import Variant from "./Components/variant";
import Quantity from "./Components/quantity";
import Productdetail from "./pages/Productdetail";
import ButtonKeranjang from "./Components/Buttonkeranjang";
import Buttonbeli from "./Components/Buttonbeli";
import HeaderTokoChat from "./Components/HeaderTokoChat";
import ButtonChat from "./Components/Buttonchat";
import ButtonKunjungiToko from "./Components/Buttonkunjungitoko";
import Deskripsi from "./Components/Deskripsi";
import Navbar from "./Components/Navbar";
import HelpCenter from "./Components/HelpCenter";
import FAQ from "./Components/Faq";
import ButtonSimpan from "./Components/button-simpan";
import ProfilePage from "./pages/ProfilePage";
import RadioButton from "./Components/RadioButton";
import FormNamaLengkap from "./Components/FormNamaLengkap";
import NavbarSeller from "./Components/NavbarSeller";
import NavigasiSeller from "./Components/NavigasiSeller";
import ProfilePageSeller from "./pages/ProfilePageSeller";
import FormNamaSeller from "./Components/formnamaseller";
import HomeSeller from "./pages/HomeSeller";
import Shipping from "./pages/Shipping";
import AddProduct from "./Components/AddProduct";
import FormNamaProduk from "./Components/FormNamaProduk";
import FormHargaProduk from "./Components/FormHargaProduk";
import FormStokProduk from "./Components/FormStokProduk";
import FormKategoriProduk from "./Components/FormKategoriProduk";
import FormDeskripsiProduk from "./Components/FormDeskripsiProduk";
import ButtonKembali from "./Components/ButtonKembali";
import ButtonTambah from "./Components/ButtonTambah";
import AboutUs from "./Components/AboutUs";
import PrivacyPolicy from "./Components/PrivacyPolicy";

function App() {
  const isAuthenticated = false;

  return (
    <Router>
      {/* <div className="App"> */}
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/buttontambah" element={<ButtonTambah />} />
        <Route path="/buttonkembali" element={<ButtonKembali />} />
        <Route path="/formdeskripsiproduk" element={<FormDeskripsiProduk />} />
        <Route path="/formkategoriproduk" element={<FormKategoriProduk />} />
        <Route path="/formstokproduk" element={<FormStokProduk />} />
        <Route path="/formhargaproduk" element={<FormHargaProduk />} />
        <Route path="/formnamaproduk" element={<FormNamaProduk />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/homeseller" element={<HomeSeller />} />
        <Route path="/ShippingPage" element={<Shipping />} />
        <Route path="/formnamaseller" element={<FormNamaSeller />} />
        <Route path="/profilepageseller/:userId" element={<ProfilePageSeller />} />
        <Route path="/navigasiseller" element={<NavigasiSeller />} />
        <Route path="/navbarseller" element={<NavbarSeller />} />
        <Route path="/formnamalengkap" element={<FormNamaLengkap />} />
        <Route path="/radiobutton" element={<RadioButton />} />
        <Route path="/profilepage/:userId" element={<ProfilePage />} />
        <Route path="/buttonsimpan" element={<ButtonSimpan />} />
        <Route path="/deskripsi" element={<Deskripsi />} />
        <Route path="/headertokochat" element={<HeaderTokoChat />} />
        <Route path="/buttonkunjungitoko" element={<ButtonKunjungiToko />} />
        <Route path="/buttonchat" element={<ButtonChat />} />
        <Route path="/buttonbeli" element={<Buttonbeli />} />
        <Route path="/buttonkeranjang" element={<ButtonKeranjang />} />
        <Route path="/productdetail" element={<Productdetail />} />
        <Route path="/quantity" element={<Quantity />} />
        <Route path="/variant" element={<Variant />} />
        <Route path="/storedetail" element={<StoreDetail />} />
        <Route path="/cardproduk" element={<CardProduk />} />
        <Route path="/category" element={<Category />} />
        <Route path="/headertoko" element={<HeaderToko />} />
        <Route path="/navbarsearching" element={<NavbarSearching />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/navigasi" element={<Navigasi />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/cardtoko" element={<CardToko />} />
        <Route path="/buttonsmall" element={<Buttonsmall />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/store" element={<Storepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
        />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
