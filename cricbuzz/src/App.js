import {Container} from "@chakra-ui/react"
import AllRoutes from "./Components/AllRoutes";
import Navbar2 from "./Components/Navbar2";

import Navbar from "./Components/Navbar";
import { AppContext } from "./Context/AuthContentextProvider";
import { useContext } from "react";
import Footer from "./Components/Footer";
function App() {
  const { state, dispatch } = useContext(AppContext);
  // console.log(state)
  return (
    <Container  maxW="full" bg="#E3E6E3"  >
    {state.login ? <Navbar2/>:<Navbar/>}
     {/* <Navbar/> */}
    
    <AllRoutes/>
    {state.login ? "none":<Footer/>}
    {/* <Footer/> */}
    </Container>
  );
}

export default App;
