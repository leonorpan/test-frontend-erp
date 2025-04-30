"use client";
import React from "react";
import {
  Navbar,
  Avatar,
  NavbarBrand,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  Bars4Icon,
  HomeIcon,
  BookOpenIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
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
      <div className="flex min-h-screen">
        <Sidebar aria-label="Sidebar" className="h-screen">
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HomeIcon}>
                Dashboard
              </SidebarItem>
              <SidebarItem href="#" icon={BookOpenIcon}>
                FAQs
              </SidebarItem>
              <SidebarItem href="#" icon={LifebuoyIcon}>
                Help
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
