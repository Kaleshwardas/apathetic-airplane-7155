import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ToggleBottomNav } from "../Context/Action";
import { AppContext } from "../Context/AuthContentextProvider";
import "./navbar.css";
function BotttomNav() {
  const { state, dispatch } = useContext(AppContext);
  // console.log(state.wSize)
 
  const setToggle=()=>{
    dispatch(ToggleBottomNav(!state.wSize)) 
  }
  return (
    <>
      <Box>
        <Box w="95%"  margin="auto" h="3.2rem" marginBottom="0.8rem">
          <HStack h="3.2rem" spacing="0" bg="#4a4a4a">
            <Box
              className="title"
              bg="#333"
              color="white"
              p="0.8rem 2rem 0.8rem 2rem"
            >
              <Text>MATCHES</Text>
            </Box>
            <Box
              className="title2"
              color="white"
              p="0.8rem 0.5rem 0.8rem 0.5rem"
            >
              <Text>JT vs GAw-JT Won</Text>
            </Box>
            <Box
              className="title2"
              color="white"
              p="0.8rem 0.5rem 0.8rem 0.5rem"
            >
              <Text>RSA vs IND - IND Won</Text>
            </Box>
            <Box
              className="title2"
              color="white"
              p="0.8rem 0.5rem 0.8rem 0.5rem"
            >
              <Text>PAK vs ENG - PAK Won</Text>
            </Box>
            <Box
              className="title2"
              color="white"
              p="0.8rem 0.5rem 0.8rem 0.5rem"
            >
              <Text>AUSL vs INDL -Break</Text>
            </Box>
            <Box
              className="title2"
              color="white"
              p="0.8rem 0.5rem 0.8rem 0.5rem"
            >
              <Text>NOTTS vs DUR -Stumps</Text>
            </Box>
            <Spacer />
            <Box
              className="title2"
              color="white"
              bg="#444"
              p="0.8rem 0.5rem 0.8rem 0.5rem"
              display="inline-block"
              onClick={() => setToggle()}
              cursor="pointer"
            >
              {state.wSize? (
                <Text>
                  {" "}
                  Close <TriangleUpIcon boxSize={3} />{" "}
                </Text>
              ) : (
                <Text>
                  {" "}
                  ALL <TriangleDownIcon boxSize={3}></TriangleDownIcon>{" "}
                </Text>
              )}
            </Box>
          </HStack>
        </Box>
        <Box
          margin="auto"
          // border="1px solid red"
          w="95%"
          bg="#444"
          h="75rem"
          // display="block"
          display={state.wSize ? "block" : "none"}
        >
          <HStack
            spacing="2rem"
            borderBottom="1px solid  #333"
            w="full"
            h="4rem"
          >
            <Box
              bg="#ffffff"
              marginLeft="2rem"
              p="0.2rem 1.5rem 0.2rem 1.5rem"
              borderRadius="2rem"
            >
              <Text>All</Text>
            </Box>
            <Box
              bg="#333"
              color="white"
              p="0.2rem 1.5rem 0.2rem 1.5rem"
              borderRadius="2rem"
            >
              <Text>Live Now</Text>
            </Box>
            <Box
              bg="#333"
              color="white"
              p="0.2rem 1.5rem 0.2rem 1.5rem"
              borderRadius="2rem"
            >
              <Text>Today</Text>
            </Box>
          </HStack>
          <HStack  h="46rem" w="full">
            <Box  h="46rem" w="33%">
              <Box  marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="1.1rem" fontWeight="bold" color="#00deaa">INTERNATIONAL</Text>
                <Text fontSize="17px" marginTop="6px" fontWeight="600"  >India v South Africa, 2022</Text>
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400" >South Africa vs India</Text>
                <Text fontSize="14px">1st T20I</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="6px" fontWeight="600" >Pakistan vs England, 2022</Text>
                <Text  fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400"> Pakistan vs England</Text>
                <Text fontSize="14px">5th T20I</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text  fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Pakistan vs England</Text>
                <Text  fontSize="14px">6th T20I</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="6px" fontWeight="600">United Arab Emirates v Bangladesh,2022</Text>
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Bangladesh vs United Arab Emirates</Text>
                <Text fontSize="14px">2nd T20I</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="1.1rem" fontWeight="bold" color="#00deaa">T20 LEAGUE</Text>
                <Text fontSize="17px" marginTop="6px" fontWeight="600">CPL 2022</Text>
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Barbados Royals vs Guyana Amazon Warriors</Text>
                <Text fontSize="14px">Qualifier 1</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400" >Jamaica Tallwahs vs Saint Lucia Kings</Text>
                <Text  fontSize="14px">Eliminator</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text  fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400" >Jamaica Tallwahs vs Guyana Amazon Warriors</Text>
                <Text fontSize="14px">Qualifier 2</Text>

              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text  fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400" >Barbados Royals vs Jamaica Tallawahs</Text>
                <Text fontSize="14px">Final</Text>
              </Box>
              <Box  marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="6px" fontWeight="600">Road Safety World Series T20</Text>
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Sri Lanka Legends vs Bangladesh Legends</Text>
                <Text fontSize="14px">19th Match</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">England Legends vs Australia Legends</Text>
                <Text  fontSize="14px">20th Match</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Australia Legends vs India Legends</Text>
                <Text fontSize="14px">Semi-final 1</Text>
              </Box>
              <Box  marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                   <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Sri Lanka Legends vs West Indies Legends</Text>
                   <Text fontSize="14px">Semi-final 2</Text>
              </Box>
            </Box>
            <Box  h="46rem" w="33%">
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="6px" fontWeight="600">CSA T20 Cup 2022</Text>
                <Text  fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Eastern Storm vs South Africa U19</Text>
                <Text   fontSize="14px">Pool A</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">South Western Districts vs Limpopo</Text>
                <Text fontSize="14px">Pool B</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Tuskers vs Mpumalanga Rhinos</Text>
                <Text fontSize="14px">Pool A</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Eastern Cape vs Northern Cape</Text>
                <Text fontSize="14px">Pool B</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Tuskers vs South Africa U19</Text>
                <Text fontSize="14px">Pool A</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Northern Cape vs South Western Districts</Text>
                <Text fontSize="14px">Pool B</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Eastern Storm vs Mpumalanga Rhinos</Text>
                <Text fontSize="14px">Pool A</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Eastern Cape vs Limpopo</Text>
                <Text fontSize="14px">Pool B</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="6px" fontWeight="600">Legends League Cricket</Text>
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Bhilwara Kings vs Gujarat Giants</Text>
                <Text fontSize="14px">9th Match</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">India Capitals vs Manipal Tigers</Text>
                <Text fontSize="14px">10th Match</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Gujarat Giants vs Bhilwara Kings</Text>
                <Text fontSize="14px">11th Match</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="1.1rem" fontWeight="bold" color="#00deaa">DOMESTIC</Text>
                <Text fontSize="17px" marginTop="6px" fontWeight="600">Irani Cup</Text>
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Saurashtra vs Rest of India</Text>
                <Text fontSize="14px">Irani Cup</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="6px" fontWeight="600">County Division One</Text>
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Gloucestershire vs Yorkshire</Text>
                <Text fontSize="14px">County Div 1</Text>
              </Box>
             
            </Box>
            <Box  h="46rem" w="33%">
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Warwickshire vs Hampshire  </Text>
                <Text fontSize="14px">County Div 1</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Essex vs Northamptonshire</Text>
                <Text fontSize="14px">County Div 1</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Lancashire vs Surrey</Text>
                <Text fontSize="14px">County Div 1</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="6px" fontWeight="600">County Championship Two</Text>
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Worcestershire vs Middlesex</Text>
                <Text fontSize="14px">County Div 2</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Glamorgan vs Sussex</Text>
                <Text fontSize="14px">County Div 2</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Nottinghamshire vs Durham</Text>
                <Text fontSize="14px">County Div 2</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Leicestershire vs Derbyshire </Text>
                <Text fontSize="14px">County Div 2</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="6px" fontWeight="600">Aus Domestic One-Day Cup</Text>
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">South Australia vs Tasmania</Text>
                <Text fontSize="14px">4th Match</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Queensland vs Tasmania</Text>
                <Text fontSize="14px">5th Match</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Western Australia vs New South Wales</Text>
                <Text fontSize="14px">6th Match</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="1.1rem" fontWeight="bold" color="#00deaa">WOMEN</Text>
                <Text fontSize="17px" marginTop="6px" fontWeight="600">Womens Asia Cup</Text>
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">Bangladesh Women vs Thailand Women</Text>
                <Text fontSize="14px">1st Match</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">India Women vs Sri Lanka Women</Text>
                <Text fontSize="14px">2nd Match</Text>
              </Box>
              <Box marginLeft="1.6rem" color="#E3E6E3" marginTop="1.2rem">
                <Text fontSize="17px" marginTop="6px" fontWeight="600">West Indies Women v New Zealand Wom</Text>
                <Text fontSize="17px" marginTop="1px" color="#ffffff"  fontWeight="400">West Indies Women vs New Zealand Women</Text>
                <Text fontSize="14px">1st T20I</Text>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
}

export default BotttomNav;
