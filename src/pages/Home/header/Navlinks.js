import { Navbar } from "flowbite-react";
import React from "react";

const Navlinks = () => {
  return (
    <Navbar.Collapse>
      <Navbar.Link href="/navbars" active={true}>
        Home
      </Navbar.Link>
      <Navbar.Link href="/navbars">About</Navbar.Link>
      <Navbar.Link href="/navbars">Services</Navbar.Link>
      <Navbar.Link href="/navbars">Pricing</Navbar.Link>
      <Navbar.Link href="/navbars">Contact</Navbar.Link>
    </Navbar.Collapse>
  );
};

export default Navlinks;
