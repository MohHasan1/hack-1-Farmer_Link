import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="bg-gray-900 h-20 flex items-center">
        <button className="ml-4 text-2xl" onClick={showSidebar}>
          <FaIcons.FaBars />
        </button>
        <h1 className="text-white text-center w-full text-xl">
          FARMLINK
        </h1>
      </div>
      <nav
        className={`bg-gray-900 fixed top-0 left-0 w-64 h-full transition-transform transform ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } z-10`}
      >
        <div className="flex justify-between items-center p-4">
          <button className="text-2xl" onClick={showSidebar}>
            <AiIcons.AiOutlineClose />
          </button>
        </div>
        <ul className="text-white">
          {SidebarData.map((item, index) => (
            <li key={index} className="p-4 hover:bg-gray-700">
              <Link to={item.path} onClick={showSidebar}>
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-4">{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {sidebar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-0"
          onClick={showSidebar}
        ></div>
      )}
    </IconContext.Provider>
  );
};

export default Sidebar;
