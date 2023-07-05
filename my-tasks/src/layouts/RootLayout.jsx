import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"



export default function RootLayout() {
  return (
    <Grid templateColumns={'repeat(6, 1fr)'} bg={'gray.50'}>

      <GridItem
        as={'aside'}
        p={{base: '20px' , lg: '30px'}}
        colSpan={{ base: 6, md: 1, lg: 1 }}
        bg={'purple.500'}
        minHeight={{lg: '100vh'}}>

      
        <Sidebar/>
      </GridItem>

      <GridItem
        as={'main'}
        colSpan={{base: 6 ,md: 5,lg: 5}}
        p={'30px'}>

        <Navbar/>
        <Outlet />
      </GridItem>

    </Grid>
  )
}
