import React, { useEffect, useRef } from "react";
import styles from "../styles/modal.module.scss";
import Link from "next/link";
import ids from "../data/testData";

const Modal = ({ data }) => {
  const body =
    ids.findIndex((id) => id.id.toString() === data) !== -1
      ? ids[ids.findIndex((id) => id.id.toString() === data)]
      : null;

  const link = useRef(null);
  useEffect(() => {
    const closeHandler = ({ key }) => {
      if (key === "Escape") {
        link.current.click();
      }
    };

    document.addEventListener("keydown", closeHandler);

    return () => document.removeEventListener("keydown", closeHandler);
  }, []);

  if (!body) {
    return (
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          <Link href="/">
            <a ref={link}>to home</a>
          </Link>
          <h1>data not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <Link href="/">
          <a ref={link}>to home</a>
        </Link>
        <h1>Params: {data}</h1>
        <p>Data: {body.body}</p>
      </div>
    </div>
  );
};

export default Modal;
