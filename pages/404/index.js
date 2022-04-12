import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import error from "../../styles/errors.module.scss";
import Head from "next/head";

// custom error page

const ErrorPage = () => {
  const router = useRouter();
  const { asPath: path } = router;
  const formatPath = path.split("/")[path.split("/").length - 1];

  const goBackHandler = () => {
    router.back();
  };
  console.log(error);

  return (
    <>
      <Head>
        <title>ошибка!!!!</title>
      </Head>
      <div className={error.error}>
        <h1 className={error.error__title}>Error 404</h1>
        <p className={error.error__description}>
          Страницы <span className={error.error__path}>"{formatPath}"</span>{" "}
          страницы не существует!!!
        </p>

        <Link href="/">
          <a className={error.error__link}>На главную</a>
        </Link>
        <br />
        <button className={error.error__back} onClick={goBackHandler}>
          Назад
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
