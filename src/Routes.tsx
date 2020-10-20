import React, {FC, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";

export const Routes: FC = () => {
  useEffect(() => {
    console.log("Routes load")
    return () => console.log("Routes unmount")
  })

  return (
    <Switch>
      <Route path="/" component={WelcomePage} />
    </Switch>
  )
}