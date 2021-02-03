import { Layout } from 'antd';
import sty from './basic.module.less';
import { menuRoutes, menuRouteType } from '../../routes';
import { NavLink, Route } from 'react-router-dom';
import { Menu } from 'antd';
// import { classNames } from '../../utils/classNames';
import Logo from './Logo';
import RightHeader from './RightHeader';
import { useState } from 'react';

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

function renderRoute(routeConfig: menuRouteType): unknown {
  if (routeConfig.menuItems) {
    return routeConfig.menuItems.map((route) => renderRoute(route));
  }
  if (!routeConfig.component) {
    return null;
  }
  const Instance = routeConfig.component;
  return (
    <Route key={routeConfig.path} exact path={routeConfig.path} {...routeConfig.routeProps}>
      <Instance key={routeConfig.path} />
    </Route>
  );
}

function renderMenuItem(routeConfig: menuRouteType): unknown {
  if (routeConfig.menuItems) {
    return (
      <SubMenu key={routeConfig.path} title={routeConfig.name} {...routeConfig.menuProps}>
        {routeConfig.menuItems.map((route) => renderMenuItem(route))}
      </SubMenu>
    );
  }
  return (
    <Menu.Item key={routeConfig.path}>
      <NavLink to={routeConfig.path}>{routeConfig.name}</NavLink>
    </Menu.Item>
  );
}

// export interface BasicLayoutProps {}

const BasicLayout: React.FC<unknown> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const defaultSelectedKeys: string[] = ['/home'];
  return (
    <Layout className={sty.main}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo collapsed={collapsed} />
        <Menu defaultSelectedKeys={defaultSelectedKeys} inlineCollapsed={collapsed} theme="dark" mode="inline">
          {menuRoutes.map((route) => renderMenuItem(route))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: 'transparent', padding: 0 }}>
          <RightHeader
            collapsed={collapsed}
            collMenu={(flag: boolean) => {
              setCollapsed(flag);
            }}
          />
        </Header>
        <Content>{menuRoutes.map((route) => renderRoute(route))}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
