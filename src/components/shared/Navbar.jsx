import { useState } from "react";
import { NavLink } from "react-router";

import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenuItem,
  NavbarMenu,
  NavbarItem,
  Link,
  Badge,
} from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const value = true;

import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";
import { Star } from "../Icon";
import MyModal from "../HomePage/Modal";
import ProfileDropDown from "../HomePage/Dropdown";

function HeaderNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Eat & Drink",
    "Club",
    "Things to do",
    "Shopping",
    "Account",
    "Contact",
  ];

  return (
    <section>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          ></NavbarMenuToggle>
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-24">
          <NavbarBrand>
            <NavLink to="/">
              <img className="w-44" src="/Img/main-logo.png" alt="Main Logo" />
            </NavLink>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Device  */}

        <NavbarContent className="hidden sm:flex gap-4 w-full justify-center text-[]">
          <NavbarBrand>
            <NavLink to="/">
              <img className="w-44" src="/Img/main-logo.png" alt="Main Logo" />
            </NavLink>
          </NavbarBrand>

          <NavbarItem>
            <NavLink
              to="/drink"
              className="text-[#26395C]"
              style={({ isActive }) => ({
                color: isActive ? "#0E8BFF" : "black",
              })}
            >
              Eat & drink
            </NavLink>
          </NavbarItem>

          <NavbarItem>
            <NavLink
              to="/club"
              style={({ isActive }) => ({
                color: isActive ? "#0E8BFF" : "black",
              })}
              className="text-[#26395C] flex flex-row items-center justify-center"
            >
              Club
              <sup className="w-[41.95px] h-[16.5px] bg-[#0E8BFF] text-[#FFFFFF] text-[8px] rounded-[23px] flex items-center justify-center mb-5 gap-[2px]">
                <Star className="size-2" /> HOT
              </sup>
            </NavLink>
          </NavbarItem>

          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="none">
                  Things to do
                  <ChevronDownIcon
                    style={{ strokeWidth: 2 }}
                    className="text-[#0E8BFF] w-4 h-4 font-bold stroke-2"
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Example with disabled actions"
                disabledKeys={["edit", "delete"]}
              >
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem>
            <Link className="foreground">
              <NavLink to="/cart">
                <Badge
                  color="primary"
                  content={3}
                  shape="circle"
                  placement="top-left"
                  size="md"
                >
                  <img src="Img/navbar-logos/shopping-cart.png" alt="" />
                </Badge>
              </NavLink>
            </Link>
          </NavbarItem>

          <NavbarItem>
            {value === true ? <MyModal /> : <ProfileDropDown />}
            {/* <Dropdown>
              <DropdownTrigger>
                <Button variant="none">
                  <UserIcon className="text-[#26395C] w-4 h-4" /> Account
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="profile">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
          </NavbarItem>

          <NavbarItem>
            <Button radius="sm" className="bg-[#0E8BFF] text-[#FFFFFF] font-bold">
              Contact Now
            </Button>
          </NavbarItem>
        </NavbarContent>

        <div className="lg:hidden">
          <NavbarContent className="w-full" justify="end">
            <NavbarItem className="hidden lg:flex"> </NavbarItem>

            <NavbarItem>
              <Badge
                color="primary"
                content={3}
                shape="circle"
                placement="top-left"
                size="md"
              >
                <img src="Img/navbar-logos/shopping-cart.png" alt="" />
              </Badge>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="bg-[#F5FAFF]">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={index}>
                <Link className="w-full text-[#26395C] capitalize ">
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </div>
      </Navbar>
    </section>
  );
}

export default HeaderNavbar;
