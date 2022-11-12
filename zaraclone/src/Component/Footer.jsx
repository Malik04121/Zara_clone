import { Box,Grid, GridItem, Heading,Text } from "@chakra-ui/react"

function Footer(){
   
    return(
        <Box>
        <Box ml="35%" mr="35%" mt="100px">
            <Heading mb="100px" fontSize="2xl" fontWeight={350}>Join Our Newsletter</Heading>
            <Grid templateColumns='repeat(6, 1fr)'>
                <GridItem fontSize="sm" fontWeight={150} >INSTAGRAM</GridItem >
                <GridItem fontSize="sm" fontWeight={150} >FACEBOOK</GridItem >
                <GridItem fontSize="sm" fontWeight={150} >TWITTER</GridItem >
                <GridItem fontSize="sm" fontWeight={150} >YOUTUBE</GridItem >
                <GridItem fontSize="sm" fontWeight={150} >PINTEREST</GridItem >
                <GridItem fontSize="sm" fontWeight={150} >SPOTIFY</GridItem >
            </Grid>
        </Box>
        <Box justify="start" align="start"mb="100px" ml="5%" fontSize="sm" fontWeight={150} mt="150px">
            <Text >NAME AND ADDRESS OF THE MANUFACTURER</Text>
            <Text>INDUSTRIA DE DISEÑO TEXTIL, S.A. (INDITEX, S.A.)</Text>
            <Text >AVENIDA DE LA DIPUTACIÓN, EDIFICIO INDITEX, 15143, ARTEIXO (A CORUÑA), SPAIN</Text>
        </Box>
        </Box>
    )

}
export default Footer