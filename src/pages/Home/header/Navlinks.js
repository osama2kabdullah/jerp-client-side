import { Navbar } from "flowbite-react";
import React from "react";
import CustomLink from "../../shared/CustomLink";

const Navlinks = () => {
  return (
    <Navbar.Collapse>
      <Navbar><CustomLink to='/'>Home</CustomLink></Navbar>
      <Navbar> <CustomLink to='/about'>About</CustomLink> </Navbar>
      <Navbar><CustomLink to='/'>Services</CustomLink></Navbar>
      <Navbar><CustomLink to='/'>Pricing</CustomLink></Navbar>
      <Navbar><CustomLink to='/'>Contact</CustomLink></Navbar>
    </Navbar.Collapse>
  );
};

export default Navlinks;
