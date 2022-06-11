import * as React from "react"
import Header from "./Header"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout

const Main = styled.main`
  background: white;
  color: black;
`
