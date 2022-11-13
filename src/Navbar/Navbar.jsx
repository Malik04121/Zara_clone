

import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { Flex,HStack,Menu,Box,Input,Image,MenuButton,Button,Text,Avatar } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
// import {Link} from "rea"


function Navbar(){
    const {logindata}=useContext(AuthContext)
     const navigate=useNavigate()
    const {search,setSearch}=useContext(AuthContext)

    const Searchchange=(e)=>{
        console.log(e.target.value)
        navigate("/search")
        setSearch(e.target.value)
        // console.log(searchdata,"1")

    }
    // console.log(searchdata,"2")

    return(
        <HStack justify="space-between" alignItems="start" width="100%" p="10px" position="fixed" zIndex={20} top="1px" bg="none" >
            <Box>
                  <Menu>
                  {/* <MenuButton
                    as={IconButton}
                     aria-label='Options'
                     icon={<HamburgerIcon />}
                      variant='outline'
                   /> */}
                  </Menu>
                  <Link to="/">
                        
                        <Image width="250px" height="140px" src="https://i.ibb.co/1bRQfn0/Globalvogue-2.png"/>
                    </Link>
            </Box>
            <Flex gap="30px"  mt="25px">
               <Input name="searchdata"  onChange={Searchchange} placeholder='search' size='md' border="none" borderBottom="1px solid black" borderRadius={0} fontWeight={400}/>
               {logindata.length==0?<Link to="/login">Login</Link>: <Avatar src='https://bit.ly/broken-link'/>}
                <Link >Help</Link>
                <Link to="/cart">Cart</Link>
            </Flex>
        </HStack>
        //   <div className="nav_container">
        //     <div className="nav_left">
        //         <button >
        //         <div className="menudiv"></div>
        //         <div className="menudiv"></div>
        //         <div className="menudiv"></div>
        //         </button>
        //         <div className="logo">

        //             <Link to="/">
                        
        //                 <img width="280px" height="70px" src="https://cdn.cookielaw.org/logos/5435e8e3-1f77-4efd-bb7e-591b5a6e876e/d7899571-c1e4-4d71-8e87-09246e838e5d/d5b1d450-62b7-4f62-94ba-f9835c6495ed/Standard.png"/>
        //             </Link>
        //         </div>
        //     </div>
        //     <div className="nav_right">
        //         <div className="right1">
        //             <input placeholder="search" className="search"/>
        //         </div>
        //         <div className="right2">
        //             <Link to="/login"><button className="btn1" type="button">Login</button>
        //             </Link>
                    
        //             <button className="btn1" type="button">Help</button>
        //             <button className="btn1" type="button">Cart</button>
        //         </div>
        //     </div>

        //   </div>
          
        
    )

}
export default Navbar



// https://cdn.cookielaw.org/logos/5435e8e3-1f77-4efd-bb7e-591b5a6e876e/d7899571-c1e4-4d71-8e87-09246e838e5d/d5b1d450-62b7-4f62-94ba-f9835c6495ed/Standard.png