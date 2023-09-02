import { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} onSidebarClose={toggleSidebar} />
      <div className="flex-1">
        <Header onSidebarOpen={toggleSidebar} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
