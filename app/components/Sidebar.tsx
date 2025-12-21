'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/' },
    { name: 'Map', href: '/map' },
    { name: 'Land Parcels', href: '/lands' },
    { name: 'Disasters', href: '/disasters' },
    { name: 'Reports', href: '/reports' },
    { name: 'Settings', href: '/settings' },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-blue-900 shadow-xl border-r border-blue-800 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo & Close Button */}
          <div className="p-4 border-b border-blue-800 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-white">SIGAP FARM</h1>
              <p className="text-xs text-blue-200">Post-Disaster Agriculture Information System</p>
            </div>
            <button
              onClick={onClose}
              className="md:hidden p-1 rounded-md text-blue-200 hover:text-white hover:bg-blue-800 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${pathname === item.href
                      ? 'bg-blue-800 text-white font-medium'
                      : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                      }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-blue-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">
                U
              </div>
              <div className="text-white">
                <p className="text-sm font-medium">User Name</p>
                <p className="text-xs text-blue-200">admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default Sidebar;