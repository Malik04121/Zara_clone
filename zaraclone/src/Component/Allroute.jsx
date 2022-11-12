import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Womenpage from "./women"
import Menpage from "./mens"
import Product from "./product"
import Childpage from "./children"
import Signup from "./Sigup"

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
        </Routes>
        </>
    )
}
export default Allroutes