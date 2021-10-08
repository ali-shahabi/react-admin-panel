import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, { useState } from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const PrivateLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState();

  const handleSidebarCollapsed = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <>
      <Layout>
        <Sider
          style={{ height: '100vh' }}
          trigger={null}
          collapsible
          collapsed={sidebarCollapsed}
        >
          <div className='logo' />
          <Menu
            style={{ marginTop: '64px' }}
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            inlineCollapsed={sidebarCollapsed}
          >
            <Menu.Item key='1' icon={<UserOutlined />}>
              <Link to='/'>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<VideoCameraOutlined />}>
              <Link to='/users'>Users</Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<UploadOutlined />}>
              <Link to='/tracks'>Tracks</Link>
            </Menu.Item>
            <Menu.Item key='4' icon={<UploadOutlined />}>
              <Link to='/artists'>Artists</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>
            {sidebarCollapsed ? (
              <MenuUnfoldOutlined
                style={{ color: '#fff', fontSize: '24px' }}
                onClick={handleSidebarCollapsed}
              />
            ) : (
              <MenuFoldOutlined
                style={{ color: '#fff', fontSize: '24px' }}
                onClick={handleSidebarCollapsed}
              />
            )}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default PrivateLayout;
