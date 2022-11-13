import axios from "axios"
import { useContext, useEffect,useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Box, Grid ,Text,Image, VStack, Flex,Button} from '@chakra-ui/react'
import { AuthContext } from "../Context/AuthContext"


function Cart(){
      const [cartdata,setCartdata]=useState([])
      const {total,setTotal}=useContext(AuthContext)
      const navigate=useNavigate()

   const getcartdata=()=>{
    axios.get(`https://lit-crag-43080.herokuapp.com/api/cart`)
    .then((res)=>setCartdata(res.data))
    // {cartdata.map((ele)=>(
    //     setTotal(total=>total+Number(ele.price))
    //   ))}
      
   }
   console.log(cartdata)
   useEffect(()=>{
    
       getcartdata()   
       
   },[])
   const checkout=()=>{
    navigate("/checkout")
   }

    return(
        <Box>
        <Grid templateColumns="repeat(3,1fr)" gap="10px" >
          {cartdata.map((ele)=>(
            <Box >
                <Image height="80%" width="100%" src={ele.imgUrl}/>
                <Text fontSize="md">{ele.prod_name}</Text>
                <Text fontSize="2xl">INR {ele.price}</Text>
            </Box>
          ))}
        </Grid>
        <Flex justify="end" width="100%"  position="fixed" bottom={2}>
            <Box fontWeight={500} justify="start">
                <Flex gap="5px">
                    <Text>Total</Text>
                    <Text>{total}</Text>
                </Flex>
                <Text>Including GST</Text>
                <Text>* EXCL SHIPPING COST</Text>
            </Box>
            <Button alignItems="center" bg="black" color="white" width="150px" onClick={checkout}>Continue</Button>
        </Flex>
        </Box>
    )
}
export default Cart