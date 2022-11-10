import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"


function Product(){
  const {id}=useParams()
  const [data,setData]=useState({})

 useEffect(()=>{
     axios.get(`https://lit-crag-43080.herokuapp.com/api/products/${id}`)
     .then((res)=>setData(res.data))
 },[])
  console.log(data.pcost)
    return(
      <div>
        <h1>Item page </h1>
        <p>{data.pname}</p>
      </div>
    )
}
export default Product