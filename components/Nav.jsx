import React from "react";
import Link from "next/link";

const checkActiveClass = (activePath, path) =>
  activePath.includes(path) ? "link active" : "link";

const Nav = ({ activePath }) => {
  return (
    <>
      <style jsx>{`
        nav {
          padding: 10px 30px;
          display: flex;
          justify-content: space-around;
          background: rgba(0, 0, 0, 0.1);
        }
        nav a {
          padding: 5px;
          border: 1px black solid;
        }

        nav .active {
          color: darkblue;
          outline: 3px darkblue solid;
        }
      `}</style>

      <nav>
        <Link href="/counter">
          <a className={checkActiveClass(activePath, "counter")}>Counter</a>
        </Link>
        <br />
        <Link href="/test-page">
          <a className={checkActiveClass(activePath, "test-page")}>Test page</a>
        </Link>
        <br />
        <Link href="/posts">
          <a className={checkActiveClass(activePath, "posts")}>All posts</a>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
