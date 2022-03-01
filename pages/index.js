import MainLayout from "../components/MainLayout";
import Modal from "../components/Modal";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import ids from "../data/testData";

export default function Home({ showModalValue, data }) {
  const { push } = useRouter();
  console.log("render");

  return (
    <MainLayout title="home">
      <h1>Home page</h1>
      {showModalValue ? <Modal data={data} /> : null}

      <ul>
        {ids.map((id) => (
          <li key={id}>
            <Link href={`/${id.id}`}>
              <a>Open {id.id}</a>
            </Link>
          </li>
        ))}
      </ul>

      <Link href={(Math.random() * 1000).toString()}>
        <a>Open modal (random id)</a>
      </Link>
      {/*<button onClick={showModalHandler}>Open modal</button>*/}
    </MainLayout>
  );
}
