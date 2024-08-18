// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="navbar p-4 rounded-md bg-base-100 flex items-center shadow-md justify-between h-[70px] relative">
//       <div className="flex-none">
//         <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             className="inline-block h-5 w-5 stroke-current">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
//         {/* Dropdown menu */}
//         {isOpen && (
//           <div className="absolute mt-2 p-2 bg-white rounded-md shadow-lg left-0 top-full z-50">
//             <ul>
//               <li>
//                 <Link to="/prediction" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={closeMenu}>
//                   Prediction
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/marketplace" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={closeMenu}>
//                   Marketplace
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/postendpoint" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={closeMenu}>
//                   PostEndpoint
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//       <div className="flex-1 text-center">
//         <a className="btn btn-ghost text-xl">FARMLINK</a>
//       </div>
//       <div className="flex-none"></div>
//     </div>
//   );
// };
