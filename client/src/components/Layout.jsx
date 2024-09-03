import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentDashBoard from '../pages/StudentDashBoard';
import Header from './Header';

function Layout() {
  return (
    <>
      <Header />
      <div className="flex">
        <StudentDashBoard />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
