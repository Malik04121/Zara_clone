import {Box,Input,Text,Flex,Button} from "@chakra-ui/react"

function Checkout(){

   const checkout=()=>{
    alert("Your Order is Placed")
   }

    return (
      <Box mt="190px" ml="80px">
        <Text align="start" fontSize="2xl" fontWeight={700}>PLEASE ENTER THE DELIVERY DETAILS</Text>
      <Flex gap="10px" width="60%" mt="20px" >
        <Box width="80%">
            <Input mt="20px" border="none" color="grey" placeholder="Name" borderRadius="none" borderBottom="1px solid grey"/>
            <Input mt="20px" border="none" color="grey" placeholder="Address" borderRadius="none" borderBottom="1px solid grey"/>
            <Input mt="20px" border="none" color="grey" placeholder="Locality" borderRadius="none" borderBottom="1px solid grey"/>
            <Input mt="20px" border="none" color="grey" placeholder="State" borderRadius="none" borderBottom="1px solid grey"/>
            <Input mt="20px" border="none" color="grey" placeholder="Email" borderRadius="none" borderBottom="1px solid grey"/>
        </Box>
        <Box>
        <Input mt="20px" border="none" color="grey" placeholder="Pin Code" borderRadius="none" borderBottom="1px solid grey"/>
        <Input mt="20px" border="none" color="grey" placeholder="More Info" borderRadius="none" borderBottom="1px solid grey"/>
        <Input mt="20px" border="none" color="grey" placeholder="City" borderRadius="none" borderBottom="1px solid grey"/>
        <Input mt="20px" border="none" color="grey" placeholder="Contact" borderRadius="none" borderBottom="1px solid grey"/>
        </Box>
      </Flex>
      <Button fontSize="2xl" mr="1500px" height="60px" mt="30px" bg="black" color="white" width="860px" onClick={checkout}>Place an Order</Button>

      </Box>
    )
}
export default Checkout