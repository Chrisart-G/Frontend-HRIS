import React, { useMemo } from "react";

function Sidebar({ brand, navItems, active, setActive, onLogout }) {
  const Icon = ({ name, className = "" }) => {
    const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
    const stroke = { stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
    if (name === "grid")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
        </svg>
      );
    if (name === "users")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M17 21v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
          <path {...stroke} d="M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path {...stroke} d="M22 21v-1a3.5 3.5 0 0 0-2.5-3.35" />
          <path {...stroke} d="M16.5 3.65A4 4 0 0 1 18 11" />
        </svg>
      );
    if (name === "calendar")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M8 2v4M16 2v4" />
          <path {...stroke} d="M3 10h18" />
          <path {...stroke} d="M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        </svg>
      );
    if (name === "bed")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M3 10h18v8H3z" />
          <path {...stroke} d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
          <path {...stroke} d="M3 18v2M21 18v2" />
        </svg>
      );
    if (name === "chat")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
        </svg>
      );
    if (name === "id")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M4 7h16v14H4z" />
          <path {...stroke} d="M8 11h8" />
          <path {...stroke} d="M8 15h6" />
          <path {...stroke} d="M8 3h8v4H8z" />
        </svg>
      );
    if (name === "gear")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
          <path
            {...stroke}
            d="M19.4 15a7.8 7.8 0 0 0 .1-1 7.8 7.8 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a8.2 8.2 0 0 0-1.7-1l-.4-2.6H9.1L8.7 8a8.2 8.2 0 0 0-1.7 1l-2.4-1-2 3.4L4.6 13a7.8 7.8 0 0 0-.1 1 7.8 7.8 0 0 0 .1 1l-2 1.6 2 3.4 2.4-1a8.2 8.2 0 0 0 1.7 1l.4 2.6h5.8l.4-2.6a8.2 8.2 0 0 0 1.7-1l2.4 1 2-3.4Z"
          />
        </svg>
      );
    if (name === "logout")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M10 17l-1 0a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h1" />
          <path {...stroke} d="M16 7l5 5-5 5" />
          <path {...stroke} d="M21 12H10" />
        </svg>
      );
    return null;
  };

  const handleLogout = () => {
    if (typeof onLogout === "function") onLogout();
  };

  const safeBrand = useMemo(
    () => ({
      logoSrc: brand?.logoSrc || "/Logo.jpg",
      name: brand?.name || "L'Fisher Hotel",
      sub: brand?.sub || "Staff & Admin",
    }),
    [brand]
  );

  return (
    <aside className="bg-[#e7e0d6] border-r border-[#e2ddd5] p-5 flex flex-col h-screen sticky top-0 overflow-hidden">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-2xl bg-white/60 flex items-center justify-center overflow-hidden">
          <img src={safeBrand.logoSrc} alt="Logo" className="h-10 w-10 object-contain" />
        </div>
        <div className="leading-tight">
          <div className="text-[13px] font-semibold text-[#2a2a2a]">{safeBrand.name}</div>
          <div className="text-[11px] text-[#6b6b6b]">{safeBrand.sub}</div>
        </div>
      </div>

      <nav className="mt-6 space-y-1 flex-1 min-h-0 overflow-hidden">
        {navItems.map((it) => {
          const on = it.key === active;
          return (
            <button
              key={it.key}
              type="button"
              onClick={() => setActive(it.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition cursor-pointer ${
                on ? "bg-white text-[#1d1d1d] shadow-[0_10px_25px_rgba(0,0,0,0.06)]" : "text-[#4a4a4a] hover:bg-white/60"
              }`}
            >
              <span className={`${on ? "text-[#8d6a3a]" : "text-[#6b6b6b]"}`}>
                <Icon name={it.icon} />
              </span>
              <span className="font-medium">{it.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="pt-6">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-[#4a4a4a] hover:bg-white/60 cursor-pointer"
        >
          <Icon name="logout" className="text-[#6b6b6b]" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;