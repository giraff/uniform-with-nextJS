import React, { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import "../main.css";
// import WebFont from "webfontloader";
import { Layout } from "antd";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

const App = ({ Component }) => {
  // WebFont.load({
  //   google: {
  //     families: ["Open Sans", "Noto Sans KR", "Open Sans Condensed", "Oswald"],
  //   },
  // });

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = useCallback(() => {
    setCollapsed(!collapsed);
  });

  const LayoutStyle = useMemo(() => ({ minHeight: "100%" }), []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>스쿨룩스 재고관리</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        />
      </Head>
      <Layout style={LayoutStyle}>
        <Sidebar collapsed={collapsed} onCollapse={onCollapse} />
        <Component />
      </Layout>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
