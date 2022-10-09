import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { signOut } from "firebase/auth";
import auth from '../../../firebase.init';
import DropdownLinks from './DropdownLinks';

const UserAvatar = ({user}) => {
  const {displayName, email} = user;
    return (
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          {displayName}
        </span>
        <span className="block truncate text-sm font-medium">
          {email}
        </span>
      </Dropdown.Header>
      <DropdownLinks></DropdownLinks>
      <Dropdown.Divider />
      <Dropdown.Item>
        <button onClick={()=>signOut(auth).then(()=>localStorage.removeItem('access_token'))}>Sign out</button>
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
    );
};

export default UserAvatar;