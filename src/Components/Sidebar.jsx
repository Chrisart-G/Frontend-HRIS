import React, { useMemo } from "react";

function Sidebar({ brand, navItems, active, setActive, onLogout }) {
  const Icon = ({ name, className = "" }) => {
    const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
    const stroke = { stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

    if (name === "grid")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M4 4h7v7H4V4Z" />
          <path {...stroke} d="M13 4h7v7h-7V4Z" />
          <path {...stroke} d="M4 13h7v7H4v-7Z" />
          <path {...stroke} d="M13 13h7v7h-7v-7Z" />
        </svg>
      );

    if (name === "users")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M16 19a4 4 0 0 0-8 0" />
          <path {...stroke} d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
          <path {...stroke} d="M20 19a3.5 3.5 0 0 0-3-3.4" />
          <path {...stroke} d="M17.5 4.3a4 4 0 0 1 0 7.4" />
        </svg>
      );

    if (name === "calendar")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M8 3v3M16 3v3" />
          <path {...stroke} d="M4.5 8.5h15" />
          <path {...stroke} d="M6 5.5h12a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 18 21.5H6A2.5 2.5 0 0 1 3.5 19V8A2.5 2.5 0 0 1 6 5.5Z" />
          <path {...stroke} d="M7.5 12h2M11 12h2M14.5 12h2" />
          <path {...stroke} d="M7.5 15.5h2M11 15.5h2M14.5 15.5h2" />
        </svg>
      );

    if (name === "bed")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M4 12V7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5V12" />
          <path {...stroke} d="M4 12h16" />
          <path {...stroke} d="M4 12v5.5M20 12v5.5" />
          <path {...stroke} d="M6 10.5h4a1.5 1.5 0 0 1 1.5 1.5V12H4v-0.5A1 1 0 0 1 5 10.5h1Z" />
          <path {...stroke} d="M13.5 10.5H19a1 1 0 0 1 1 1V12h-6.5v-0.5a1 1 0 0 1 0-1Z" />
        </svg>
      );

    if (name === "chat")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M7.5 18.5H7l-3.5 2v-3A4.5 4.5 0 0 1 8 3.5h8A4.5 4.5 0 0 1 20.5 8v4A4.5 4.5 0 0 1 16 16.5H10" />
          <path {...stroke} d="M8.5 9.5h7" />
          <path {...stroke} d="M8.5 12.5h4.5" />
        </svg>
      );

    if (name === "id")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M6 4.5h12A2.5 2.5 0 0 1 20.5 7v10A2.5 2.5 0 0 1 18 19.5H6A2.5 2.5 0 0 1 3.5 17V7A2.5 2.5 0 0 1 6 4.5Z" />
          <path {...stroke} d="M8 9h5" />
          <path {...stroke} d="M8 12.5h8" />
          <path {...stroke} d="M8 16h6" />
          <path {...stroke} d="M15.75 9.25h0.01" />
        </svg>
      );

    if (name === "gear")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M12 14.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z" />
          <path
            {...stroke}
            d="M19.4 13.5a7.8 7.8 0 0 0 .06-1.5 7.8 7.8 0 0 0-.06-1.5l2.05-1.6-2-3.46-2.5 1a7.7 7.7 0 0 0-2.6-1.5L12 2.5 9.65 4.94a7.7 7.7 0 0 0-2.6 1.5l-2.5-1-2 3.46 2.05 1.6A7.8 7.8 0 0 0 4.54 12c0 .5.04 1 .1 1.5l-2.05 1.6 2 3.46 2.5-1a7.7 7.7 0 0 0 2.6 1.5L12 21.5l2.35-2.44a7.7 7.7 0 0 0 2.6-1.5l2.5 1 2-3.46-2.05-1.6Z"
          />
        </svg>
      );

    if (name === "logout")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M10 7V6.5A2.5 2.5 0 0 1 12.5 4h5A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-5A2.5 2.5 0 0 1 10 17.5V17" />
          <path {...stroke} d="M4 12h9" />
          <path {...stroke} d="M7 9l-3 3 3 3" />
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