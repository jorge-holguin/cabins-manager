// src/components/Layout.tsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { Home, DollarSign, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" style={{ zIndex: 1300 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            CRM Cybercafé
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        style={{ width: drawerWidth }}
        PaperProps={{ style: { width: drawerWidth } }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItemButton component={Link} to="/dashboard/cabins">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Cabinas" />
          </ListItemButton>
          <ListItemButton component={Link} to="/dashboard/expenses">
            <ListItemIcon>
              <DollarSign />
            </ListItemIcon>
            <ListItemText primary="Gastos" />
          </ListItemButton>
          <ListItemButton component={Link} to="/dashboard/reports">
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Reportes" />
          </ListItemButton>
        </List>
      </Drawer>
      <main style={{ flexGrow: 1, padding: '24px', marginLeft: drawerWidth }}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
