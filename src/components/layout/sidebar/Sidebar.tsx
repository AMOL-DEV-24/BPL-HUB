"use client";

import { usePathname, useRouter } from "next/navigation";

const menu = [
  { label: "Dashboard",           path: "/dashboard",             icon: "📊" },
  { label: "Players Management",  path: "/playersManagement",     icon: "👤" },
  { label: "Matches Management",  path: "/matchesManagement",     icon: "🏏" },
  { label: "Payments Management", path: "/paymentsManagement",    icon: "💳" },
  { label: "Points Table",        path: "/pointsTableManagement", icon: "📈" },
  { label: "Profile",             path: "/profile",               icon: "👤" },
  { label: "Settings",            path: "/settings",              icon: "⚙️" },
];

export default function Sidebar() {
  const router   = useRouter();
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">⚡ BPL HUB</div>

      <nav className="sidebar-menu">
        {menu.map((item) => {
          const active = pathname === item.path;
          return (
            <div
              key={item.path}
              className={`sidebar-item ${active ? "active" : ""}`}
              onClick={() => router.push(item.path)}
            >
              <span className="sidebar-item__icon">{item.icon}</span>
              <span className="sidebar-item__label">{item.label}</span>
              {active && <span className="sidebar-item__dot" />}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}