import '../assets/css/layout.css';
import WeatherForecast from "../components/WeatherForecast.tsx";
import AuthorizeView from "../components/AuthorizeView.tsx";
import { Sidebar, Menu, MenuItem, SubMenu, MenuItemStyles } from 'react-pro-sidebar';
import { useState } from 'react';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutLink from '../components/LogoutButton.tsx';
import { BarChart, Diamond, Map, ShoppingCart } from '@mui/icons-material';
import { RiInkBottleFill } from 'react-icons/ri';
import { SidebarHeader } from '../components/Sidebar/SidebarHeader.tsx';


type Theme = 'light' | 'dark';

// const themes = {
//   light: {
//     sidebar: {
//       backgroundColor: '#ffffff',
//       color: '#607489',
//     },
//     menu: {
//       menuContent: '#fbfcfd',
//       icon: '#0098e5',
//       hover: {
//         backgroundColor: '#c5e4ff',
//         color: '#44596e',
//       },
//       disabled: {
//         color: '#9fb6cf',
//       },
//     },
//   },
//   dark: {
//     sidebar: {
//       backgroundColor: '#455A64',
//       color: '#8ba1b7',
//     },
//     menu: {
//       menuContent: '#56707C',
//       icon: '#FFF',
//       hover: {
//         backgroundColor: '#78909c',
//         color: '#b6c8d9',
//       },
//       disabled: {
//         color: '#3e5e7e',
//       },
//     },
//   },
// };

const themes = {
  light: {
    sidebar: {
      backgroundColor: '#ffffff',
      color: '#607489',
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#0098e5',
      hover: {
        backgroundColor: '#c5e4ff',
        color: '#44596e',
      },
      disabled: {
        color: '#9fb6cf',
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: '#0b2948',
      color: '#8ba1b7',
    },
    menu: {
      menuContent: '#082440',
      icon: '#f5f5f5',
      hover: {
        backgroundColor: '#00458b',
        color: '#b6c8d9',
      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const menuClasses = {
    root: 'ps-menu-root',
    menuItemRoot: 'ps-menuitem-root',
    subMenuRoot: 'ps-submenu-root',
    button: 'ps-menu-button',
    prefix: 'ps-menu-prefix',
    suffix: 'ps-menu-suffix',
    label: 'ps-menu-label',
    icon: 'ps-menu-icon',
    subMenuContent: 'ps-submenu-content',
    SubMenuExpandIcon: 'ps-submenu-expand-icon',
    disabled: 'ps-disabled',
    active: 'ps-active',
    open: 'ps-open',
  };

function Layout() {

    const [collapsed, setCollapsed] = useState(false);
    const [hasImage] = useState(false);
    const [theme] = useState<Theme>('dark');

    const menuItemStyles: MenuItemStyles = {
        root: {
          fontSize: '13px',
          fontWeight: 400,
        },
        icon: {
          color: themes[theme].menu.icon,
          [`&.${menuClasses.disabled}`]: {
            color: themes[theme].menu.disabled.color,
          },
        },
        SubMenuExpandIcon: {
          color: '#b6b7b9',
        },
        subMenuContent: ({ level }) => ({
          backgroundColor:
            level === 0
              ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
              : 'transparent',
        }),
        button: {
          [`&.${menuClasses.disabled}`]: {
            color: themes[theme].menu.disabled.color,
          },
          '&:hover': {
            backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
            color: themes[theme].menu.hover.color,
          },
        },
        label: ({ open }) => ({
          fontWeight: open ? 600 : undefined,
        }),
      };

    return (
        <div id='main-container'>
            <Sidebar
                collapsed={collapsed}
                breakPoint="md"
                backgroundColor={hexToRgba('#0b2948', 1)}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <SidebarHeader rtl={false} style={{ marginBottom: '24px', marginTop: '16px' }} />
                    <div style={{ flex: 1, marginBottom: '32px' }}>
                    <Menu menuItemStyles={menuItemStyles}>
                      <SubMenu
                        label="Charts"
                        icon={<BarChart />}
                        suffix={
                          <Badge>6</Badge>
                        }
                      >
                        <MenuItem> Pie charts</MenuItem>
                        <MenuItem> Line charts</MenuItem>
                        <MenuItem> Bar charts</MenuItem>
                      </SubMenu>
                      <SubMenu label="Maps" icon={<Map />}>
                        <MenuItem> Google maps</MenuItem>
                        <MenuItem> Open street maps</MenuItem>
                      </SubMenu>
                      <SubMenu label="Theme" icon={<RiInkBottleFill />}>
                        <MenuItem> Dark</MenuItem>
                        <MenuItem> Light</MenuItem>
                      </SubMenu>
                      <SubMenu label="Components" icon={<Diamond />}>
                        <MenuItem> Grid</MenuItem>
                        <MenuItem> Layout</MenuItem>
                        <SubMenu label="Forms">
                          <MenuItem> Input</MenuItem>
                          <MenuItem> Select</MenuItem>
                          <SubMenu label="More">
                            <MenuItem> CheckBox</MenuItem>
                            <MenuItem> Radio</MenuItem>
                          </SubMenu>
                        </SubMenu>
                      </SubMenu>
                      <SubMenu label="E-commerce" icon={<ShoppingCart />}>
                        <MenuItem> Product</MenuItem>
                        <MenuItem> Orders</MenuItem>
                        <MenuItem> Credit card</MenuItem>
                      </SubMenu>
                    </Menu>
                    </div>
                </div>
            </Sidebar>
            <main style={{ display: 'flex', flexGrow: '1' }}>
                <div id='content-container'>
                    <AuthorizeView>
                        <Box sx={{ flexGrow: 1 }}>
                            <AppBar position="static">
                                <Toolbar>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ mr: 2 }}
                                        onClick={ () => setCollapsed(!collapsed) }>
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        Application Name
                                    </Typography>
                                    <LogoutLink />
                                </Toolbar>
                            </AppBar>
                        </Box>
                        <div id="render-content">
                          <WeatherForecast />
                        </div>
                    </AuthorizeView>
                </div>
            </main>
        </div>
    );
}

export default Layout;