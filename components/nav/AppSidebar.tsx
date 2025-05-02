"use client";
import {
  HomeIcon,
  BookOpenIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import React from "react";

const AppSidebar = ({}: Readonly<{}>) => {
  return (
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
  );
};

export default AppSidebar;
