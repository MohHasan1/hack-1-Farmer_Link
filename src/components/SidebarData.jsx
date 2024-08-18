import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Prediction",
    path: "/prediction",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Marketplace",
    path: "/marketplace",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Consumer Requests", 
    path: "/consumer-demand",
    icon: <IoIcons.IoMdCart />,
    cName: "nav-text",
  },
  {
    title: "Add To Market-Place", 
    path: "/add-to-marketplace",
    icon: <IoIcons.IoMdCart />,
    cName: "nav-text",
  },
];
