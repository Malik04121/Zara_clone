import {Box,Flex,Text,Input,Button} from "@chakra-ui/react"
import axios from "axios"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Container } from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"



function Login(){
    const {logindata,setLogindata}=useContext(AuthContext)

    const [data,setData]=useState([])
    const [login,setLogin]=useState({"email":"","password":""})
    const navigate=useNavigate()

    useEffect(()=>{
    axios.get(`https://lit-crag-43080.herokuapp.com/api/userdata`)
    .then((res)=>setData(res.data))
    },[])

    const handlechange=(e)=>{
       const {name,value}=e.target
       setLogin({...login,[name]:value})
    }
    const handleSubmit=()=>{
       let ldata=data.filter((ele)=>(
        ele.email==login.email && ele.password==login.password
       ))
       setLogindata(ldata)
       console.log(ldata)
       alert("User is successfully login")
       setLogin({email:"", password:""})
       navigate("/")
       
    }
   
    return(
    
        <Box mt="200px" ml="10%">
            <Flex gap={200} >
                <Box width="20%">
                    <Text fontSize="4xl" fontWeight="700" textAlign="left">Login</Text>
                    
                        {/* <Text fontSize="md" fontWeight="600" textAlign="left">Email</Text> */}
                        <Input name="email" value={login.email} onChange={handlechange}  width="100%" textAlign="left" borderRadius={0} border="none" borderBottom="1px solid black" mt={5} placeholder="enter email" type="email"/>
                    
                    
                        {/* <Text fontSize="md" fontWeight="600" textAlign="left" mt={10}>Password</Text> */}
                        <Input name="password" onChange={handlechange} value={login.password} width="100%" border="none" borderRadius="0" borderBottom="1px solid black" mt={8} placeholder="enter password" type="password"/>
                        <Text textAlign="left" fontSize="xs" fontWeight="10" mt={5}>Forgot Password</Text>
                
                    <Box>
                        <Button onClick={handleSubmit} backgroundColor="black" color="white" mt={10} width="100%">Login</Button>
                    </Box>
                </Box>
                   
                <Box>
                     <Text fontSize="4xl" fontWeight="700" textAlign="left">REGISTER</Text>
                     
                <Text  textAlign="left" fontSize="md" fontWeight="10" mt="10%">
                  IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE <br />
                  THIS OPTION TO ACCESS THE REGISTRATION FORM.
                </Text>
                <Text textAlign="left" fontSize="md" fontWeight="10" mt="3%">
                  BY GIVING US YOUR DETAILS, PURCHASING IN
                  <br /> ZARA.COM WILL BE FASTER AND AN ENJOYABLE
                  <br /> EXPERIENCE.
                </Text>
                <Link to="/signup" textDecoration="none">
                <Button  backgroundColor="black" color="white" mt="20%" width="100%">Create Account</Button>
                </Link>
                </Box>

            </Flex>
            
             <Text>

            </Text>
        </Box>
    
        
        
        
    )

}
export default Login