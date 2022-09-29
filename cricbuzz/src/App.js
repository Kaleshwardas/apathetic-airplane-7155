import {Container} from "@chakra-ui/react"
import AllRoutes from "./Components/AllRoutes";
import Navbar2 from "./Components/Navbar2";

import Navbar from "./Components/Navbar";
import { AppContext } from "./Context/AuthContentextProvider";
import { useContext } from "react";
function App() {
  const { state, dispatch } = useContext(AppContext);
  console.log(state)
  return (
    <Container  maxW="full" bg="#E3E6E3" h="500rem" >
    {state.login ? <Navbar2/>:<Navbar/>}
     {/* <Navbar/> */}
    
    <AllRoutes/>
    </Container>
  );
}

export default App;
