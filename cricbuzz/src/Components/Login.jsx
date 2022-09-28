import { ChevronRightIcon } from "@chakra-ui/icons";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Box margin="auto" w="93%" marginTop="0.5rem">
      <HStack
        h="4rem"
        spacing="0"
        p="0"
        borderBottom="0.1px solid gray"
        bg="#ffffff"
      >
        <Box>
          <Link>
            <Text fontSize="xl" color="gray">
              Home <ChevronRightIcon />{" "}
            </Text>
          </Link>
        </Box>
        <Box>
          <Link>
            <Text fontSize="xl" fontWeight="bold">
              Account
            </Text>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Image
            marginLeft="1.4rem"
            marginRight="1rem"
            boxSize="10rem"
            h="3rem"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Cricbuzz_Logo.png"
            alt="crickbuzz logo"
          />
        </Box>
      </HStack>

      <Box
        margin="auto"
        textAlign="center"
        marginTop="7rem"
        h="30rem"
        w="30rem"
      >
        <Heading size="lg">Login / Sign Up</Heading>
        <Text p="1rem" fontSize="lg">
          We will send OTP to your email id
        </Text>
        <InputGroup margin="auto" marginTop="5rem" w="25rem">
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineMail size="30px" color="gray" />}
          />
          <Input
            border="none"
            borderBottom="1px solid gray"
            borderRadius="none"
            type="text"
            placeholder="Enter email your id"
          />
        </InputGroup>
        <InputGroup margin="auto" marginTop="1rem" w="25rem">
          <InputLeftElement
            pointerEvents="none"
            children={<AiFillLock size="30px" color="gray" />}
          />
          <Input
            border="none"
            borderBottom="1px solid gray"
            borderRadius="none"
            type="password"
            placeholder="Password"
          />
        </InputGroup>

        <Checkbox
          margin="auto"
          marginTop="2rem"
          colorScheme="green"
          defaultChecked
        >
          I agree with the Terms of Use and Privacy Policy of Cricbuzz
        </Checkbox>

        <Button w="20rem" fontSize="lg" margin="auto" marginTop="2rem" bg="#009070" colorScheme="#009070" variant="solid">
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
