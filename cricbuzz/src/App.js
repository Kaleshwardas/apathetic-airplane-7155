import {Container} from "@chakra-ui/react"
import AllRoutes from "./Components/AllRoutes";
import Navbar2 from "./Components/Navbar2";

// import Navbar from "./Components/Navbar";
function App() {
  return (
    <Container  maxW="full" >
     {/* <Navbar/> */}
     <Navbar2/>
    <AllRoutes/>
    </Container>
  );
}

export default App;
