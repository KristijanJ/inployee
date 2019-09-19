import React from "react";
import Link from "next/link";

export default function Menu(props) {
  return (
    <div id="main">
      {props.employee}
      {/* STYLES */}
      <style jsx>{`
        #main {
          background: #efefef;
          min-height: 100vh;
          padding: 20px;
          flex: 1;
        }
      `}</style>
    </div>
  );
}
