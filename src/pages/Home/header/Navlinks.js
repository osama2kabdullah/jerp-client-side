import { Navbar } from "flowbite-react";
import React from "react";
import CustomLink from "../../shared/CustomLink";

const Navlinks = () => {
  return (
    <Navbar.Collapse>
      <Navbar><CustomLink to='/'>Home</CustomLink></Navbar>
      <Navbar><CustomLink to='/aboutme'>About me</CustomLink></Navbar>
      <Navbar><CustomLink to='/'>Pricing</CustomLink></Navbar>
      <Navbar><CustomLink to='/'>Contact</CustomLink></Navbar>
    </Navbar.Collapse>
  );
};

export default Navlinks;
