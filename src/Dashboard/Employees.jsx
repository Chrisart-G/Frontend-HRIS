import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navigation from "../Components/Navigation";

function Employees({ onLogout, setCurrentPage }) {
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

  const [active, setActive] = useState("employees");
  const [q, setQ] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    if (active === "dashboard") {
      setCurrentPage("dashboard");
    }
  }, [active, setCurrentPage]);

  useEffect(() => {
    const updateTitle = () => {
      const titles = Array.from(document.querySelectorAll("div"));
      const navTitle = titles.find(
        (el) =>
          el.className &&
          typeof el.className === "string" &&
          el.className.includes("text-lg") &&
          el.className.includes("font-semibold") &&
          el.textContent?.trim() === "Dashboard"
      );

      if (navTitle) navTitle.textContent = "Employees Masterlist";
    };

    updateTitle();
    const timer = setTimeout(updateTitle, 50);
    return () => clearTimeout(timer);
  }, []);

  const departments = useMemo(
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

  const outletsByDepartment = useMemo(
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

  const positions = useMemo(() => ["Manager", "Supervisor", "Staff", "Trainee", "Intern"], []);
  const employmentStatuses = useMemo(
    () => ["Regular", "Probationary", "Contractual", "Part-Time", "Trainee", "Intern"],
    []
  );
  const civilStatuses = useMemo(() => ["Single", "Married", "Widowed", "Separated"], []);
  const bloodTypes = useMemo(() => ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], []);
  const sexes = useMemo(() => ["Male", "Female"], []);
  const religions = useMemo(() => ["Roman Catholic", "Christian", "Islam", "Iglesia Ni Cristo", "Born Again", "Seventh-day Adventist", "Other"], []);
  const systems = useMemo(() => ["HRIS", "Payroll", "Biometric", "Admin", "Staff"], []);

  const initialEmployees = useMemo(
    () => [
      {
        employeeNo: "EM-1001",
        firstName: "John",
        middleName: "",
        lastName: "Smith",
        department: "Front Office",
        outlet: "Reception Desk",
        position: "Manager",
        employmentStatus: "Regular",
        dateHired: "2021-03-12",
        birthdate: "1992-06-15",
        birthPlace: "Cebu City",
        age: "33",
        sex: "Male",
        nationality: "Filipino",
        civilStatus: "Single",
        bloodType: "O+",
        address: "Cebu City",
        contactNo: "09171234567",
        sss: "12-3456789-0",
        philHealth: "123456789012",
        pagIbig: "123456789012",
        tin: "123-456-789-000",
        salaryRate: "25000.00",
        religion: "Roman Catholic",
        noOfChildren: "0",
        sys: "HRIS",
      },
      {
        employeeNo: "EM-1002",
        firstName: "Helga",
        middleName: "",
        lastName: "Miller",
        department: "Human Resources",
        outlet: "Recruitment Office",
        position: "Supervisor",
        employmentStatus: "Regular",
        dateHired: "2022-01-08",
        birthdate: "1995-08-10",
        birthPlace: "Mandaue City",
        age: "29",
        sex: "Female",
        nationality: "Filipino",
        civilStatus: "Married",
        bloodType: "A+",
        address: "Mandaue City",
        contactNo: "09181234567",
        sss: "23-4567890-1",
        philHealth: "223456789012",
        pagIbig: "223456789012",
        tin: "223-456-789-000",
        salaryRate: "22000.00",
        religion: "Christian",
        noOfChildren: "1",
        sys: "Admin",
      },
      {
        employeeNo: "EM-1003",
        firstName: "Jacob",
        middleName: "",
        lastName: "Bold",
        department: "Finance",
        outlet: "Accounting Office",
        position: "Staff",
        employmentStatus: "Probationary",
        dateHired: "2024-02-20",
        birthdate: "1999-12-21",
        birthPlace: "Lapu-Lapu City",
        age: "25",
        sex: "Male",
        nationality: "Filipino",
        civilStatus: "Single",
        bloodType: "B+",
        address: "Lapu-Lapu City",
        contactNo: "09191234567",
        sss: "34-5678901-2",
        philHealth: "323456789012",
        pagIbig: "323456789012",
        tin: "323-456-789-000",
        salaryRate: "18000.00",
        religion: "Roman Catholic",
        noOfChildren: "0",
        sys: "Staff",
      },
    ],
    []
  );

  const emptyForm = {
    employeeNo: "",
    firstName: "",
    middleName: "",
    lastName: "",
    department: "",
    outlet: "",
    position: "",
    employmentStatus: "",
    dateHired: "",
    birthdate: "",
    birthPlace: "",
    sex: "",
    nationality: "",
    civilStatus: "",
    bloodType: "",
    address: "",
    contactNo: "",
    sss: "",
    philHealth: "",
    pagIbig: "",
    tin: "",
    salaryRate: "",
    religion: "",
    noOfChildren: "",
    sys: "",
  };

  const [employees, setEmployees] = useState(initialEmployees);
  const [form, setForm] = useState(emptyForm);

  const inputBase =
    "mt-2 w-full h-11 px-4 rounded-xl border border-[#cfc3b5] bg-[#fbf7f1] text-sm text-[#2a2a2a] outline-none transition focus:border-[#8d6a3a] focus:bg-white focus:ring-4 focus:ring-[#8d6a3a]/10";
  const selectBase =
    "mt-2 w-full h-11 px-4 pr-10 rounded-xl border border-[#cfc3b5] bg-[#fbf7f1] text-sm text-[#2a2a2a] outline-none transition focus:border-[#8d6a3a] focus:bg-white focus:ring-4 focus:ring-[#8d6a3a]/10 appearance-none";
  const dateBase =
    "mt-2 w-full h-11 px-4 pr-10 rounded-xl border border-[#cfc3b5] bg-[#fbf7f1] text-sm text-[#2a2a2a] outline-none transition focus:border-[#8d6a3a] focus:bg-white focus:ring-4 focus:ring-[#8d6a3a]/10 appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-10 [&::-webkit-calendar-picker-indicator]:h-10 [&::-webkit-calendar-picker-indicator]:cursor-pointer";
  const labelBase = "text-[11px] font-semibold text-[#6f665d] uppercase tracking-[0.14em]";
  const sectionCard = "rounded-2xl border border-[#d3c7b9] bg-[#efe7db] p-5 shadow-[0_8px_20px_rgba(0,0,0,0.04)]";
  const detailCard = "rounded-2xl border border-[#d3c7b9] bg-[#fbf7f1] overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.04)]";

  const digitsOnly = (v) => String(v || "").replace(/\D+/g, "");

  const setField = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));
  const setDigitsField = (key) => (e) => setForm((p) => ({ ...p, [key]: digitsOnly(e.target.value) }));

  const computeAge = (birthdate) => {
    if (!birthdate) return "";
    const b = new Date(birthdate);
    if (Number.isNaN(b.getTime())) return "";
    const now = new Date();
    let years = now.getFullYear() - b.getFullYear();
    const m = now.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < b.getDate())) years -= 1;
    return years < 0 ? "" : String(years);
  };

  const outletOptions = useMemo(() => {
    return form.department && outletsByDepartment[form.department] ? outletsByDepartment[form.department] : [];
  }, [form.department, outletsByDepartment]);

  const filteredEmployees = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return employees;

    return employees.filter((emp) =>
      [
        emp.employeeNo,
        emp.firstName,
        emp.middleName,
        emp.lastName,
        `${emp.firstName} ${emp.lastName}`,
        emp.department,
        emp.position,
        emp.employmentStatus,
        emp.outlet,
      ]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [employees, q]);

  const handleClear = () => {
    setForm(emptyForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      employeeNo: form.employeeNo ? `EM-${digitsOnly(form.employeeNo)}` : `EM-${String(employees.length + 1001)}`,
      age: computeAge(form.birthdate),
    };

    if (!payload.firstName || !payload.lastName || !payload.department || !payload.position) return;

    setEmployees((prev) => [payload, ...prev]);
    handleClear();
    setOpenModal(false);
  };

  const setDepartment = (e) => {
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      department: value,
      outlet: "",
    }));
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

  const FieldCard = ({ label, children, span = "" }) => (
    <div className={span}>
      <label className={labelBase}>{label}</label>
      {children}
    </div>
  );

  const DetailItem = ({ label, value, span = "" }) => (
    <div className={`${detailCard} ${span}`}>
      <div className="px-4 py-3 bg-[#ece4d9] border-b border-[#d9ccbe]">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6f665d]">{label}</div>
      </div>
      <div className="px-4 py-4 text-sm text-[#2a2a2a] min-h-[56px] flex items-center break-words">{value || "—"}</div>
    </div>
  );

  const selectedFullName = selectedEmployee
    ? [selectedEmployee.firstName, selectedEmployee.middleName, selectedEmployee.lastName].filter(Boolean).join(" ")
    : "";

  return (
    <div className="h-screen w-full bg-[#eef1f5] overflow-hidden">
      <div className="h-full w-full bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] h-full">
          <Sidebar brand={BRAND} navItems={navItems} active={active} setActive={setActive} onLogout={onLogout} />

          <main className="bg-[#f4f5f7] h-full overflow-hidden flex flex-col">
            <Navigation q={q} setQ={setQ} />

            <div className="flex-1 min-h-0 p-5 overflow-hidden">
              <div className="h-full flex flex-col gap-4 min-h-0">
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setOpenModal(true)}
                    className="h-11 px-5 rounded-xl bg-[#8d6a3a] text-white text-sm font-medium hover:opacity-95 cursor-pointer shadow-[0_10px_25px_rgba(141,106,58,0.18)]"
                  >
                    Add Employee
                  </button>

                  <div className="text-sm text-[#7a7a7a]">
                    Total Employees: <span className="font-semibold text-[#2a2a2a]">{employees.length}</span>
                  </div>
                </div>

                <div className="flex-1 min-h-0 bg-[#d9d1c6] rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#d1c7ba] overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-lg font-semibold text-[#2a2a2a]">Employee Masterlist</div>
                      <div className="mt-1 text-sm text-[#6f665d]">All added employee records will appear here.</div>
                    </div>
                  </div>

                  <div className="mt-4 flex-1 min-h-0 overflow-auto rounded-2xl border border-[#cfc3b5] bg-[#e4dbcf]">
                    <table className="w-full min-w-[1280px] table-fixed border-separate border-spacing-0">
                      <colgroup>
                        <col className="w-[110px]" />
                        <col className="w-[150px]" />
                        <col className="w-[140px]" />
                        <col className="w-[140px]" />
                        <col className="w-[100px]" />
                        <col className="w-[120px]" />
                        <col className="w-[100px]" />
                        <col className="w-[180px]" />
                        <col className="w-[130px]" />
                        <col className="w-[120px]" />
                        <col className="w-[130px]" />
                        <col className="w-[110px]" />
                      </colgroup>
                      <thead className="sticky top-0 z-10">
                        <tr>
                          {[
                            "Employee No.",
                            "Full Name",
                            "Department",
                            "Position",
                            "Age",
                            "Status",
                            "Blood",
                            "Address",
                            "Contact No.",
                            "Date Hired",
                            "Civil Status",
                            "Action",
                          ].map((header, index) => (
                            <th
                              key={header}
                              className={`bg-[#ece4d9] px-4 py-3 text-left text-[11px] font-medium text-[#6f665d] border-b border-[#cfc3b5] ${
                                index !== 11 ? "border-r border-[#d7ccbf]" : ""
                              }`}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {filteredEmployees.length > 0 ? (
                          filteredEmployees.map((emp, idx) => (
                            <tr key={`${emp.employeeNo}-${idx}`} className="bg-[#f6f1ea]">
                              <td className="px-4 py-4 text-sm font-medium text-[#2a2a2a] border-b border-r border-[#ddd2c5]">
                                {emp.employeeNo}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#2a2a2a] border-b border-r border-[#ddd2c5] break-words">
                                {[emp.firstName, emp.middleName, emp.lastName].filter(Boolean).join(" ")}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#4a4a4a] border-b border-r border-[#ddd2c5] break-words">
                                {emp.department}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#4a4a4a] border-b border-r border-[#ddd2c5] break-words">
                                {emp.position}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#4a4a4a] border-b border-r border-[#ddd2c5]">
                                {emp.age || "—"}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#4a4a4a] border-b border-r border-[#ddd2c5] break-words">
                                {emp.employmentStatus || "—"}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#4a4a4a] border-b border-r border-[#ddd2c5]">
                                {emp.bloodType || "—"}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#4a4a4a] border-b border-r border-[#ddd2c5] break-words">
                                {emp.address || "—"}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#4a4a4a] border-b border-r border-[#ddd2c5] break-words">
                                {emp.contactNo || "—"}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#4a4a4a] border-b border-r border-[#ddd2c5] break-words">
                                {emp.dateHired || "—"}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#4a4a4a] border-b border-r border-[#ddd2c5] break-words">
                                {emp.civilStatus || "—"}
                              </td>
                              <td className="px-4 py-4 text-sm text-[#4a4a4a] border-b border-[#ddd2c5]">
                                <button
                                  type="button"
                                  onClick={() => setSelectedEmployee(emp)}
                                  className="h-9 px-4 rounded-lg bg-[#8d6a3a] text-white text-sm font-medium hover:opacity-95"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={12} className="px-4 py-10 text-center text-sm text-[#6f665d] bg-[#f6f1ea]">
                              No employee records found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] flex items-center justify-center p-4">
          <div className="w-full max-w-7xl max-h-[95vh] overflow-hidden rounded-[28px] bg-[#f6f1ea] border border-[#d9cfc2] shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
            <div className="bg-gradient-to-r from-[#e7dccf] via-[#ece4d9] to-[#e7dccf] border-b border-[#d8ccbe] px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xl font-semibold text-[#2a2a2a]">Add Employee</div>
                  <div className="mt-1 text-sm text-[#6f665d]">Complete the employee details below to add a new record.</div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="h-11 w-11 rounded-2xl border border-[#d0c3b4] bg-white text-[#6f665d] hover:bg-[#faf7f2] text-lg shadow-sm"
                >
                  ×
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-full bg-white/80 border border-[#d7ccbf] text-xs font-medium text-[#6f665d]">
                  Theme matched with employee table
                </div>
                <div className="px-4 py-2 rounded-full bg-white/80 border border-[#d7ccbf] text-xs font-medium text-[#6f665d]">
                  Required: Firstname, Lastname, Department, Position
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-6 overflow-auto max-h-[calc(95vh-128px)]">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className={sectionCard}>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div>
                      <div className="text-base font-semibold text-[#2a2a2a]">Basic Information</div>
                      <div className="text-sm text-[#6f665d] mt-1">Main employee profile and work details.</div>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-[#8d6a3a] text-white flex items-center justify-center shadow-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FieldCard label="Employee No.">
                      <div className="relative">
                        <span className="absolute left-4 top-[58%] -translate-y-1/2 text-sm font-medium text-[#8a7b69]">EM-</span>
                        <input
                          value={form.employeeNo}
                          onChange={setDigitsField("employeeNo")}
                          inputMode="numeric"
                          className={`${inputBase} pl-14`}
                          placeholder="0000"
                        />
                      </div>
                    </FieldCard>

                    <FieldCard label="Lastname">
                      <input value={form.lastName} onChange={setField("lastName")} className={inputBase} required />
                    </FieldCard>

                    <FieldCard label="Middlename">
                      <input value={form.middleName} onChange={setField("middleName")} className={inputBase} />
                    </FieldCard>

                    <FieldCard label="Firstname">
                      <input value={form.firstName} onChange={setField("firstName")} className={inputBase} required />
                    </FieldCard>

                    <FieldCard label="Department">
                      <div className="relative">
                        <select value={form.department} onChange={setDepartment} className={selectBase} required>
                          <option value="">Select</option>
                          {departments.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-[58%] -translate-y-1/2 text-[#9b8d7b] pointer-events-none" />
                      </div>
                    </FieldCard>

                    <FieldCard label="Outlet">
                      <div className="relative">
                        <select
                          value={form.outlet}
                          onChange={setField("outlet")}
                          className={`${selectBase} ${!form.department ? "bg-[#f3eee8] text-[#9b9b9b]" : ""}`}
                          disabled={!form.department}
                        >
                          <option value="">{form.department ? "Select" : "Select Department first"}</option>
                          {outletOptions.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-[58%] -translate-y-1/2 text-[#9b8d7b] pointer-events-none" />
                      </div>
                    </FieldCard>

                    <FieldCard label="Position">
                      <div className="relative">
                        <select value={form.position} onChange={setField("position")} className={selectBase} required>
                          <option value="">Select</option>
                          {positions.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-[58%] -translate-y-1/2 text-[#9b8d7b] pointer-events-none" />
                      </div>
                    </FieldCard>

                    <FieldCard label="Employment Status">
                      <div className="relative">
                        <select value={form.employmentStatus} onChange={setField("employmentStatus")} className={selectBase}>
                          <option value="">Select</option>
                          {employmentStatuses.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-[58%] -translate-y-1/2 text-[#9b8d7b] pointer-events-none" />
                      </div>
                    </FieldCard>

                    <FieldCard label="Date Hired">
                      <div className="relative">
                        <input type="date" value={form.dateHired} onChange={setField("dateHired")} className={dateBase} />
                        <CalendarIcon className="absolute right-4 top-[58%] -translate-y-1/2 text-[#9b8d7b] pointer-events-none" />
                      </div>
                    </FieldCard>

                    <FieldCard label="Birth Date">
                      <div className="relative">
                        <input type="date" value={form.birthdate} onChange={setField("birthdate")} className={dateBase} />
                        <CalendarIcon className="absolute right-4 top-[58%] -translate-y-1/2 text-[#9b8d7b] pointer-events-none" />
                      </div>
                    </FieldCard>

                    <FieldCard label="Birth Place">
                      <input value={form.birthPlace} onChange={setField("birthPlace")} className={inputBase} />
                    </FieldCard>

                    <FieldCard label="Age">
                      <input value={computeAge(form.birthdate)} readOnly className={`${inputBase} bg-[#f3eee8]`} />
                    </FieldCard>

                    <FieldCard label="Sex">
                      <div className="relative">
                        <select value={form.sex} onChange={setField("sex")} className={selectBase}>
                          <option value="">Select</option>
                          {sexes.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-[58%] -translate-y-1/2 text-[#9b8d7b] pointer-events-none" />
                      </div>
                    </FieldCard>

                    <FieldCard label="Nationality">
                      <input value={form.nationality} onChange={setField("nationality")} className={inputBase} />
                    </FieldCard>
                  </div>
                </div>

                <div className={sectionCard}>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div>
                      <div className="text-base font-semibold text-[#2a2a2a]">Personal & Government Details</div>
                      <div className="text-sm text-[#6f665d] mt-1">Contact, benefits, and additional employee information.</div>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-[#8d6a3a] text-white flex items-center justify-center shadow-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2a5 5 0 0 0-5 5v1H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 6V7a3 3 0 0 1 6 0v1H9Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FieldCard label="Civil Status">
                      <div className="relative">
                        <select value={form.civilStatus} onChange={setField("civilStatus")} className={selectBase}>
                          <option value="">Select</option>
                          {civilStatuses.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-[58%] -translate-y-1/2 text-[#9b8d7b] pointer-events-none" />
                      </div>
                    </FieldCard>

                    <FieldCard label="Blood Type">
                      <div className="relative">
                        <select value={form.bloodType} onChange={setField("bloodType")} className={selectBase}>
                          <option value="">Select</option>
                          {bloodTypes.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-[58%] -translate-y-1/2 text-[#9b8d7b] pointer-events-none" />
                      </div>
                    </FieldCard>

                    <FieldCard label="Address" span="md:col-span-2">
                      <input value={form.address} onChange={setField("address")} className={inputBase} />
                    </FieldCard>

                    <FieldCard label="Contact No">
                      <input
                        value={form.contactNo}
                        onChange={setDigitsField("contactNo")}
                        className={inputBase}
                        inputMode="numeric"
                        placeholder="09XXXXXXXXX"
                      />
                    </FieldCard>

                    <FieldCard label="SSS">
                      <input value={form.sss} onChange={setField("sss")} className={inputBase} />
                    </FieldCard>

                    <FieldCard label="PhilHealth">
                      <input value={form.philHealth} onChange={setField("philHealth")} className={inputBase} />
                    </FieldCard>

                    <FieldCard label="Pag-Ibig">
                      <input value={form.pagIbig} onChange={setField("pagIbig")} className={inputBase} />
                    </FieldCard>

                    <FieldCard label="TIN">
                      <input value={form.tin} onChange={setField("tin")} className={inputBase} />
                    </FieldCard>

                    <FieldCard label="Salary Rate">
                      <input
                        type="number"
                        step="0.01"
                        value={form.salaryRate}
                        onChange={setField("salaryRate")}
                        className={inputBase}
                      />
                    </FieldCard>

                    <FieldCard label="Religion">
                      <div className="relative">
                        <select value={form.religion} onChange={setField("religion")} className={selectBase}>
                          <option value="">Select</option>
                          {religions.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-[58%] -translate-y-1/2 text-[#9b8d7b] pointer-events-none" />
                      </div>
                    </FieldCard>

                    <FieldCard label="No. Children">
                      <input
                        value={form.noOfChildren}
                        onChange={setDigitsField("noOfChildren")}
                        className={inputBase}
                        inputMode="numeric"
                      />
                    </FieldCard>

                    <FieldCard label="SYS">
                      <div className="relative">
                        <select value={form.sys} onChange={setField("sys")} className={selectBase}>
                          <option value="">Select</option>
                          {systems.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-[58%] -translate-y-1/2 text-[#9b8d7b] pointer-events-none" />
                      </div>
                    </FieldCard>
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 mt-6 pt-5 bg-[#f6f1ea] border-t border-[#e4dbcf] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClear}
                  className="h-11 px-5 rounded-xl border border-[#d8cec1] bg-white text-sm text-[#2a2a2a] hover:bg-[#faf7f2]"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="h-11 px-6 rounded-xl bg-[#8d6a3a] text-white text-sm font-medium hover:opacity-95 shadow-[0_10px_25px_rgba(141,106,58,0.18)]"
                >
                  Save Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedEmployee && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] flex items-center justify-center p-4">
          <div className="w-full max-w-7xl max-h-[95vh] overflow-hidden rounded-[28px] bg-[#f6f1ea] border border-[#d9cfc2] shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
            <div className="bg-gradient-to-r from-[#d9d1c6] via-[#ece4d9] to-[#d9d1c6] border-b border-[#d8ccbe] px-6 py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="h-16 w-16 rounded-3xl bg-[#8d6a3a] text-white flex items-center justify-center text-xl font-semibold shadow-[0_10px_25px_rgba(141,106,58,0.2)]">
                    {(selectedEmployee.firstName?.[0] || "").toUpperCase()}
                    {(selectedEmployee.lastName?.[0] || "").toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <div className="text-xl font-semibold text-[#2a2a2a] break-words">{selectedFullName || "Employee Information"}</div>
                    <div className="mt-1 text-sm text-[#6f665d] break-words">
                      {selectedEmployee.position || "—"} • {selectedEmployee.department || "—"}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <div className="px-3 py-1.5 rounded-full bg-white/80 border border-[#d7ccbf] text-xs font-medium text-[#6f665d]">
                        {selectedEmployee.employeeNo || "—"}
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-white/80 border border-[#d7ccbf] text-xs font-medium text-[#6f665d]">
                        {selectedEmployee.employmentStatus || "No Status"}
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-white/80 border border-[#d7ccbf] text-xs font-medium text-[#6f665d]">
                        {selectedEmployee.outlet || "No Outlet"}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEmployee(null)}
                  className="h-11 w-11 rounded-2xl border border-[#d0c3b4] bg-white text-[#6f665d] hover:bg-[#faf7f2] text-lg shadow-sm shrink-0"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="px-6 py-6 overflow-auto max-h-[calc(95vh-132px)]">
              <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-6">
                <div className="space-y-6">
                  <div className={sectionCard}>
                    <div className="text-base font-semibold text-[#2a2a2a] mb-4">Employee Profile</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <DetailItem label="Employee No." value={selectedEmployee.employeeNo} />
                      <DetailItem label="Department" value={selectedEmployee.department} />
                      <DetailItem label="Lastname" value={selectedEmployee.lastName} />
                      <DetailItem label="Firstname" value={selectedEmployee.firstName} />
                      <DetailItem label="Middlename" value={selectedEmployee.middleName} />
                      <DetailItem label="Outlet" value={selectedEmployee.outlet} />
                      <DetailItem label="Position" value={selectedEmployee.position} />
                      <DetailItem label="Employment Status" value={selectedEmployee.employmentStatus} />
                      <DetailItem label="Date Hired" value={selectedEmployee.dateHired} />
                      <DetailItem label="Birth Date" value={selectedEmployee.birthdate} />
                      <DetailItem label="Birth Place" value={selectedEmployee.birthPlace} />
                      <DetailItem label="Age" value={selectedEmployee.age} />
                      <DetailItem label="Sex" value={selectedEmployee.sex} />
                      <DetailItem label="Nationality" value={selectedEmployee.nationality} />
                    </div>
                  </div>

                  <div className={sectionCard}>
                    <div className="text-base font-semibold text-[#2a2a2a] mb-4">Personal Details</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <DetailItem label="Civil Status" value={selectedEmployee.civilStatus} />
                      <DetailItem label="Blood Type" value={selectedEmployee.bloodType} />
                      <DetailItem label="Religion" value={selectedEmployee.religion} />
                      <DetailItem label="No. Children" value={selectedEmployee.noOfChildren} />
                      <DetailItem label="Address" value={selectedEmployee.address} span="md:col-span-2" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className={sectionCard}>
                    <div className="text-base font-semibold text-[#2a2a2a] mb-4">Government & Contact Details</div>
                    <div className="grid grid-cols-1 gap-4">
                      <DetailItem label="Contact No" value={selectedEmployee.contactNo} />
                      <DetailItem label="SSS" value={selectedEmployee.sss} />
                      <DetailItem label="PhilHealth" value={selectedEmployee.philHealth} />
                      <DetailItem label="Pag-Ibig" value={selectedEmployee.pagIbig} />
                      <DetailItem label="TIN" value={selectedEmployee.tin} />
                      <DetailItem
                        label="Salary Rate"
                        value={selectedEmployee.salaryRate ? `₱${Number(selectedEmployee.salaryRate).toLocaleString()}` : ""}
                      />
                      <DetailItem label="SYS" value={selectedEmployee.sys} />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#d3c7b9] bg-[#ece4d9] p-5 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                    <div className="text-base font-semibold text-[#2a2a2a]">Quick Summary</div>
                    <div className="mt-3 space-y-3">
                      <div className="flex items-start justify-between gap-3 rounded-xl bg-white/80 border border-[#d8ccbe] px-4 py-3">
                        <span className="text-sm text-[#6f665d]">Full Name</span>
                        <span className="text-sm font-medium text-[#2a2a2a] text-right">{selectedFullName || "—"}</span>
                      </div>
                      <div className="flex items-start justify-between gap-3 rounded-xl bg-white/80 border border-[#d8ccbe] px-4 py-3">
                        <span className="text-sm text-[#6f665d]">Department</span>
                        <span className="text-sm font-medium text-[#2a2a2a] text-right">{selectedEmployee.department || "—"}</span>
                      </div>
                      <div className="flex items-start justify-between gap-3 rounded-xl bg-white/80 border border-[#d8ccbe] px-4 py-3">
                        <span className="text-sm text-[#6f665d]">Position</span>
                        <span className="text-sm font-medium text-[#2a2a2a] text-right">{selectedEmployee.position || "—"}</span>
                      </div>
                      <div className="flex items-start justify-between gap-3 rounded-xl bg-white/80 border border-[#d8ccbe] px-4 py-3">
                        <span className="text-sm text-[#6f665d]">Date Hired</span>
                        <span className="text-sm font-medium text-[#2a2a2a] text-right">{selectedEmployee.dateHired || "—"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 mt-6 pt-5 bg-[#f6f1ea] border-t border-[#e4dbcf] flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedEmployee(null)}
                  className="h-11 px-6 rounded-xl bg-[#8d6a3a] text-white text-sm font-medium hover:opacity-95 shadow-[0_10px_25px_rgba(141,106,58,0.18)]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employees;