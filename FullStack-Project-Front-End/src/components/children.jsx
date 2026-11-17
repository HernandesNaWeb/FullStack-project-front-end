import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import ProductList from "./ProductListing";
import NotFound from "./PageNotFound";
import ProductDetails from "./ProductDetails";
import Login from "./Login";
import Cadastro from "./Cadastro";
import PageNotfound from "./PageNotFound";

const Children = () => {
    return ( 
        <>
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route index element={<Home />}/>
                        <Route path="/home" element={<Home />} />
                        <Route path="/produtos" element={<ProductList />} />
                        <Route path="/categorias" element={<NotFound />} />
                        <Route path="/meus-pedidos" element={<NotFound />} />
                        <Route path="/detalhes-produtos" element={<ProductDetails />} />
                        <Route path="/about" element={<PageNotfound />} /> 
                        <Route path="/security" element={<PageNotfound />} /> 
                        <Route path="/wishlist" element={<PageNotfound />} /> 
                        <Route path="/blog" element={<PageNotfound />} /> 
                        <Route path="/jobs" element={<PageNotfound />} /> 
                        <Route path="/login" element={<Login />} /> 
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/camisetas" element={<PageNotfound />} />
                        <Route path="/calças" element={<PageNotfound />} />
                        <Route path="/bones" element={<PageNotfound />} />
                        <Route path="/headphones" element={<PageNotfound />} />
                        <Route path="/tenis" element={<PageNotfound />} />
                    </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Children;