import React from "react";
import MenuItem from "../components/MenuItem";
import Link from "next/link";

export default function Menu() {
  return (
    <div id="menu">
      <Link href={"/"}>
        <a className="logo">InPlayer</a>
      </Link>
      <ul className="menu-items">
        <MenuItem name="Kristijan Jovanovski" />
        <MenuItem name="Simonida Jovanovska" />
        <MenuItem name="Nikola Kuzmanoski" />
        <MenuItem name="Darko Mirchev" />
        <MenuItem name="Elena Draganovska" />
      </ul>
      {/* STYLES */}
      <style jsx>{`
        #menu {
          flex-basis: 300px;
          background: #122340;
          color: #fff;
          min-height: 100vh;
          padding: 20px;
        }
        ul {
          list-style: none;
        }
        .logo {
          padding: 1rem 0;
          text-transform: uppercase;
          font-size: 1.7rem;
          color: #fff;
          text-decoration: none;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
