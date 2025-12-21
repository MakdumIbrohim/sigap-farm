'use client';

import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main content */}
      <main className="flex-1 md:ml-64 transition-all duration-300">
        <div className="p-4 md:p-6 h-full overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;