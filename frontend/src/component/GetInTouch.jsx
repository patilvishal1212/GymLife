// import React from "react";


// export default function GetInTouch(){
//   return (
//     <div className="py-16 bg-neutral-900 text-white">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
//         <div><i className="fa fa-map-marker"></i><p>333 Middle Winchendon Rd, Rindge, NH 03461</p></div>
//         <div><i className="fa fa-mobile"></i><ul><li>125-711-811</li><li>125-668-886</li></ul></div>
//         <div><i className="fa fa-envelope"></i><p>Support.gymcenter@gmail.com</p></div>
//       </div>
//     </div>
    
//   );
// }




import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <div className="bg-neutral-900 py-10 gettouch-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-2xl text-red-500 mt-1" />
            <p className="text-gray-700">
              333 Middle Winchendon Rd, Rindge,<br /> NH 03461
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start space-x-4">
            <FaMobileAlt className="text-2xl text-blue-500 mt-1" />
            <ul className="text-gray-700 space-y-1">
              <li>125-711-811</li>
              <li>125-668-886</li>
            </ul>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-2xl text-blue-500 mt-1" />
            <p className="text-gray-700">Support.gymcenter@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;