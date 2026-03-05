import { useState } from "react";
import { Menu, Bell, Moon, Search, X } from "lucide-react";

const Navbar = ({ setSidebarOpen }) => {

  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={26} />
        </button>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 w-72">
          <Search size={18} className="text-gray-500 mr-2" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm text-gray-700 dark:text-gray-200 placeholder-gray-500"
          />
        </div>

      </div>


      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">

        {/* Mobile Search Icon */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setMobileSearchOpen(true)}
        >
          <Search size={24} />
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          <Bell size={24} />
        </button>

        {/* Theme */}
        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          <Moon size={24} />
        </button>

      </div>


      {/* MOBILE SEARCH BAR */}
      {mobileSearchOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-800 flex items-center px-4 gap-3 md:hidden">

          <Search size={20} />

          <input
            autoFocus
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none bg-transparent"
          />

          <button onClick={() => setMobileSearchOpen(false)}>
            <X size={22} />
          </button>

        </div>
      )}

    </header>
  );
};

export default Navbar;