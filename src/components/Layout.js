import Head from "next/head";
import Navbar from "./Navbar";



function Layout (props){
  return (
    <div className="layout">
      <CustomHead />

      <Navbar />
      <div className="app-content">{props.children}</div>

      <style jsx>{`
        .layout {
          width: 100%;
          height: 100vh;
          background-color: var(--color-dim-white);
          display: flex;
        }
        .app-content {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
}

export default Layout;

function CustomHead() {
  return (
    <Head>
      <title>Covid Anchor</title>
      <link rel="stylesheet" href='/css/global.css' />
    </Head>
  );
}