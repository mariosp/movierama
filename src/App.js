import React, {useState} from 'react';
import './App.css';
import TopBar from "./Components/TopBar/TopBar";
import Main from "./Components/Main/Main";

const App = () => {
    const [searchKey, setSearchKey] = useState("")
    const handleInputChange = (searchInput) => {
        console.log(searchInput)
        setSearchKey(searchInput);
    }

  return (
      <>
      <TopBar handleInputChange={handleInputChange}/>
      <Main searchKey={searchKey}/>
      </>
  )
}

export default App;
