import React from "react";

function Navigation({ q, setQ }) {
  const Icon = ({ name, className = "" }) => {
    const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
    const stroke = { stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

    if (name === "search")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
          <path {...stroke} d="M16.3 16.3 21 21" />
        </svg>
      );

    if (name === "bell")
      return (
        <svg {...common} className={className}>
          <path
            {...stroke}
            d="M18 9.25a6 6 0 1 0-12 0c0 4.2-1.6 5.6-2.5 6.35-.35.29-.5.5-.5.9 0 .9.8 1.5 1.8 1.5h15.4c1 0 1.8-.6 1.8-1.5 0-.4-.15-.61-.5-.9C19.6 14.85 18 13.45 18 9.25Z"
          />
          <path {...stroke} d="M9.8 20a2.2 2.2 0 0 0 4.4 0" />
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
              <div className="text-sm font-semibold text-[#2a2a2a]">Admin</div>
              <div className="text-[11px] text-[#7a7a7a]">Admin</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#e7e0d6] flex items-center justify-center text-[#8d6a3a] font-semibold">
              AD
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