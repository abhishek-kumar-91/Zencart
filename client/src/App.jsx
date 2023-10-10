import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import User from "./pages/User"
import Products from "./pages/Products"
import Catagories from "./pages/Catagories"
import Footer from "./components/Footer"
import ElectronicsCategory from './components/category/ElectronicsCategory';

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<User />} />
      <Route path="/products" element={<Products />} />
      <Route path="/catagories" element={<Catagories />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/electronics" element={<ElectronicsCategory />} />
     </Routes>
     <Footer />
     </BrowserRouter>
     
      
    </>
  )
}

export default App
