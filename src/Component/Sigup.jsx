// import { Button } from "react-bootstrap"
import React from "react"
import {Box,Text,Input , Button} from "@chakra-ui/react"
import {useState} from "react"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Signup(){
    const [signupdata,setSignupdata]=useState(
        {"email":"","password":"","name":"","address":"","contact":""})
    const [userdata,setUserdata]=useState([])
    const navigate=useNavigate()

    const getdata=()=>{
        axios.get(`https://zara-db-backend.onrender.com/userData`)
        .then((res)=>setUserdata(res.data))
    }
    useEffect(()=>{
       getdata()
    },[])

    const postuserdata=(signupdata)=>{
        axios(`https://zara-db-backend.onrender.com/userData`,{
        method:"POST",
        data:{
            ...signupdata,
            id: Date.now()
          }
      })
      navigate("/login")
    }

    const Inputhandler=(e)=>{
        console.log("inut chanfge")
        const {name,value}=e.target
        setSignupdata({...signupdata,[name]:value})
    }
    const handlesubmit=()=>{
        console.log("signup")
        console.log(signupdata)
        // let sdata=userdata.filter((ele)=>ele.email==signupdata.email)
        // if(sdata.length==0){
        //     alert(`${signupdata.email} is already exist`)
        // }
        // else if(signupdata.password.length==0){
        //     alert("Enter Password")
        // }
        // else if(signupdata.name.length==0){
        //     alert("Enter Name")
        // }
        // else if(signupdata.contact.length==0){
        //     alert("Enter contact details")
        // }
        // else if(signupdata.address.length==0){
        //     alert("Enter Adress detail")
        // }
        // else{
            postuserdata(signupdata)
        // }

    }

    return(
        <Box mt={190} width="40%" ml="10%">
            <Text textAlign="left" fontWeight="bold">PERSONAL DETAILS</Text>
            <Input onChange={Inputhandler} borderRadius="0" border="none" borderBottom="1px solid black" mt={5} name="name" value={signupdata.name} placeholder="Name"/>
            <Input onChange={Inputhandler} borderRadius="0" border="none" borderBottom="1px solid black" mt={5} name="email" value={signupdata.email} placeholder="Email"/>
            <Input onChange={Inputhandler} borderRadius="0" border="none" borderBottom="1px solid black" mt={5} name="password" value={signupdata.password} placeholder="Password"/>
            <Input onChange={Inputhandler} borderRadius="0" border="none" borderBottom="1px solid black" mt={5} name="address" value={signupdata.address} placeholder="Address"/>
            <Input onChange={Inputhandler} borderRadius="0" border="none" borderBottom="1px solid black" mt={5} name="contact" value={signupdata.contact} placeholder="Phone Number"/>
            <Button onClick={handlesubmit} width="100%" backgroundColor="black" color="white" mt={10}>Create Account</Button>
        </Box>
    )
}
export default Signup