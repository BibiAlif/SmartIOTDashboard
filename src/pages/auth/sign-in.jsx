import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Input, Button, List, ListItem } from "@material-tailwind/react";

const SignIn = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 200);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleItemClick = (item) => {
    setInputValue(item);
    setSelectedItem(item);
    setShowDropdown(false);
  };

  const handleSignIn = () => 
  {
    if (selectedItem === "Public") 
    {
      navigate("../../dashboardPublic/homepublicmenu");
    } 
    else if (selectedItem === "Government") 
    {
      navigate("../../dashboardGov/govhome");
    } 
    else 
    {
      // Handle other categories or show an error
    }
  };

  const items = ["Public", "Government"];

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Welcome To Smart IOT Dashboard
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your email, password and category to Sign In.
          </Typography>
        </div>

        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Category
            </Typography>
            <Input
              size="lg"
              placeholder="Select an item"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {showDropdown && (
              <List className="mb-1 flex flex-col gap-6">
                {items.map((item, index) => (
                  <ListItem
                    key={index}
                    onClick={() => handleItemClick(item)}
                    className="cursor-pointer"
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            )}
          </div>

          <Button className="mt-6" fullWidth onClick={handleSignIn}>
            Sign In
          </Button>

          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Not registered?{" "}
            <a href="/signup" className="text-gray-900 ml-1">
              Create account
            </a>
          </Typography>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
          alt="Pattern"
        />
      </div>
    </section>
  );
};

export default SignIn;
