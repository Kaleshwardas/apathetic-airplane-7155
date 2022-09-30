import { Box, HStack, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillAndroid, AiFillApple, AiFillYoutube, AiOutlineGlobal, AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook, ImPinterest } from "react-icons/im";

function Footer() {
  return (
    <>
      <Box w="109%" margin={"auto"}  bg="#4a4a4a" marginLeft="-3rem" h="20rem">
        <HStack   bg="#4a4a4a" justifyContent="center" h="22rem">
          <Box h="22rem" w="20%">
            <Box >
              <Image
                marginTop="2rem"
                marginLeft="4rem"
                boxSize="8rem"
                h="4rem"
                src="https://www.cricbuzz.com/images/cb_logo.svg"
                alt="crickbuzz logo"
              />
            </Box>
          </Box>
          <Box marginTop="5rem"  h="18rem" w="20%">
            <Text fontWeight="bold" fontSize="23px" color="#ffffff">MOBILE SITE & APPS</Text>
            <HStack marginTop="0.8rem"><AiOutlineGlobal color="white" size="1.3rem"/>
            <Text color="white" fontSize="1.3rem"> m.cricbuzz.com</Text></HStack>
            <HStack marginTop="0.8rem"> <AiFillAndroid color="white" size="1.3rem"/>
            <Text color="white" fontSize="1.3rem"> Android</Text></HStack>
            <HStack  marginTop="0.8rem" >  <AiFillApple color="white" size="1.3rem"/>
            <Text color="white" fontSize="1.3rem">iOS</Text></HStack>
           
          </Box>
          <Box  h="18rem" w="20%">
          <Text fontWeight="bold" fontSize="23px" color="#ffffff">MOBILE SITE & APPS</Text>
            <HStack  marginTop="0.8rem"> <ImFacebook color="white" size="1.3rem"/>
            <Text color="white" fontSize="1.3rem"> facebook</Text></HStack>
            <HStack marginTop="0.8rem"> <AiOutlineTwitter color="white" size="1.3rem"/>
            <Text color="white" fontSize="1.3rem">twitter</Text></HStack>
            <HStack marginTop="0.8rem">  <AiFillYoutube color="white" size="1.3rem"/>
            <Text color="white" fontSize="1.3rem"> youtube</Text></HStack>
            <HStack marginTop="0.8rem">  <ImPinterest color="white" size="1.3rem"/>
            <Text color="white" fontSize="1.3rem"> Pinterest</Text></HStack>
          </Box>
          <Box  h="18rem" w="20%" color="white">
          <Text fontWeight="bold" fontSize="23px" color="#ffffff">COMPANY</Text>
            <Text color="white" fontSize="1.3rem">Careers</Text>
            <Text color="white" fontSize="1.3rem">Advertise</Text>
            <Text color="white" fontSize="1.3rem">Privacy Policy</Text>
            <Text color="white" fontSize="1.3rem">Terms of Use</Text>
            <Text color="white" fontSize="1.3rem">Cricbuzz TV Ads</Text>
          </Box>
        </HStack>
         <Box color="white" display="block"  w="50rem"     transform={"translate(40%, -200%)"} h="2rem" > 
         <Text>© 2022 Cricbuzz.com, Times Internet Limited. All rights reserved | The Times of India | Navbharat Times</Text>
         </Box>
      </Box>
    </>
  );
}

export default Footer;
