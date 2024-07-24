import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from "@material-tailwind/react";

const GovDropdown = ({ icon, name, path, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-4 px-4 capitalize w-full text-left" // Adjusted for left alignment
        onClick={toggleDropdown}
      >
        {icon}
        <Typography color="inherit" className="font-medium capitalize text-sm"> {/* Adjusted for smaller font size */}
          {name}
        </Typography>
      </Button>
      {isOpen && (
        <div className="dropdown-content pl-8">
          {children.map(({ icon, name, path }) => (
            <NavLink key={name} to={path} className="block my-1">
              {({ isActive }) => (
                <Button
                  variant={isActive ? "gradient" : "text"}
                  color={isActive ? "blue" : "blue-gray"}
                  className="flex items-center gap-4 px-4 capitalize w-full text-left" // Adjusted for left alignment
                  fullWidth
                >
                  {icon}
                  <Typography color="inherit" className="font-medium capitalize text-sm"> {/* Adjusted for smaller font size */}
                    {name}
                  </Typography>
                </Button>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default GovDropdown;
