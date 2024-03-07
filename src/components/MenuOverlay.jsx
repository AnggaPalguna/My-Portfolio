"use client";
import React, { useEffect, useRef } from "react";
import NavLink from "./Navlink";

const MenuOverlay = ({ links, onClose }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleClickInsideOverlay = (event) => {
      if (overlayRef.current && overlayRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("click", handleClickInsideOverlay);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("click", handleClickInsideOverlay);
    };
  }, [onClose]);

  const handleItemClick = () => {
    onClose();
  };

  return (
    <ul ref={overlayRef} className="flex flex-col py-3 leading-[35px] items-center text-xxl mt-0">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} onClick={handleItemClick} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
