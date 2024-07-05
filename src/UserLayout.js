import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ManagerSidebar from './components/ManagerSidebar';
import HRSidebar from './components/HRSidebar'

const UserLayout = () => {
  const userType = localStorage.getItem('userType') || 'NewCandidate';
  return (
    <div>
      {userType === 'Employee' && <Sidebar />}
      {userType === 'Manager' && <ManagerSidebar />}
      {userType === 'HR' && <HRSidebar />}
      <Outlet />
    </div>
  );
};

export default UserLayout;
