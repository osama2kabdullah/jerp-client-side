import { Dropdown } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const DropdownLinks = () => {
  return (
    <>
      <Dropdown.Item>
        <Link to='/dashboard'>Dashboard</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link>Settings</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link>Earnings</Link>
      </Dropdown.Item>
    </>
  );
};

export default DropdownLinks;
