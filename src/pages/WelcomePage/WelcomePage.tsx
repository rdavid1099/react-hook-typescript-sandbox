import React, {FC, useEffect} from "react";
import logo from './logo.svg';

export const WelcomePage: FC = () => {
  useEffect(() => {
    console.log("WelcomePage load")

    return () => console.log("WelcomePage unmount")
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}