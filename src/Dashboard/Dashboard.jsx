import React, { useMemo, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navigation from "../Components/Navigation";

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

    return null;
  };

  const ChevronDown = ({ className = "" }) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const CalendarIcon = ({ className = "" }) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 2v3M16 2v3M3 9h18M5 6h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const counts = useMemo(() => {
    const employees = 0;
    const departments = 0;
    const hirees = 0;
    const resignees = 0;
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

  const DEPARTMENTS = useMemo(
    () => [
      "C'S",
      "Central Executive Office",
      "Commissary",
      "F&B Culinary",
      "F&B Service",
      "Finance",
      "Front Office",
      "Housekeeping",
      "Human Resources",
      "Office of the Resident Manager",
      "Sales & Marketing",
      "Security",
      "Technical Services",
      "The Cocoon Spa",
    ],
    []
  );

  const OUTLETS_BY_DEPT = useMemo(
    () => ({
      "C'S": ["Cashier Counter", "Retail Shelving Area", "Stock Room"],
      "Central Executive Office": ["General Manager's Office", "Administrative Assistant's Hub", "Executive Meeting Room"],
      Commissary: ["Butcher Shop", "Bakery", "Central Cold Storage", "Garde Manger"],
      "F&B Culinary": ["Hot Line Kitchen", "Pastry Kitchen", "Butcher Station", "Preparation Area"],
      "F&B Service": ["Fine Dining Restaurant", "Lobby Lounge", "Pool Bar", "Room Service"],
      Finance: ["Accounting Office", "Purchasing Office", "Income Audit Desk", "Cashier Vault"],
      "Front Office": ["Reception Desk", "Concierge", "Bell Desk", "Night Audit Station"],
      Housekeeping: ["Linen Room", "Laundry Area", "Housekeeping Pantry", "Lost and Found Office"],
      "Human Resources": ["Recruitment Office", "Training Room", "Staff Clinic", "Personnel File Room"],
      "Office of the Resident Manager": ["Resident Manager's Office", "Executive Lounge", "Duty Manager's Desk"],
      "Sales & Marketing": ["Banquet Sales Office", "Catering Office", "Events Coordination Desk", "Social Media Hub"],
      Security: ["CCTV Room", "Guard House", "Patrol Route Checkpoints", "Key Control Room"],
      "Technical Services": ["Engineering Workshop", "Boiler Room", "HVAC Control Room", "Carpentry Shop"],
      "The Cocoon Spa": ["Treatment Room (Massage)", "Salon Chair", "Nail Station"],
    }),
    []
  );

  const POSITIONS = useMemo(() => ["Manager", "Supervisor", "Staff", "Trainee", "Intern"], []);

  const EMPLOYMENT_STATUSES = useMemo(
    () => ["Regular", "Probationary", "Contractual", "Part-Time", "Trainee", "Intern"],
    []
  );

  const [employeeForm, setEmployeeForm] = useState({
    employeeNo: "",
    firstName: "",
    middleName: "",
    lastName: "",
    birthdate: "",
    civilStatus: "",
    bloodType: "",
    address: "",
    contactNo: "",
    department: "",
    outlet: "",
    position: "",
    employmentStatus: "",
    dateHired: "",
    sss: "",
    philHealth: "",
    pagIbig: "",
    tin: "",
    salaryRate: "",
  });

  const outletOptions = useMemo(() => {
    const d = employeeForm.department;
    return d && OUTLETS_BY_DEPT[d] ? OUTLETS_BY_DEPT[d] : [];
  }, [employeeForm.department, OUTLETS_BY_DEPT]);

  const age = useMemo(() => {
    if (!employeeForm.birthdate) return "";
    const b = new Date(employeeForm.birthdate);
    if (Number.isNaN(b.getTime())) return "";
    const now = new Date();
    let years = now.getFullYear() - b.getFullYear();
    const m = now.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < b.getDate())) years -= 1;
    return years < 0 ? "" : String(years);
  }, [employeeForm.birthdate]);

  const inputBase =
    "mt-1 w-full h-10 px-3 rounded-xl border border-[#e7e7e7] bg-white text-sm text-[#2a2a2a] outline-none focus:border-[#8d6a3a] focus:ring-2 focus:ring-[#8d6a3a]/10";

  const selectBase =
    "mt-1 w-full h-10 px-3 pr-10 rounded-xl border border-[#e7e7e7] bg-white text-sm text-[#2a2a2a] outline-none focus:border-[#8d6a3a] focus:ring-2 focus:ring-[#8d6a3a]/10 appearance-none";

  const dateBase =
    "mt-1 w-full h-10 px-3 pr-10 rounded-xl border border-[#e7e7e7] bg-white text-sm text-[#2a2a2a] outline-none focus:border-[#8d6a3a] focus:ring-2 focus:ring-[#8d6a3a]/10 appearance-none cursor-pointer hover:border-[#dcdcdc] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-10 [&::-webkit-calendar-picker-indicator]:h-10 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-inner-spin-button]:opacity-0";

  const labelBase = "text-xs text-[#7a7a7a]";

  const digitsOnly = (v) => String(v || "").replace(/\D+/g, "");

  const setField = (key) => (e) => setEmployeeForm((p) => ({ ...p, [key]: e.target.value }));
  const setDigitsField = (key) => (e) => setEmployeeForm((p) => ({ ...p, [key]: digitsOnly(e.target.value) }));

  const setDepartment = (e) => {
    const v = e.target.value;
    setEmployeeForm((p) => ({
      ...p,
      department: v,
      outlet: "",
    }));
  };

  const handleClear = () => {
    setEmployeeForm({
      employeeNo: "",
      firstName: "",
      middleName: "",
      lastName: "",
      birthdate: "",
      civilStatus: "",
      bloodType: "",
      address: "",
      contactNo: "",
      department: "",
      outlet: "",
      position: "",
      employmentStatus: "",
      dateHired: "",
      sss: "",
      philHealth: "",
      pagIbig: "",
      tin: "",
      salaryRate: "",
    });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    const payload = { ...employeeForm, age, employeeNo: employeeForm.employeeNo ? `EM-${employeeForm.employeeNo}` : "" };
    console.log("Add Employee:", payload);
  };

  const CalendarPanel = () => {
    const today = new Date();
    const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
    const [selected, setSelected] = useState(() => new Date(today.getFullYear(), today.getMonth(), today.getDate()));

    const WEEKDAYS = useMemo(() => ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], []);

    const sameDay = (a, b) =>
      a &&
      b &&
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();

    const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);

    const monthLabel = useMemo(
      () =>
        new Intl.DateTimeFormat("en-US", {
          month: "long",
          year: "numeric",
        }).format(view),
      [view]
    );

    const cells = useMemo(() => {
      const y = view.getFullYear();
      const m = view.getMonth();
      const firstDow = new Date(y, m, 1).getDay();
      const daysInMonth = new Date(y, m + 1, 0).getDate();
      const prevMonthDays = new Date(y, m, 0).getDate();

      const out = [];
      for (let i = 0; i < 42; i++) {
        const idx = i - firstDow;
        const dayNum = idx + 1;

        let date;
        let inMonth = true;

        if (dayNum <= 0) {
          const d = prevMonthDays + dayNum;
          date = new Date(y, m - 1, d);
          inMonth = false;
        } else if (dayNum > daysInMonth) {
          const d = dayNum - daysInMonth;
          date = new Date(y, m + 1, d);
          inMonth = false;
        } else {
          date = new Date(y, m, dayNum);
          inMonth = true;
        }

        out.push({ date, inMonth });
      }
      return out;
    }, [view]);

    const onPick = (d) => {
      setSelected(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
      setView(new Date(d.getFullYear(), d.getMonth(), 1));
    };

    return (
      <div className="w-full">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setView((v) => addMonths(v, -1))}
            className="h-9 w-9 rounded-xl border border-[#e7e7e7] bg-white grid place-items-center hover:bg-[#fafafa]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="text-sm font-semibold text-[#2a2a2a]">{monthLabel}</div>

          <button
            type="button"
            onClick={() => setView((v) => addMonths(v, 1))}
            className="h-9 w-9 rounded-xl border border-[#e7e7e7] bg-white grid place-items-center hover:bg-[#fafafa]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-y-2">
          {WEEKDAYS.map((d) => (
            <div key={d} className="text-[11px] text-[#9b9b9b] text-center font-medium">
              {d}
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-7 gap-y-2">
          {cells.map((c, idx) => {
            const isSelected = sameDay(c.date, selected);
            const isToday = sameDay(c.date, today);
            const baseText = c.inMonth ? "text-[#2a2a2a]" : "text-[#c9c9c9]";
            const ringToday = isToday && !isSelected ? "ring-1 ring-[#d9d9d9]" : "";
            const hover = isSelected ? "" : "hover:bg-[#f3f4f6]";
            return (
              <button
                key={idx}
                type="button"
                onClick={() => onPick(c.date)}
                className={`h-10 w-full grid place-items-center rounded-xl ${hover} transition`}
              >
                <span
                  className={[
                    "h-8 w-8 grid place-items-center rounded-full text-sm",
                    baseText,
                    ringToday,
                    isSelected ? "bg-[#111111] text-white" : "",
                  ].join(" ")}
                >
                  {c.date.getDate()}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
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
                        <div className="h-8 w-8 rounded-xl border border-[#ececec] bg-[#fbfbfb] grid place-items-center text-[#8d6a3a]">
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

                <div className="flex-1 min-h-0">
                  <div className="h-full min-h-0 grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-4">
                    <div className="bg-white rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#f0f0f0] h-full overflow-hidden flex flex-col">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-[#2a2a2a]">Add Employee Data</div>
                          <div className="mt-1 text-xs text-[#8a8a8a]">Fill out the employee information below.</div>
                        </div>
                      </div>

                      <form id="add-employee-form" onSubmit={handleAddEmployee} className="mt-4 flex-1 min-h-0 overflow-auto pr-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-1">
                          <div>
                            <div className={labelBase}>Employee No.</div>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#8a8a8a] select-none">
                                EM-
                              </span>
                              <input
                                value={employeeForm.employeeNo}
                                onChange={setDigitsField("employeeNo")}
                                inputMode="numeric"
                                pattern="[0-9]*"
                                className={`${inputBase} pl-12`}
                                placeholder="0000"
                              />
                            </div>
                          </div>

                          <div>
                            <div className={labelBase}>First Name</div>
                            <input value={employeeForm.firstName} onChange={setField("firstName")} className={inputBase} />
                          </div>

                          <div>
                            <div className={labelBase}>Middle Name</div>
                            <input value={employeeForm.middleName} onChange={setField("middleName")} className={inputBase} />
                          </div>

                          <div>
                            <div className={labelBase}>Last Name</div>
                            <input value={employeeForm.lastName} onChange={setField("lastName")} className={inputBase} />
                          </div>

                          <div>
                            <div className={labelBase}>Birthdate</div>
                            <div className="relative">
                              <input type="date" value={employeeForm.birthdate} onChange={setField("birthdate")} className={dateBase} />
                              <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                            </div>
                          </div>

                          <div>
                            <div className={labelBase}>Age</div>
                            <input value={age} readOnly className={`${inputBase} bg-[#fbfbfb]`} />
                          </div>

                          <div>
                            <div className={labelBase}>Civil Status</div>
                            <div className="relative">
                              <select value={employeeForm.civilStatus} onChange={setField("civilStatus")} className={selectBase}>
                                <option value="">Select</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Widowed">Widowed</option>
                                <option value="Separated">Separated</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                            </div>
                          </div>

                          <div>
                            <div className={labelBase}>Blood Type</div>
                            <div className="relative">
                              <select value={employeeForm.bloodType} onChange={setField("bloodType")} className={selectBase}>
                                <option value="">Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                            </div>
                          </div>

                          <div className="md:col-span-2 lg:col-span-3">
                            <div className={labelBase}>Address</div>
                            <input value={employeeForm.address} onChange={setField("address")} className={inputBase} />
                          </div>

                          <div>
                            <div className={labelBase}>Contact Number</div>
                            <input
                              value={employeeForm.contactNo}
                              onChange={setDigitsField("contactNo")}
                              inputMode="numeric"
                              pattern="[0-9]*"
                              className={inputBase}
                              placeholder="09XXXXXXXXX"
                            />
                          </div>

                          <div className="md:col-span-2 lg:col-span-3">
                            <div className="h-px w-full bg-[#eeeeee] rounded-full my-1" />
                          </div>

                          <div>
                            <div className={labelBase}>Department</div>
                            <div className="relative">
                              <select value={employeeForm.department} onChange={setDepartment} className={selectBase}>
                                <option value="">Select</option>
                                {DEPARTMENTS.map((d) => (
                                  <option key={d} value={d}>
                                    {d}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                            </div>
                          </div>

                          <div>
                            <div className={labelBase}>Outlet</div>
                            <div className="relative">
                              <select
                                value={employeeForm.outlet}
                                onChange={setField("outlet")}
                                className={`${selectBase} ${!employeeForm.department ? "bg-[#fbfbfb] text-[#9b9b9b]" : ""}`}
                                disabled={!employeeForm.department}
                              >
                                <option value="">{employeeForm.department ? "Select" : "Select Department first"}</option>
                                {outletOptions.map((o) => (
                                  <option key={o} value={o}>
                                    {o}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                            </div>
                          </div>

                          <div>
                            <div className={labelBase}>Position</div>
                            <div className="relative">
                              <select value={employeeForm.position} onChange={setField("position")} className={selectBase}>
                                <option value="">Select</option>
                                {POSITIONS.map((p) => (
                                  <option key={p} value={p}>
                                    {p}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                            </div>
                          </div>

                          <div>
                            <div className={labelBase}>Employment Status</div>
                            <div className="relative">
                              <select
                                value={employeeForm.employmentStatus}
                                onChange={setField("employmentStatus")}
                                className={selectBase}
                              >
                                <option value="">Select</option>
                                {EMPLOYMENT_STATUSES.map((s) => (
                                  <option key={s} value={s}>
                                    {s}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                            </div>
                          </div>

                          <div>
                            <div className={labelBase}>Date Hired</div>
                            <div className="relative">
                              <input type="date" value={employeeForm.dateHired} onChange={setField("dateHired")} className={dateBase} />
                              <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                            </div>
                          </div>

                          <div className="md:col-span-2 lg:col-span-3">
                            <div className="h-px w-full bg-[#eeeeee] rounded-full my-1" />
                          </div>

                          <div>
                            <div className={labelBase}>SSS</div>
                            <input value={employeeForm.sss} onChange={setField("sss")} className={inputBase} />
                          </div>

                          <div>
                            <div className={labelBase}>PhilHealth</div>
                            <input value={employeeForm.philHealth} onChange={setField("philHealth")} className={inputBase} />
                          </div>

                          <div>
                            <div className={labelBase}>Pag-Ibig</div>
                            <input value={employeeForm.pagIbig} onChange={setField("pagIbig")} className={inputBase} />
                          </div>

                          <div>
                            <div className={labelBase}>TIN</div>
                            <input value={employeeForm.tin} onChange={setField("tin")} className={inputBase} />
                          </div>

                          <div>
                            <div className={labelBase}>Salary Rate</div>
                            <input
                              type="number"
                              step="0.01"
                              value={employeeForm.salaryRate}
                              onChange={setField("salaryRate")}
                              className={inputBase}
                            />
                          </div>

                          <div className="md:col-span-2 lg:col-span-3 flex justify-end gap-2 pt-2">
                            <button
                              type="button"
                              onClick={handleClear}
                              className="h-9 px-4 rounded-xl border border-[#e7e7e7] bg-white text-sm text-[#2a2a2a] hover:bg-[#fafafa]"
                            >
                              Clear
                            </button>
                            <button
                              type="submit"
                              className="h-9 px-4 rounded-xl bg-[#8d6a3a] text-white text-sm font-medium hover:opacity-95"
                            >
                              Add Employee
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#f0f0f0] h-full overflow-hidden">
                      <CalendarPanel />
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