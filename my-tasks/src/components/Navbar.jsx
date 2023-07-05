import { Box, Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react';

export default function Navbar() {
  return (

      <Flex as={'nav'} p={'10px'} alignItems={'center'} bg={'gray.100'}>

          <Heading as={'h1'}>My Tasks</Heading>
          <Spacer/>

          <HStack spacing={'20px'}>
           {/* horizontal stack HSTACK (Used to make spaces among components) */}
          <Box  color={'white'} bg={'purple.500'}p={'7px'} borderRadius={'20px'}>A</Box>
          <Text>Amnahere2003@gmail.com</Text>
          <Button colorScheme='purple'>Logout</Button>

          </HStack>

          

      </Flex>

    // <Flex bg={'lightgray'} justify={'space-around'} wrap={'wrap'} gap={'2px'}>
    //     <Box w={'150px'} h={'50px'} bg={'red'}>1</Box>
    //     <Box w={'150px'} h={'50px'} bg={'blue'}>2</Box>
    //     <Box w={'150px'} h={'50px'} bg={'green'}>3</Box>
    //     <Box w={'150px'} h={'50px'} bg={'yellow'}>4</Box>

    // </Flex>
  )
}


