import About from './About/About';
import Home from './Home';
import ProductDetail from './pages/product/ProductDetail';
import ProductList from './pages/product/ProductList/index';

export interface menuRouteType {
  name: string;
  menuProps?: unknown;
  path: string;
  routeProps?: unknown;
  menuItems?: menuRouteType[];
  component?: React.FC;
}

export const menuRoutes: menuRouteType[] = [
  {
    name: '商品',
    path: '/product',
    menuItems: [
      {
        name: '列表',
        path: '/product/list',
        component: ProductList,
      },
      {
        name: '详情',
        path: '/product/',
        component: ProductDetail,
      },
    ],
  },
  {
    name: '主页',
    menuProps: {},
    // menuItems: [],
    path: '/home',
    routeProps: {},
    component: Home,
  },
  {
    name: '关于',
    menuProps: {},
    // menuItems: [],
    path: '/about',
    routeProps: {},
    component: About,
  },
  // {
  //   menuType: 'subMenu',
  //   menuProps: {},
  //   menuItems: [],
  //   contentConfig: {
  //     routeProps: {},
  //     component: Home
  //   }
  // },
];
