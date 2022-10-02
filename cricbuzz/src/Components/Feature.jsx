import React, { useState } from "react";
import { Box, HStack, IconButton, Spacer, Text } from "@chakra-ui/react";

import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { useEffect } from "react";
import macthdata from "./macthdata.json"

export default function Carousel() {
  console.log(macthdata)

  const [slider, setSlider] = useState(true);
 

  
  return (
    <Box textAlign={"center"} h="200px" w="95%" margin="auto">
      <IconButton
        borderRadius="50%"
        // display="block"
        bg="#009070"
        color="white"
        _hover={{ color: "white", bg: "#009070" }}
        transform={"translate(-20%, -200%)"}
        display={slider ? "none" : "block"}
        top="80%"
        left="2%"
        onClick={() => setSlider(true)}
        p="1rem 1rem 2rem 1rem"
      >
        <MdOutlineArrowBackIos />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        borderRadius="50%"
        // display="block"
        top="80%"
        left="96%"
        bg="#009070"
        color="white"
        _hover={{ color: "white", bg: "#009070" }}
        display={slider ? "block" : "none"}
        transform={"translate(-20%, -200%)"}
        onClick={() => setSlider(false)}
        p="1rem 1rem 2rem 1rem"
      >
        <MdArrowForwardIos />
      </IconButton>

      <Box bg="#ffffff" textAlign="left" marginTop="-50px" w="full" h="170px">
        <Text
          color="#009070"
          fontWeight="bold"
          marginLeft="2rem"
          paddingTop="0.5rem"
          fontSize="xl"
        >
          FEATURED MATCHES
        </Text>
        {slider ? (
          <HStack spacing="0" h="150px" marginTop="-1rem">
             {macthdata.data.map((el)=>(
                    <Box
                    borderRight="1px solid #dad3d3"
                    h="5rem"
                    w="25%"
                    textAlign="center"
                    key={el.id}
                    // border="1px solid red"
                  >
                    <HStack marginLeft="2rem" w="8.5rem">
                      <Text fontWeight="500" color="#7d7575">
                        {el.teamInfo[0].shortname}
                      </Text>
                      <Spacer />
                      <Text fontWeight="500" color="#7d7575">
                        {el.score[0].r}-{el.score[0].w}({el.score[0].o})
                       
                      </Text>
                    </HStack>
                    <HStack marginTop="5px" marginLeft="2rem" w="9rem">
                      <Text fontWeight="500" color="#000000">
                      {el.teamInfo[1].shortname}
                      </Text>
                      <Spacer />
                      <Text fontWeight="500" color="#000000">
                      {el.score[0].r}-{el.score[1].w}({el.score[0].o})
                      </Text>
                    </HStack>
                    <HStack marginTop="8px" marginLeft="2rem">
                      <Text color="#1866db">{el.status}</Text>
                    </HStack>
                  </Box>
                    ))}
            
          
          </HStack>
        ) : (
          <HStack spacing="0" h="150px" marginTop="-1rem">
             {macthdata.data2.map((el)=>(
                    <Box
                    borderRight="1px solid #dad3d3"
                    h="5rem"
                    w="25%"
                    textAlign="center"
                    key={el.id}
                    // border="1px solid red"
                  >
                    <HStack marginLeft="2rem" w="8.5rem">
                      <Text fontWeight="500" color="#7d7575">
                      {el.teamInfo[0].shortname}
                      </Text>
                      <Spacer />
                      <Text fontWeight="500" color="#7d7575">
                      {el.score[0].r}-{el.score[0].w}({el.score[0].o})
                      </Text>
                    </HStack>
                    <HStack marginTop="5px" marginLeft="2rem" w="9rem">
                      <Text fontWeight="500" color="#000000">
                      {el.teamInfo[1].shortname}
                      </Text>
                      <Spacer />
                      <Text fontWeight="500" color="#000000">
                        110-2(16.4)
                        {/* {el.score[0].r}-{el.score[1].w}({el.score[0].o}) */}
                      </Text>
                    </HStack>
                    <HStack marginTop="8px" marginLeft="2rem">
                      <Text color="#1866db">{el.status}</Text>
                    </HStack>
                  </Box>
                    ))}
          </HStack>
        )}
      </Box>
    </Box>
  );
}
