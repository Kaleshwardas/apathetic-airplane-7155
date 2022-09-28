import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";

function Navbar2() {
  return (
    <Box >
      <Box margin="auto" w="93%" border="1px solid gray" marginTop="0.5rem">
        <HStack h="4rem" spacing="0" p="0" bg="#009070">
          <Box>
            <Image
              marginLeft="1.4rem"
              marginRight="1rem"
              boxSize="8rem"
              h="4rem"
              src="https://www.cricbuzz.com/images/cb_logo.svg"
              alt="crickbuzz logo"
            />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}

export default Navbar2;
