import React, { useMemo, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navigation from "../Components/Navigation";

function Dashboard({ onLogout }) {
  const BRAND = useMemo(
    () => ({
      logoSrc: "/recruitment.png",
      name: "Human Resources Information System",
      sub: "Staff & Admin",
    }),
    []
  );

  const navItems = useMemo(
    () => [
      { key: "dashboard", label: "Dashboard", icon: "grid" },
      { key: "message", label: "Message", icon: "chat" },
      { key: "setting", label: "Setting", icon: "gear" },
    ],
    []
  );

  const [active, setActive] = useState("dashboard");
  const [q, setQ] = useState("");

  const Icon = ({ name, className = "" }) => {
    const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
    const stroke = { stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

    if (name === "users")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle {...stroke} cx="9" cy="7" r="4" />
          <path {...stroke} d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path {...stroke} d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );

    if (name === "building")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
          <path {...stroke} d="M4 22h16" />
          <path {...stroke} d="M9 6h2" />
          <path {...stroke} d="M13 6h2" />
          <path {...stroke} d="M9 10h2" />
          <path {...stroke} d="M13 10h2" />
          <path {...stroke} d="M9 14h2" />
          <path {...stroke} d="M13 14h2" />
          <path {...stroke} d="M10 22v-4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" />
        </svg>
      );

    if (name === "userPlus")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle {...stroke} cx="8.5" cy="7" r="4" />
          <path {...stroke} d="M20 8v6" />
          <path {...stroke} d="M17 11h6" />
        </svg>
      );

    if (name === "userMinus")
      return (
        <svg {...common} className={className}>
          <path {...stroke} d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle {...stroke} cx="8.5" cy="7" r="4" />
          <path {...stroke} d="M17 11h6" />
        </svg>
      );

    if (name === "clock")
      return (
        <svg {...common} className={className}>
          <circle {...stroke} cx="12" cy="12" r="9" />
          <path {...stroke} d="M12 7v5l3 2" />
        </svg>
      );

    return null;
  };

  const counts = useMemo(() => {
    const employees = 1340;
    const departments = 14;
    const hirees = 36;
    const resignees = 8;
    return { employees, departments, hirees, resignees };
  }, []);

  const statCards = useMemo(
    () => [
      { label: "Employees", value: counts.employees, icon: "users" },
      { label: "Departments", value: counts.departments, icon: "building" },
      { label: "Hirees", value: counts.hirees, icon: "userPlus" },
      { label: "Resignees", value: counts.resignees, icon: "userMinus" },
    ],
    [counts]
  );

  const monthlyEmployees = useMemo(
    () => [
      { label: "Jan", total: 980, hired: 22 },
      { label: "Feb", total: 1015, hired: 18 },
      { label: "Mar", total: 1048, hired: 27 },
      { label: "Apr", total: 1082, hired: 24 },
      { label: "May", total: 1118, hired: 30 },
      { label: "Jun", total: 1155, hired: 19 },
      { label: "Jul", total: 1192, hired: 33 },
      { label: "Aug", total: 1230, hired: 29 },
      { label: "Sep", total: 1268, hired: 26 },
      { label: "Oct", total: 1294, hired: 21 },
      { label: "Nov", total: 1316, hired: 17 },
      { label: "Dec", total: 1340, hired: 23 },
    ],
    []
  );

  const positionData = useMemo(
    () => [
      { label: "Manager", value: 64 },
      { label: "Supervisor", value: 118 },
      { label: "Staff", value: 892 },
      { label: "Trainee", value: 176 },
      { label: "Intern", value: 90 },
    ],
    []
  );

  const attendanceData = useMemo(
    () => [
      { name: "John Smith", department: "Front Office", position: "Manager", timeIn: "08:00 AM", timeOut: "05:00 PM", status: "Present" },
      { name: "Helga Miller", department: "Human Resources", position: "Supervisor", timeIn: "08:03 AM", timeOut: "05:02 PM", status: "Present" },
      { name: "Jacob Bold", department: "Finance", position: "Staff", timeIn: "08:14 AM", timeOut: "05:00 PM", status: "Late" },
      { name: "Anna Walker", department: "Housekeeping", position: "Staff", timeIn: "07:56 AM", timeOut: "05:01 PM", status: "Present" },
      { name: "Michael Brown", department: "Security", position: "Supervisor", timeIn: "08:22 AM", timeOut: "05:00 PM", status: "Late" },
      { name: "Elena Harris", department: "Sales & Marketing", position: "Staff", timeIn: "—", timeOut: "—", status: "Absent" },
    ],
    []
  );

  const maxMonthlyTotal = useMemo(() => Math.max(...monthlyEmployees.map((item) => item.total)), [monthlyEmployees]);
  const maxPositionValue = useMemo(() => Math.max(...positionData.map((item) => item.value)), [positionData]);

  const attendanceSummary = useMemo(() => {
    const present = attendanceData.filter((item) => item.status === "Present").length;
    const late = attendanceData.filter((item) => item.status === "Late").length;
    const absent = attendanceData.filter((item) => item.status === "Absent").length;
    return { present, late, absent };
  }, [attendanceData]);

  const StatusBadge = ({ status }) => {
    const map = {
      Present: "bg-[#ebe5dc] text-[#8d6a3a]",
      Late: "bg-[#f3ece3] text-[#8d6a3a]",
      Absent: "bg-[#f7f3ee] text-[#8d6a3a]",
    };

    return <span className={`inline-flex items-center justify-center min-w-[74px] h-7 px-3 rounded-full text-xs font-medium ${map[status]}`}>{status}</span>;
  };

  return (
    <div className="h-screen w-full bg-[#eef1f5] overflow-hidden">
      <div className="h-full w-full bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] h-full">
          <Sidebar brand={BRAND} navItems={navItems} active={active} setActive={setActive} onLogout={onLogout} />

          <main className="bg-[#f4f5f7] h-full overflow-hidden flex flex-col">
            <Navigation q={q} setQ={setQ} />

            <div className="flex-1 min-h-0 p-5 overflow-hidden">
              <div className="h-full flex flex-col gap-4 min-h-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {statCards.map((c) => (
                    <div
                      key={c.label}
                      className="bg-white rounded-2xl p-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#f0f0f0]"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-[11px] text-[#7a7a7a]">{c.label}</div>
                          <div className="mt-1 text-2xl font-semibold text-[#2a2a2a] leading-tight">{c.value}</div>
                        </div>
                        <div className="h-8 w-8 rounded-xl border border-[#ece7df] bg-[#f6f1ea] grid place-items-center text-[#8d6a3a]">
                          <Icon name={c.icon} />
                        </div>
                      </div>
                      <div className="mt-2 text-[10px] text-[#9b9b9b]">
                        Updated:{" "}
                        {new Intl.DateTimeFormat("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }).format(new Date())}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-4">
                  <div className="bg-[#d9d1c6] rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#d1c7ba] overflow-hidden">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-[#2a2a2a]">Employee Statistics</div>
                        <div className="mt-1 text-xs text-[#5f5b56]">Monthly employee growth and hired employees.</div>
                      </div>

                      <div className="flex items-center gap-4 text-[11px] text-[#5f5b56]">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-[#f4ede4]" />
                          <span>Total employees</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-[#8d6a3a]" />
                          <span>Hired</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 h-[300px]">
                      <div className="h-full flex items-end gap-3 overflow-x-auto pb-2">
                        {monthlyEmployees.map((item) => {
                          const totalHeight = Math.max((item.total / maxMonthlyTotal) * 220, 18);
                          const hiredHeight = Math.max((item.hired / maxMonthlyTotal) * 220 * 5, 8);

                          return (
                            <div key={item.label} className="min-w-[52px] flex-1 flex flex-col items-center justify-end gap-2">
                              <div className="h-[240px] w-full flex items-end justify-center gap-1.5">
                                <div
                                  className="w-5 rounded-full bg-[#f4ede4]"
                                  style={{ height: `${totalHeight}px` }}
                                  title={`${item.total} employees`}
                                />
                                <div
                                  className="w-5 rounded-full bg-[#8d6a3a]"
                                  style={{ height: `${hiredHeight}px` }}
                                  title={`${item.hired} hired`}
                                />
                              </div>
                              <div className="text-[11px] text-[#5f5b56]">{item.label}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#d9d1c6] rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#d1c7ba] overflow-hidden">
                    <div>
                      <div className="text-sm font-semibold text-[#2a2a2a]">Position Chart</div>
                      <div className="mt-1 text-xs text-[#5f5b56]">Employee distribution by position.</div>
                    </div>

                    <div className="mt-5 space-y-4">
                      {positionData.map((item) => (
                        <div key={item.label}>
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-sm text-[#2a2a2a]">{item.label}</div>
                            <div className="text-sm font-semibold text-[#2a2a2a]">{item.value}</div>
                          </div>
                          <div className="mt-2 h-2.5 w-full rounded-full bg-[#ece4d9] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[#8d6a3a]"
                              style={{ width: `${(item.value / maxPositionValue) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-[#ece4d9] border border-[#d1c7ba] p-4">
                        <div className="text-[11px] text-[#5f5b56]">Top Position</div>
                        <div className="mt-1 text-base font-semibold text-[#2a2a2a]">Staff</div>
                      </div>
                      <div className="rounded-2xl bg-[#ece4d9] border border-[#d1c7ba] p-4">
                        <div className="text-[11px] text-[#5f5b56]">Total Positions</div>
                        <div className="mt-1 text-base font-semibold text-[#2a2a2a]">{positionData.length}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-h-0 bg-[#d9d1c6] rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#d1c7ba] overflow-hidden flex flex-col">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-[#2a2a2a]">Employee Attendees</div>
                      <div className="mt-1 text-xs text-[#5f5b56]">Daily employee attendance monitoring.</div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="inline-flex items-center gap-2 rounded-xl bg-[#ece4d9] border border-[#d1c7ba] px-3 h-10">
                        <div className="h-8 w-8 rounded-lg bg-[#f6f1ea] grid place-items-center text-[#8d6a3a]">
                          <Icon name="users" />
                        </div>
                        <div>
                          <div className="text-[10px] text-[#5f5b56] leading-none">Present</div>
                          <div className="mt-1 text-sm font-semibold text-[#2a2a2a] leading-none">{attendanceSummary.present}</div>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-xl bg-[#ece4d9] border border-[#d1c7ba] px-3 h-10">
                        <div className="h-8 w-8 rounded-lg bg-[#f6f1ea] grid place-items-center text-[#8d6a3a]">
                          <Icon name="clock" />
                        </div>
                        <div>
                          <div className="text-[10px] text-[#5f5b56] leading-none">Late</div>
                          <div className="mt-1 text-sm font-semibold text-[#2a2a2a] leading-none">{attendanceSummary.late}</div>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-xl bg-[#ece4d9] border border-[#d1c7ba] px-3 h-10">
                        <div className="h-8 w-8 rounded-lg bg-[#f6f1ea] grid place-items-center text-[#8d6a3a]">
                          <Icon name="userMinus" />
                        </div>
                        <div>
                          <div className="text-[10px] text-[#5f5b56] leading-none">Absent</div>
                          <div className="mt-1 text-sm font-semibold text-[#2a2a2a] leading-none">{attendanceSummary.absent}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex-1 min-h-0 overflow-auto">
                    <div className="min-w-[760px]">
                      <div className="grid grid-cols-[1.4fr_1.1fr_1fr_1fr_1fr_0.9fr] gap-3 px-4 py-3 rounded-2xl bg-[#ece4d9] text-[11px] font-medium text-[#5f5b56]">
                        <div>Employee</div>
                        <div>Department</div>
                        <div>Position</div>
                        <div>Time In</div>
                        <div>Time Out</div>
                        <div>Status</div>
                      </div>

                      <div className="mt-2 space-y-2">
                        {attendanceData.map((item) => (
                          <div
                            key={`${item.name}-${item.department}`}
                            className="grid grid-cols-[1.4fr_1.1fr_1fr_1fr_1fr_0.9fr] gap-3 items-center px-4 py-3 rounded-2xl border border-[#d1c7ba] bg-[#f6f1ea]"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="h-10 w-10 rounded-full bg-[#e5dbcd] grid place-items-center text-sm font-semibold text-[#8d6a3a]">
                                {item.name
                                  .split(" ")
                                  .slice(0, 2)
                                  .map((part) => part[0])
                                  .join("")}
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-medium text-[#2a2a2a] truncate">{item.name}</div>
                              </div>
                            </div>

                            <div className="text-sm text-[#4a4a4a]">{item.department}</div>
                            <div className="text-sm text-[#4a4a4a]">{item.position}</div>
                            <div className="text-sm text-[#4a4a4a]">{item.timeIn}</div>
                            <div className="text-sm text-[#4a4a4a]">{item.timeOut}</div>
                            <div>
                              <StatusBadge status={item.status} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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