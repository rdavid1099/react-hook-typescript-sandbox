import React, {useEffect} from 'react';
import './App.css';
import {WrapperComponent} from "./WrapperComponent";
import {Routes} from "./Routes";

function App() {
  useEffect(() => {
    console.log("App load")

    return () => console.log("App unmount")
  }, [])

  return (
    <WrapperComponent>
      <Routes />
    </WrapperComponent>
  );
}

export default App;
