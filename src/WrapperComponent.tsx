import React, {FC, useEffect} from "react";

export const WrapperComponent: FC = ({children}) => {
  useEffect(() => {
    console.log("Wrapper load")

    return () => console.log("Wrapper unmount")
  }, [])
  return (
    <div>
      {children}
    </div>
  )
}