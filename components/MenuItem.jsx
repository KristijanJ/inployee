import React from "react";
import Link from "next/link";

export default function MenuItem(props) {
  return (
    <div>
      <li>
        <Link href={`/employee/${props.name}`}>
          <a>{props.name}</a>
        </Link>
      </li>
      <style jsx>{`
        li {
          padding: 1rem;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
