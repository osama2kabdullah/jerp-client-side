import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { signOut } from "firebase/auth";
import auth from '../../../firebase.init';

const UserAvatar = () => {
    return (
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
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