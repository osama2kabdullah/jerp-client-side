import { Button, Navbar } from "flowbite-react";
import React from "react";
import Navlinks from "./Navlinks";

const Header = () => {
  return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Jerp
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button>
      Login
    </Button>
    <Navbar.Toggle />
  </div>
  <Navlinks></Navlinks>
</Navbar>
  );
};

export default Header;
