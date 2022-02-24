import "../styles/globals.css";
import MainLayout from "../components/MainLayout";

// компонент рендерит всё приложение

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      {/*<style jsx global>*/}
      {/*  {`*/}
      {/*    body {*/}
      {/*      font-family: "Roboto", sans-serif;*/}
      {/*    }*/}
      {/*  `}*/}
      {/*</style>*/}
    </>
  );
}

export default MyApp;
