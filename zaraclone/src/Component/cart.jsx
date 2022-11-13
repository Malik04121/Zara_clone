import axios from "axios"
import { useEffect } from "react"
import { Box, Grid } from '@chakra-ui/react'

function Cart(){
      const [cartdata,setCartdata]=useState([])

   const getcartdata=()=>{
    axios.get(`https://lit-crag-43080.herokuapp.com/api/cart`)
    .then((res)=>setCartdata(res.data))
   }

   useEffect(()=>{
       getcartdata()   
   },[])

    return(
        <Grid>
        <Box>
           <Box>
              <Text></Text>
           </Box>
        </Box>
        </Grid>
    )
}
export default Cart