import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Layout } from 'antd';
import Head from 'next/head';

const { Content, Footer } = Layout;

const AppLayout = ({ children, title, subTitle }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>{title} | 스쿨룩스 재고관리</title>
            </Head>
            <Layout className="site-layout">
                <PageHeader title={title} subTitle={subTitle} />
                <Content style={{ margin: '0 16px' }}>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, minHeight: 360 }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Skoolooks Uniform ©2021 Created by Seo Chung Sik
                </Footer>
            </Layout>
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppLayout;
