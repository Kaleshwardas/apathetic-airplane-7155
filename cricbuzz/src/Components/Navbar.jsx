import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spacer,
  Stack,
  Text,

} from "@chakra-ui/react";
import Feature from "./Feature";

import { Search2Icon, SearchIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { BsPersonCircle } from "react-icons/bs";
import "./navbar.css";
import { useContext, useState } from "react";
import BotttomNav from "./BotttomNav";
import { AppContext } from "../Context/AuthContentextProvider";
import { goingLoginPage } from "../Context/Action";
import { Link} from "react-router-dom";
function Navbar() {
  const { state, dispatch } = useContext(AppContext);
  const [redirect ,seredirect]=useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  // console.log(state.wSize)
  const handleClick = () => {
    dispatch(goingLoginPage('going succesfull'))
    seredirect(true)
  }

  
  return (
    <Box>
      <Box margin="auto" w="95%" border="1px solid gray" marginTop="0.5rem">
        <HStack h="4rem" spacing="0" p="0" bg="#009070">
          <Box >
           
            <Link to="/">
            <Image
              marginLeft="1.4rem"
              marginRight="1rem"
              boxSize="8rem"
              h="4rem"
              src="https://www.cricbuzz.com/images/cb_logo.svg"
              alt="crickbuzz logo"
            />
            </Link>
          
          </Box>
          <Box
            display={isVisible6 ? "none" : "block"}
            className="mainBox"
            padding="1rem 0.3rem 1rem 0.4rem"
          >
            <Link to="/livescore" _hover={{textDecoration:"none"}}>
              <Text color="white" fontSize="lg">
                Live Score
              </Text>
            </Link>
          </Box>
          <Box
            display={isVisible6 ? "none" : "block"}
            className="mainBox"
            padding="1rem 0.3rem 1rem .04rem"
          >
            <Link>
              <Text color="white" fontSize="lg">
                Schedule
              </Text>
            </Link>
          </Box>
          <Box
            display={isVisible6 ? "none" : "block"}
            className="mainBox"
            padding="1rem 0.3rem 1rem 0.4rem"
          >
            <Link>
              <Text color="white" fontSize="lg">
                Archives
              </Text>
            </Link>
          </Box>
          <Box
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
            className="mainBox"
            padding="1rem 0.3rem 1rem 0.4rem"
            // display="inline-block"
            display={isVisible6 ? "none" : "block"}
            position="relative"
          >
            <Text color="white" fontSize="lg">
              News <TriangleDownIcon boxSize={3} />
            </Text>
          </Box>

          <Box
            onMouseOver={() => setIsVisible1(true)}
            onMouseOut={() => setIsVisible1(false)}
            // display="inline-block"
            display={isVisible6 ? "none" : "block"}
            position="relative"
            className="mainBox"
            padding="1rem 0.3rem 1rem 0.4rem"
          >
            <Text color="white" fontSize="lg">
              Series <TriangleDownIcon boxSize={3} />
            </Text>
          </Box>
          <Box
            onMouseOver={() => setIsVisible2(true)}
            onMouseOut={() => setIsVisible2(false)}
            // display="inline-block"
            display={isVisible6 ? "none" : "block"}
            position="relative"
            className="mainBox"
            // border="1px solid red"
            padding="1rem 0.3rem 1rem 0.4rem"
          >
            <Text color="white" fontSize="lg">
              Teams <TriangleDownIcon boxSize={3} />
            </Text>
          </Box>
          <Box
            onMouseOver={() => setIsVisible3(true)}
            onMouseOut={() => setIsVisible3(false)}
            // display="inline-block"
            display={isVisible6 ? "none" : "block"}
            position="relative"
            className="mainBox"
            padding="1rem 0.3rem 1rem 0.4rem"
          >
            <Text color="white" fontSize="lg">
              Videos <TriangleDownIcon boxSize={3} />
            </Text>
          </Box>
          <Box
            onMouseOver={() => setIsVisible4(true)}
            onMouseOut={() => setIsVisible4(false)}
            // display="inline-block"
            display={isVisible6 ? "none" : "block"}
            position="relative"
            className="mainBox"
            padding="1rem 0.3rem 1rem 0.4rem"
          >
            <Text color="white" fontSize="lg">
              Ranking <TriangleDownIcon boxSize={3} />
            </Text>
          </Box>
          <Box
            onMouseOver={() => setIsVisible5(true)}
            onMouseOut={() => setIsVisible5(false)}
            // display="inline-block"
            display={isVisible6 ? "none" : "block"}
            position="relative"
            className="mainBox"
            padding="1rem 0.3rem 1rem 0.4rem"
          >
            <Text color="white" fontSize="lg">
              More <TriangleDownIcon boxSize={3} />
            </Text>
          </Box>
          <Box
            display={isVisible6 ? "none" : "block"}
            padding="0.5rem 0.3rem 0.5rem 1.5rem"
          >
            <Box
              borderRadius="25"
              bg="white"
              color="gray"
              px={4}
              w="10rem"
              h="2.8rem"
              textAlign="center"
              marginTop="0.3rem"
            >
              <Text fontSize="lg" paddingTop="0.5rem">
                Cricbuzz Plus
              </Text>
            </Box>
          </Box>
          <Box  display={isVisible6 ? "block" : "none"} marginLeft="10rem" w="60rem" h="3rem">
            <HStack spacing="0">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon size="50px" color="white" />}
                />
                <Input h="3rem" bg="#00785c" border="none" borderRadius="none" />
              </InputGroup>

              <Button
              h="3rem"
                bg="#005e48"
                _hover="none"
                color="#ffffff"
                borderRadius="none"
              >
                SEARCH
              </Button>
            </HStack>
          </Box>
          <Box padding="1rem 0.6rem 1rem 5rem">
            <SearchIcon
              onClick={() => setIsVisible6(!isVisible6)}
              boxSize="1.2rem"
              color="white"
            />
          </Box>
          <Box padding="1rem 0.6rem 1rem 0.5rem">
            <Link to="/login" onClick={() => handleClick()}>
              <BsPersonCircle size="1.7rem" color="white" />
            </Link>
          </Box>
        </HStack>
      </Box>
      <Box
        marginLeft="28.7rem"
        h="30rem"
        bg="#ffffff"
        width="11.5rem"
        position="absolute"
        boxShadow="2xl"
        color="#585959"
        display={isVisible ? "block" : "none"}
      >
        <Box
          className="items"
          padding="0.5rem 1rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          All Stories
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Cricbuzz Plus
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Latest News
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Topic
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Spotligth
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Opinions
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Specials
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Stats & Analysis
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Interews
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Live Blogs
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Harsha Bhogle
        </Box>
      </Box>
      <Box
        marginLeft="33.2rem"
        h="25rem"
        width="23rem"
        bg="#ffffff"
        boxShadow="2xl"
        position="absolute"
        color="#585959"
        display={isVisible1 ? "block" : "none"}
      >
        <Box
          className="items"
          padding="0.5rem 1rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          ICC Mens T20 World Cup 2022
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          South Africa tour of India, 2022
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          England tour of Pakistan, 2022
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Caribbean Premier League, 2022
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Road Safety World Series T20 2022
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Irani Cup 2022
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          County ChampionShip Division One 2022
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Womens Asia Cup T20 2022
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          color="blue"
          fontSize="lg"
        >
          <Link>All Series </Link>
        </Box>
      </Box>
      <Box
        marginLeft="38rem"
        // border="1px solid red"
        h="33rem"
        width="30rem"
        bg="#ffffff"
        boxShadow="2xl"
        position="absolute"
        // display="block"
        // display="flex"
        display={isVisible2 ? "block" : "none"}
      >
        <HStack w="full" h="full">
          <Box h="full" w="50%">
            <Box
              padding="0.5rem 1rem 0.5rem 1.2rem"
              fontSize="lg"
              fontWeight="bold"
            >
              <Text> TEST TEAMS</Text>
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              India
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Afghanistan
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Ireland
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Pakistan
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Australia
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Sri Lanka
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Bangladesh
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              England
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              West Indies
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              South Africa
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Zimbabwe
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              New Zealand
            </Box>
          </Box>
          <Box h="full" w="50%">
            <Box
              padding="0.5rem 1rem 0.5rem 1.2rem"
              fontSize="lg"
              fontWeight="bold"
            >
              <Text>ASSOCIATE</Text>
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Malaysia
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Nepal
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Germany
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Namibia
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Denmark
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Singapore
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Papua New Guinea
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Kuwait
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Vanuatu
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Jersey
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Oman
            </Box>
            <Box
              className="items"
              padding="0.3rem 0.6rem 0.3rem 1.2rem"
              fontSize="lg"
            >
              Fiji
            </Box>
          </Box>
        </HStack>
      </Box>
      <Box
        marginLeft="43rem"
        // border="1px solid red"
        h="8.3rem"
        width="12rem"
        bg="#ffffff"
        boxShadow="2xl"
        position="absolute"
        // display="block"
        display={isVisible3 ? "block" : "none"}
      >
        <Box
          className="items"
          padding="0.5rem 1rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          All Videos
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Categories
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Playlists
        </Box>
      </Box>
      <Box
        marginLeft="48rem"
        // border="1px solid red"
        h="5.4rem"
        bg="#ffffff"
        width="16rem"
        position="absolute"
        // display="block"
        boxShadow="2xl"
        display={isVisible4 ? "block" : "none"}
      >
        <Box
          className="items"
          padding="0.5rem 1rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          ICC Ranking - Men
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          ICC Ranking - Women
        </Box>
      </Box>
      <Box
        marginLeft="44rem"
        // border="1px solid red"
        h="20rem"
        bg="#ffffff"
        width="15rem"
        position="absolute"
        // display="block"
        boxShadow="2xl"
        display={isVisible5 ? "block" : "none"}
      >
        <Box
          className="items"
          padding="0.5rem 1rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          World Test Championship
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          World Cup Super League
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Quize
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Photos
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Mobile App
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Careers
        </Box>
        <Box
          className="items"
          padding="0.5rem 0.6rem 0.5rem 1.2rem"
          fontSize="lg"
        >
          Contact Us
        </Box>
      </Box>
      <BotttomNav />
    </Box>
  );
}

export default Navbar;
