import React from "react"
import { Button } from "."
import { Page } from "./Page"

const App: React.FC<{}> = () => {
  return (
    <>
      <Button label="Button" onClick={() => {console.log("Click")}}/>
      <Page title="A simple React Template" />
    </>
  )
}

export default App
