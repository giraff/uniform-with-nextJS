import React, { useMemo } from 'react';
import Link from 'next/Link';
import { Layout, Menu } from 'antd';
import {
    SmileOutlined,
    PieChartOutlined,
    TeamOutlined,
    IdcardOutlined,
    VerticalAlignBottomOutlined,
    DollarOutlined,
    InboxOutlined,
} from '@ant-design/icons';
import logoImage from '../pages/LOGO.png';

const { Sider } = Layout;
const { SubMenu } = Menu;
const Sidebar = ({ collapsed, onCollapse }) => {
    const IconSize = useMemo(() => ({ fontSize: '18px' }), []);
    const IconActive = useMemo(() => ({ fontSize: '18px', color: '' }), []);
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            width="250px"
        >
            <div className="logo">
                <img src={logoImage} alt="" />
            </div>
            <Menu theme="dark" mode="inline">
                <Menu.Item
                    key="profile"
                    disabled
                    icon={
                        collapsed ? (
                            <SmileOutlined style={IconSize} />
                        ) : (
                            <SmileOutlined style={IconActive} />
                        )
                    }
                >
                    <div className="user-info">
                        <div className="user-prefix">환영합니다.&nbsp;</div>황
                        현정
                        <div className="user-postfix">님</div>
                    </div>
                </Menu.Item>
                <Menu.Item
                    key="dashboard"
                    icon={<PieChartOutlined style={IconSize} />}
                >
                    <Link href="/">대시보드</Link>
                </Menu.Item>
                <SubMenu
                    key="product-wrapper"
                    icon={<InboxOutlined style={IconSize} />}
                    title="제품 관리"
                >
                    <Menu.Item key="product-list">
                        <Link href="/product/product-list">제품 목록</Link>
                    </Menu.Item>
                    <Menu.Item key="product-register">
                        <Link href="/product/product-register">제품 등록</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="incoming-wrapper"
                    icon={<VerticalAlignBottomOutlined style={IconSize} />}
                    title="입고"
                >
                    <Menu.Item key="incoming">
                        <Link href="/incoming/">입고</Link>
                    </Menu.Item>
                    <Menu.Item key="incoming-history">
                        <Link href="/incoming/incoming-history">입고 내역</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="outcoming-wrapper"
                    icon={<DollarOutlined style={IconSize} />}
                    title="판매"
                >
                    <Menu.Item key="outcoming">
                        <Link href="/outcoming">판매</Link>
                    </Menu.Item>
                    <Menu.Item key="outcoming-history">
                        <Link href="/outcoming/outcoming-history">
                            판매 내역
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="outcoming-calendar">
                        <Link href="/outcoming/outcoming-calendar">
                            판매 현황
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item
                    key="member"
                    icon={<TeamOutlined style={IconSize} />}
                >
                    <Link href="/member">멤버 관리</Link>
                </Menu.Item>
                <SubMenu
                    key="clients-wrapper"
                    icon={<IdcardOutlined style={IconSize} />}
                    title="판매 대상 관리"
                >
                    <Menu.Item key="clients-list">
                        <Link href="/clients/clients-list">판매 대상 목록</Link>
                    </Menu.Item>
                    <Menu.Item key="clients-register">
                        <Link href="/clients/clients-register">
                            판매 대상 등록
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
