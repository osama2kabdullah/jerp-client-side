import { Button, Navbar } from "flowbite-react";
import React from "react";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
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
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <UserAvatar></UserAvatar>
      <Navlinks></Navlinks>
    </Navbar>
  );
};

export default Header;
