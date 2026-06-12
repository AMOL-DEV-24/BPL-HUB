"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const menu = [
  { label: "Dashboard",           path: "/dashboard",             icon: "📊" },
  { label: "Players Management",  path: "/playersManagement",     icon: "👤" },
  { label: "Matches Management",  path: "/matchesManagement",     icon: "🏏" },
  { label: "Payments Management", path: "/paymentsManagement",    icon: "💳" },
  { label: "Points Table",        path: "/pointsTableManagement", icon: "📈" },
  { label: "Profile",             path: "/profile",               icon: "👤" },
  { label: "Settings",            path: "/settings",              icon: "⚙️" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileDrawer({ open, onClose }: Props) {
  const router   = useRouter();
  const pathname = usePathname();

  // ESC key closes drawer
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navigate = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`drawer-overlay ${open ? "drawer-overlay--visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`}
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="mobile-drawer__header">
          <span className="mobile-drawer__brand">⚡ BPL HUB</span>
          <button
            className="mobile-drawer__close"
            onClick={onClose}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav */}
        <nav className="mobile-drawer__menu">
          {menu.map((item) => {
            const active = pathname === item.path;
            return (
              <div
                key={item.path}
                className={`drawer-item ${active ? "drawer-item--active" : ""}`}
                onClick={() => navigate(item.path)}
              >
                <span className="drawer-item__icon">{item.icon}</span>
                <span className="drawer-item__label">{item.label}</span>
                {active && <span className="drawer-item__dot" />}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}