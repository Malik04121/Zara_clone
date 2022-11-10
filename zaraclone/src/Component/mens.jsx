import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


function Menpage(){
const [data,setData]=useState([])

useEffect(()=>{
   axios.get(`https://lit-crag-43080.herokuapp.com/api/products`)
   .then((res)=>setData(res.data))
   console.log(data)
},[])



return(
    <div>
        {data.map((ele)=>(
           <Link to={`/men/${ele.id}`}><img src={ele.pimage}/></Link>
        ))}
    </div>
)

}
export default Menpage