import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../StyledNavbar";
import Footer from "../Footer";
function SharedLayout() {
  return (
    <>
      <Navbar/>
      <section>
        <Outlet/>
      </section>
      <Footer />
    </>
  )
}

export default SharedLayout