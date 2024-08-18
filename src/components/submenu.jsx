// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SubMenu = ({ item }) => {
//   const [subnav, setSubnav] = useState(false);

//   const showSubnav = () => setSubnav(!subnav);

//   return (
//     <>
//       <Link
//         to={item.path}
//         className="flex items-center p-4 hover:bg-gray-700"
//         onClick={item.subNav && showSubnav}
//       >
//         <div className="flex items-center">
//           {item.icon}
//           <span className="ml-4">{item.title}</span>
//         </div>
//         <div>
//           {item.subNav && subnav
//             ? item.iconOpened
//             : item.subNav
//             ? item.iconClosed
//             : null}
//         </div>
//       </Link>
//       {subnav &&
//         item.subNav.map((item, index) => (
//           <Link
//             to={item.path}
//             className="flex items-center p-4 pl-12 bg-gray-800 hover:bg-gray-700"
//             key={index}
//           >
//             {item.icon}
//             <span className="ml-4">{item.title}</span>
//           </Link>
//         ))}
//     </>
//   );
// };

// export default SubMenu;
