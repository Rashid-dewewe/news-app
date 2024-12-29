import { Navbar } from "./Components/NavBar";
import { NewsBoard } from "./Components/NewsBoard";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState('general');

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      
    </>
  )
}

export default App
