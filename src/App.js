import Navbar from "./Components/Navbar";

import { useState } from "react";

function App() {
  const [isLogedin,setisLoggedin]=useState(false)
  return ( 
   <>
   
<Navbar data={setisLoggedin} intial={isLogedin}/>


   </>
  )
}

export default App;
