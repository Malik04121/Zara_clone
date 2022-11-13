import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Womenpage from "./women"
import Menpage from "./mens"
import Product from "./product"
import Childpage from "./children"
import Signup from "./Sigup"
import Cart from "./cart"
import PrivateRoute from "./PrivateRoute"
import Checkout from "./checkout"
import Search from "./search"

function Allroutes(){

    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/men" element={<Menpage/>}/>
            <Route path="/:para/:id" element={<Product/>}/>
            <Route path="/women" element={<Womenpage/>}/>
            <Route path="/kids" element={<Childpage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>}/>
            
        </Routes>
        </>
    )
}
export default Allroutes