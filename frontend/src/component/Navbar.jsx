import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Classes", path: "/class-details" },
   
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-9">
          <img src={logo} alt="logo" className="w-45" />
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {items.map(i => (
            <NavLink
              key={i.name}
              to={i.path}
              className={({isActive}) => `text-sm uppercase tracking-wider ${isActive ? "text-orange-500" : "text-white/90 hover:text-orange-500"}`}
            >
              {i.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-white md:hidden" onClick={()=>setOpen(!open)}>☰</button>
          <button className="text-white" data-search-open>🔍</button>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`md:hidden bg-black/80 transition-all ${open ? "max-h-[400px] py-4" : "max-h-0 overflow-hidden"}`}>
        <div className="px-4 flex flex-col gap-3">
          {items.map(i => (
            <NavLink key={i.name} to={i.path} onClick={()=>setOpen(false)}
              className="text-white uppercase py-2 border-b border-white/10">
              {i.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
