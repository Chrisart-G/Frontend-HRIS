import React, { useMemo, useState } from "react";

function Dashboard({ onLogout }) {
  const BRAND = useMemo(
    () => ({
      logoSrc: "/Logo.jpg",
      name: "L'Fisher Hotel",
      sub: "Staff & Admin",
    }),
    []
  );

  const navItems = useMemo(
    () => [
      { key: "dashboard", label: "Dashboard", icon: "grid" },
      { key: "guest", label: "Guest", icon: "users" },
      { key: "reservations", label: "Reservations", icon: "calendar" },
      { key: "rooms", label: "Rooms", icon: "bed" },
      { key: "message", label: "Message", icon: "chat" },
      { key: "staff", label: "Staff", icon: "id" },
      { key: "setting", label: "Setting", icon: "gear" },
    ],
    []
  );

  const cards = useMemo(
    () => [
      { label: "New Bookings", value: "604", trend: "+8.70%", trendUp: true, icon: "ticket" },
      { label: "Check In", value: "405", trend: "+8.70%", trendUp: true, icon: "in" },
      { label: "Check Out", value: "333", trend: "-8.70%", trendUp: false, icon: "out" },
      { label: "Total Revenue", value: "₱13,400,000", trend: "+8.70%", trendUp: true, icon: "money" },
    ],
    []
  );

  const ratings = useMemo(
    () => [
      { label: "Facilities", value: 4.1 },
      { label: "Services", value: 4.9 },
      { label: "Comfort", value: 4.5 },
      { label: "Location", value: 4.3 },
    ],
    []
  );

  const reservationByMonth = useMemo(
    () => [
      { m: "January", v: 186 },
      { m: "February", v: 305 },
      { m: "March", v: 237 },
      { m: "April", v: 73 },
      { m: "May", v: 209 },
      { m: "June", v: 214 },
    ],
    []
  );

  const bookingByPlatform = useMemo(
    () => [
      { label: "Direct Booking", value: 275, color: "#1f1a12" },
      { label: "Bookin.web", value: 200, color: "#dcd4c8" },
      { label: "AirBnb", value: 187, color: "#8d6a3a" },
      { label: "Others", value: 173, color: "#b7a58a" },
      { label: "Agonda", value: 90, color: "#6b5435" },
    ],
    []
  );

  const roomAvailability = useMemo(
    () => ({
      occupied: 350,
      available: 14,
      notAvailable: 55,
      pending: 80,
      segments: [
        { label: "Occupied", w: 62, c: "#8d6a3a" },
        { label: "Available", w: 15, c: "#dcd4c8" },
        { label: "Not Available", w: 4, c: "#1f1a12" },
        { label: "Pending", w: 19, c: "#b7a58a" },
      ],
    }),
    []
  );

  const bookingList = useMemo(
    () => [
      {
        id: "GA-334567",
        guest: "Solo Samson",
        roomType: "Standard",
        roomNo: "Room 333",
        duration: "6 Nights",
        dates: "May 10, 2025 - May 16, 2025",
        status: "Checked-In",
        statusTone: "green",
      },
      {
        id: "GA-334568",
        guest: "Mia Santos",
        roomType: "Deluxe",
        roomNo: "Room 210",
        duration: "2 Nights",
        dates: "May 11, 2025 - May 13, 2025",
        status: "Checked-Out",
        statusTone: "red",
      },
      {
        id: "GA-334569",
        guest: "Ken Dela Cruz",
        roomType: "Standard",
        roomNo: "Room 118",
        duration: "1 Night",
        dates: "May 12, 2025 - May 13, 2025",
        status: "Pending",
        statusTone: "amber",
      },
      {
        id: "GA-334570",
        guest: "Alyssa Reyes",
        roomType: "Suite",
        roomNo: "Room 501",
        duration: "3 Nights",
        dates: "May 12, 2025 - May 15, 2025",
        status: "Checked-In",
        statusTone: "green",
      },
    ],
    []
  );

  const tasks = useMemo(
    () => [
      {
        date: "May 20th 2025",
        title: "Front desk shift handover",
        body:
          "Review arrivals, pending requests, and VIP notes. Confirm keys, cash float, and open tickets before turnover.",
      },
      {
        date: "May 20th 2025",
        title: "Room inspection follow-up",
        body:
          "Recheck rooms flagged for maintenance. Update status and notify housekeeping for final touches.",
      },
    ],
    []
  );

  const [active, setActive] = useState("dashboard");
  const [q, setQ] = useState("");

  const maxMonth = Math.max(...reservationByMonth.map((x) => x.v));
  const overall = (ratings.reduce((a, r) => a + r.value, 0) / ratings.length).toFixed(1);

  const pieStyle = useMemo(() => {
    const total = bookingByPlatform.reduce((a, b) => a + b.value, 0);
    let acc = 0;
    const stops = bookingByPlatform
      .map((p) => {
        const from = (acc / total) * 360;
        acc += p.value;
        const to = (acc / total) * 360;
        return `${p.color} ${from}deg ${to}deg`;
      })
      .join(", ");
    return { background: `conic-gradient(${stops})` };
  }, [bookingByPlatform]);

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
    if (name === "ticket")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M4 7h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4Z" />
          <path {...stroke} d="M9 7v12" />
        </svg>
      );
    if (name === "in")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M4 12h10" />
          <path {...stroke} d="M10 8l4 4-4 4" />
          <path {...stroke} d="M20 5v14" />
        </svg>
      );
    if (name === "out")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M14 12H4" />
          <path {...stroke} d="M8 8l-4 4 4 4" />
          <path {...stroke} d="M20 5v14" />
        </svg>
      );
    if (name === "money")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M3 7h18v10H3z" />
          <path {...stroke} d="M7 7a4 4 0 0 0 0 10" />
          <path {...stroke} d="M17 7a4 4 0 0 1 0 10" />
          <path {...stroke} d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
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
    if (name === "plus")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M12 5v14" />
          <path {...stroke} d="M5 12h14" />
        </svg>
      );
    return null;
  };

  const statusPill = (tone, text) => {
    const map = {
      green: "bg-[#e7f5ec] text-[#2f7a48]",
      red: "bg-[#fde8e8] text-[#b42318]",
      amber: "bg-[#fff4e5] text-[#b35c00]",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-[11px] font-semibold ${map[tone] || "bg-[#f2f2f2] text-[#666]"}`}>
        {text}
      </span>
    );
  };

  const handleLogout = () => {
    if (typeof onLogout === "function") onLogout();
  };

  return (
    <div className="min-h-screen w-full bg-[#eef1f5]">
      <div className="min-h-screen w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] min-h-screen">
          <aside className="bg-[#e7e0d6] border-r border-[#e2ddd5] p-5 flex flex-col">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/60 flex items-center justify-center overflow-hidden">
                <img src={BRAND.logoSrc} alt="Logo" className="h-10 w-10 object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-[13px] font-semibold text-[#2a2a2a]">{BRAND.name}</div>
                <div className="text-[11px] text-[#6b6b6b]">{BRAND.sub}</div>
              </div>
            </div>

            <nav className="mt-6 space-y-1">
              {navItems.map((it) => {
                const on = it.key === active;
                return (
                  <button
                    key={it.key}
                    type="button"
                    onClick={() => setActive(it.key)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition cursor-pointer ${
                      on
                        ? "bg-white text-[#1d1d1d] shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
                        : "text-[#4a4a4a] hover:bg-white/60"
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

            <div className="mt-auto pt-6">
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

          <main className="bg-[#f4f5f7] min-h-screen">
            <div className="bg-white px-6 py-4 border-b border-[#ededed]">
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

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {cards.map((c) => (
                  <div
                    key={c.label}
                    className="bg-white rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#f0f0f0]"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs text-[#7a7a7a]">{c.label}</div>
                        <div className="mt-2 text-3xl font-semibold text-[#2a2a2a]">{c.value}</div>
                      </div>
                      <div className="h-9 w-9 rounded-xl border border-[#ececec] bg-[#fbfbfb] grid place-items-center text-[#8d6a3a]">
                        <Icon name={c.icon} />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-[11px] font-semibold ${
                          c.trendUp ? "bg-[#e7f5ec] text-[#2f7a48]" : "bg-[#fde8e8] text-[#b42318]"
                        }`}
                      >
                        {c.trend}
                      </span>
                      <span className="text-[11px] text-[#9b9b9b]">From last week</span>
                    </div>
                  </div>
                ))}

                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#f0f0f0]">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs text-[#7a7a7a]">Overall Rating</div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="text-3xl font-semibold text-[#2a2a2a]">{overall}</div>
                        <div className="text-[11px] px-2 py-1 rounded-full bg-[#f6f2ec] text-[#8d6a3a] font-semibold">
                          / 5
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] px-2 py-1 rounded-full bg-[#f6f6f6] border border-[#ececec] text-[#6b6b6b] font-semibold">
                      {overall}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {ratings.map((r) => {
                      const pct = Math.min(100, Math.max(0, (r.value / 5) * 100));
                      return (
                        <div key={r.label} className="flex items-center gap-3">
                          <div className="w-20.5 text-[11px] text-[#7a7a7a]">{r.label}</div>
                          <div className="flex-1 h-2 rounded-full bg-[#f0f0f0] overflow-hidden">
                            <div className="h-full bg-[#8d6a3a]" style={{ width: `${pct}%` }} />
                          </div>
                          <div className="w-8 text-[11px] text-[#6b6b6b] font-medium">{r.value.toFixed(1)}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#f0f0f0]">
                  <div className="text-sm font-semibold text-[#2a2a2a]">Reservation</div>
                  <div className="text-xs text-[#7a7a7a] mt-1">By months</div>

                  <div className="mt-5 space-y-3">
                    {reservationByMonth.map((m) => (
                      <div key={m.m} className="flex items-center gap-3">
                        <div className="w-17.5 text-[11px] text-[#7a7a7a]">{m.m}</div>
                        <div className="flex-1 h-7 rounded-lg bg-[#f3f3f3] overflow-hidden">
                          <div
                            className="h-full rounded-lg bg-[#dcd4c8]"
                            style={{ width: `${(m.v / maxMonth) * 100}%` }}
                          />
                        </div>
                        <div className="w-10 text-right text-[11px] text-[#6b6b6b] font-medium">{m.v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 text-[11px] text-[#6b6b6b]">
                    <span className="font-semibold">Trending up by 5.2%</span> this month ↗
                    <div className="text-[#9b9b9b] mt-1">Showing total visitors for the last 6 months</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#f0f0f0]">
                  <div className="text-sm font-semibold text-[#2a2a2a]">Booking</div>
                  <div className="text-xs text-[#7a7a7a] mt-1">By Platform</div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-6 items-center">
                    <div className="mx-auto h-42.5 w-42.5 rounded-full" style={pieStyle} />
                    <div className="space-y-2">
                      {bookingByPlatform.map((p) => (
                        <div key={p.label} className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
                            <span className="text-[11px] text-[#7a7a7a]">{p.label}</span>
                          </div>
                          <span className="text-[11px] text-[#6b6b6b] font-medium">{p.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 text-center text-[11px] text-[#6b6b6b]">
                    <span className="font-semibold">Trending up by 5.2%</span> this month ↗
                    <div className="text-[#9b9b9b] mt-1">Showing total visitors for the last 6 months</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#f0f0f0]">
                  <div className="text-sm font-semibold text-[#2a2a2a]">Room Availability</div>
                  <div className="text-xs text-[#7a7a7a] mt-1">Recent</div>

                  <div className="mt-5 h-12 rounded-2xl bg-[#f3f3f3] overflow-hidden flex">
                    {roomAvailability.segments.map((s) => (
                      <div key={s.label} style={{ width: `${s.w}%`, background: s.c }} />
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-7 w-1.5 rounded-full bg-[#8d6a3a]" />
                      <div>
                        <div className="text-[11px] text-[#7a7a7a]">Occupied</div>
                        <div className="text-2xl font-semibold text-[#2a2a2a]">{roomAvailability.occupied}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-7 w-1.5 rounded-full bg-[#dcd4c8]" />
                      <div>
                        <div className="text-[11px] text-[#7a7a7a]">Available</div>
                        <div className="text-2xl font-semibold text-[#2a2a2a]">{roomAvailability.available}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-7 w-1.5 rounded-full bg-[#b7a58a]" />
                      <div>
                        <div className="text-[11px] text-[#7a7a7a]">Pending</div>
                        <div className="text-2xl font-semibold text-[#2a2a2a]">{roomAvailability.pending}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-7 w-1.5 rounded-full bg-[#1f1a12]" />
                      <div>
                        <div className="text-[11px] text-[#7a7a7a]">Not Available</div>
                        <div className="text-2xl font-semibold text-[#2a2a2a]">{roomAvailability.notAvailable}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#f0f0f0]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-[#2a2a2a]">Booking List</div>
                    <div className="flex items-center gap-2">
                      <div className="hidden sm:flex items-center gap-2 bg-[#f6f6f6] border border-[#ececec] rounded-full px-4 h-9 w-60">
                        <Icon name="search" className="text-[#7a7a7a]" />
                        <input
                          placeholder="Search"
                          className="w-full bg-transparent outline-none text-sm text-[#2a2a2a] placeholder:text-[#9b9b9b]"
                        />
                      </div>
                      <button
                        type="button"
                        className="h-9 rounded-full border border-[#ececec] bg-[#fbfbfb] px-4 text-sm text-[#6b6b6b] hover:bg-[#f7f7f7] cursor-pointer"
                      >
                        All Status
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full min-w-190 text-left">
                      <thead>
                        <tr className="text-[11px] text-[#8a8a8a]">
                          <th className="py-3 font-semibold">Booking ID</th>
                          <th className="py-3 font-semibold">Guest Name</th>
                          <th className="py-3 font-semibold">Room Type</th>
                          <th className="py-3 font-semibold">Room Number</th>
                          <th className="py-3 font-semibold">Duration</th>
                          <th className="py-3 font-semibold">Check-in & Check-out</th>
                          <th className="py-3 font-semibold text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookingList.map((b) => (
                          <tr key={b.id} className="border-t border-[#f1f1f1] text-sm">
                            <td className="py-4 text-[#6b6b6b] font-medium">{b.id}</td>
                            <td className="py-4 text-[#2a2a2a]">{b.guest}</td>
                            <td className="py-4 text-[#6b6b6b]">{b.roomType}</td>
                            <td className="py-4 text-[#6b6b6b]">{b.roomNo}</td>
                            <td className="py-4 text-[#6b6b6b]">{b.duration}</td>
                            <td className="py-4 text-[#6b6b6b]">{b.dates}</td>
                            <td className="py-4 text-right">{statusPill(b.statusTone, b.status)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#f0f0f0]">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-[#2a2a2a]">Task</div>
                    <button
                      type="button"
                      className="h-9 w-9 rounded-xl border border-[#ececec] bg-[#fbfbfb] hover:bg-[#f7f7f7] grid place-items-center cursor-pointer"
                      aria-label="Add task"
                    >
                      <Icon name="plus" className="text-[#6b6b6b]" />
                    </button>
                  </div>

                  <div className="mt-4 space-y-4">
                    {tasks.map((t, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex flex-col items-center pt-1">
                          <span className="h-3 w-3 rounded-full bg-[#e7e0d6] border border-[#d9d2c8]" />
                          <span className="w-px flex-1 bg-[#eee7df]" />
                        </div>
                        <div className="flex-1 rounded-2xl bg-[#f6f2ec] border border-[#efe7dd] p-4">
                          <div className="text-[11px] text-[#7a7a7a] font-medium">{t.date}</div>
                          <div className="mt-1 text-sm font-semibold text-[#2a2a2a]">{t.title}</div>
                          <div className="mt-2 text-[12px] leading-relaxed text-[#6b6b6b]">{t.body}</div>
                          <button
                            type="button"
                            className="mt-2 text-[12px] font-semibold text-[#8d6a3a] hover:text-[#7c5d32] cursor-pointer"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;