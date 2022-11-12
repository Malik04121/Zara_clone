import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { Box,Flex,Text,Button,Image } from '@chakra-ui/react'
// import { useDisclosure } from "@chakra-ui/react";

function Product(){
  const {id}=useParams()
  const {para}=useParams()
  const [data,setData]=useState({})
  // const { isOpen, onOpen, onClose } = useDisclosure()

 useEffect(()=>{
     axios.get(`https://lit-crag-43080.herokuapp.com/api/${para}/${id}`)
     .then((res)=>setData(res.data))
 },[])

 const addproduct=()=>{
  alert("Item added to cart")
   axios.post(`https://lit-crag-43080.herokuapp.com/api/cart`,data)
   .then((res)=>console.log(res.data))
   
 }

  console.log(data.pcost)
    return(
      <Box>
        <Box mt="84px" alignItems="center" ml="10%" className="scrolldetails">
          <Flex direction={["column", "row", "row"]} gap={40}>
          <Box width="25%" mt="10%">
            <Text>MATERIALS, CARE AND ORIGIN </Text>
            <Text mt={8}>ORIGIN</Text>
            <Text
              mt={8}
              maxHeight={["1%", "20%", "20%"]}
              style={{ overflow: "auto" }}
              fontSize="sm"
              fontWeight="300"
            >
              We work alongside our suppliers, workers, unions and international
              bodies to develop a supply chain that respects and promotes human
              rights, contributing to the United Nations Sustainable Development
              Goals. Additionally, thanks to an ongoing collaboration with our
              suppliers, we have developed a tracking programme that allows us
              to determine where and how our products are being made. Made in
              Vietnam CARE Caring for your clothes is caring for the
              environment. Lower temperature washes and delicate spin cycles are
              gentler on garments and help to protect the colour, shape and
              structure of the fabric. Furthermore, they reduce the amount of
              energy used in care processes. [car]7 Machine wash at max.
              30ºC/86ºF with short spin cycle [car]14 Do not use bleach [car]18
              Iron at a maximum of 110ºC/230ºF [car]125 Dry clean with
              tetrachloroethylene [car]35 Do not tumble dry MATERIALS We work
              with monitoring programmes to ensure compliance with safety,
              health and quality standards for our products. The Green to Wear
              2.0 standard aims to minimise the environmental impact of textile
              manufacturing. To that end, we have developed Inditex’s The List
              programme, which helps guarantee both that production processes
              are clean and that our garments are safe and healthy. OUTER SHELL
              74% polyester · 20% viscose · 6% elastane View Less
            </Text>
          </Box>
          <Box  >
            <Image height="600px" src={data.imgUrl} alt="" />
          </Box>
          <Box width="25%" >
            <Text mt={8}>{data.prod_name}</Text>
            <Text
              style={{ maxHeight: "20%", overflow: "auto" }}
              mt={8}
              fontSize="sm"
              fontWeight="300"
            >
              {data.material}
            </Text>
            <Text mt={8}>₹{data.price}</Text>
            <Text>Mrp included of all tax</Text>
            <hr></hr>

            <Box mt={8} mr="2%" justifyContent="flex-start" borderTop="1px" borderBottom="1px" borderColor="black">
              <Text
                justifyContent="flex-start"
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "	#D3D3D3", cursor: "pointer" }}
              >
                XS
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                {" "}
                S{" "}
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                M
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                L
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                XL{" "}
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                XXL
              </Text>
              <hr></hr>
            </Box>
            <Flex mt={8} justify="space-between">
              <Text fontSize="xs" fontWeight="200">
                Find your size
              </Text>
              <Text fontSize="xs" fontWeight="200">
                Guide
              </Text>
            </Flex>

            <Box>
              <Button
                // ref={btnRef}
                bg="black"
                color="white"
                mt={8}
                onClick={addproduct}
              >
                Add to Bag
              </Button>
            </Box>

            <Text fontSize="xs" fontWeight="200" mt={8}>
              DELIVERY, EXCHANGES AND RETURNS
            </Text>
          </Box>
          </Flex>
         

        </Box>
      </Box>
    )
}
export default Product