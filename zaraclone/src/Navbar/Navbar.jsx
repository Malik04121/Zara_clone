

import "./navbar.css"
import {Link} from "react-router-dom"
// import {Link} from "rea"


function Navbar(){

    return(
        
          <div className="nav_container">
            <div className="nav_left">
                <button >
                <div className="menudiv"></div>
                <div className="menudiv"></div>
                <div className="menudiv"></div>
                </button>
                <div className="logo">

                    <Link to="/">
                        
                        <img width="280px" height="70px" src="https://cdn.cookielaw.org/logos/5435e8e3-1f77-4efd-bb7e-591b5a6e876e/d7899571-c1e4-4d71-8e87-09246e838e5d/d5b1d450-62b7-4f62-94ba-f9835c6495ed/Standard.png"/>
                    </Link>
                </div>
            </div>
            <div className="nav_right">
                <div className="right1">
                    <input placeholder="search" className="search"/>
                </div>
                <div className="right2">
                    <Link to="/login"><button className="btn1" type="button">Login</button>
                    </Link>
                    
                    <button className="btn1" type="button">Help</button>
                    <button className="btn1" type="button">Cart</button>
                </div>
            </div>

          </div>
          
        
    )

}
export default Navbar


