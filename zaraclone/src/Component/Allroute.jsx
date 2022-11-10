import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Womenpage from "./women"
import Menpage from "./mens"

function Allroutes(){

    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/men" element={<Menpage/>}/>
            <Route path="/women" element={<Womenpage/>}/>
        </Routes>
        </>
    )
}
export default Allroutes