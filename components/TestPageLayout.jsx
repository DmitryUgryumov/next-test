import React from "react";
import Link from "next/link";

const TestPageLayout = ({ children }) => {
  return (
    <section>
      <h1>Страницы:</h1>
      <Link href="/test-page/first-page">
        <a>first</a>
      </Link>
      <br />
      <Link href="/test-page/second-page">
        <a>second</a>
      </Link>

      <div>{children}</div>
    </section>
  );
};

export default TestPageLayout;
