import React from "react";

function Navigation({ q, setQ }) {
  const Icon = ({ name, className = "" }) => {
    const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
    const stroke = { stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
    if (name === "search")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M21 21l-4.3-4.3" />
          <path {...stroke} d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
        </svg>
      );
    if (name === "bell")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
          <path {...stroke} d="M13.7 21a2 2 0 0 1-3.4 0" />
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
    return null;
  };

  return (
    <div className="bg-white px-6 py-4 border-b border-[#ededed] sticky top-0 z-30">
      <div className="flex items-center justify-between gap-4">
        <div className="text-lg font-semibold text-[#2a2a2a]">Dashboard</div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-[#f6f6f6] border border-[#ececec] rounded-full px-4 h-10 w-[320px]">
            <Icon name="search" className="text-[#7a7a7a]" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              className="w-full bg-transparent outline-none text-sm text-[#2a2a2a] placeholder:text-[#9b9b9b]"
            />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="text-right leading-tight">
              <div className="text-sm font-semibold text-[#2a2a2a]">Don Frozae</div>
              <div className="text-[11px] text-[#7a7a7a]">Admin</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#e7e0d6] flex items-center justify-center text-[#8d6a3a] font-semibold">
              DF
            </div>
          </div>

          <button
            type="button"
            className="h-10 w-10 rounded-xl border border-[#ececec] bg-white hover:bg-[#fafafa] grid place-items-center cursor-pointer"
            aria-label="Notifications"
          >
            <Icon name="bell" className="text-[#6b6b6b]" />
          </button>
          <button
            type="button"
            className="h-10 w-10 rounded-xl border border-[#ececec] bg-white hover:bg-[#fafafa] grid place-items-center cursor-pointer"
            aria-label="Settings"
          >
            <Icon name="gear" className="text-[#6b6b6b]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;