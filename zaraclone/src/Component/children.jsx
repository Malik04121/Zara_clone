import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

// import { Grid, GridItem } from '@chakra-ui/react'


function Childpage(){
const [data,setData]=useState([])

useEffect(()=>{
   axios.get(`https://lit-crag-43080.herokuapp.com/api/kids`)
   .then((res)=>setData(res.data))
   console.log(data)
},[])



return(
    <div style={{display:"grid",gap:"30px",gridTemplateColumns:"repeat(4,1fr)",padding:"20px"}}>
        {data.map((ele)=>(
           <Link to={`/kids/${ele.id}`}><img height="600px" width="99%" src={ele.imgUrl}/></Link>
        ))}
    </div>
)

}
export default Childpage