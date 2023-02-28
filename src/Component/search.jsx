import {Box,Text,Grid,Image} from "@chakra-ui/react"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/AuthContext"

function Search(){
    const {search}=useContext(AuthContext)
    const [data,setData]=useState([])
  console.log(search)
 
  const searchdata=(search)=>{
    axios.get(`https://zara-db-backend.onrender.com/products?q=${search}`)
    .then((res)=>setData(res.data))
  } 

  useEffect(()=>{
     searchdata(search)
  },[search])

    return(
        <Grid  m="20px" mt="80px"  gap="35px" gridTemplateColumns="repeat(3,1fr)">
            {data.map((ele)=>(
                <Box >
                    <Image height="600px" width="100%" src={ele.imgUrl}/>
                    <Text>{ele.prod_name}</Text>
                    <Text>{ele.price}</Text>

                </Box>
            ))}
        </Grid>
    )
}
export default Search