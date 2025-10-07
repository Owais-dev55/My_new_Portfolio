import React from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <div className="flex flex-row p-8">
      <div className="flex justify-between">
        <h1> Dev </h1>
    
        <ul className="flex gap-8 ml-20">
          {navItems.map((item) => (
            <div key={item.name}>
              <li>{item.name}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
