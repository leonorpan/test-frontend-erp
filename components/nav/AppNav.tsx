"use client";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { Navbar, Avatar, NavbarBrand } from "flowbite-react";
import React from "react";

const AppNav = ({}: Readonly<{}>) => {
  return (
    <Navbar fluid>
      <div className="flex items-center gap-2">
        <NavbarBrand>
          <img
            src="/gh_small_logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </NavbarBrand>
        <Bars4Icon className="size-6" />
      </div>
      <div className="flex items-center gap-1">
        <MoonIcon className="size-6 text-gray-600" />
        <Avatar
          img="https://i.pravatar.cc/40?user=gh"
          alt="avatar of Jese"
          rounded
        />
      </div>
    </Navbar>
  );
};

export default AppNav;
