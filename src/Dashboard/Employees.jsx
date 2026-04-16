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

  const positions = useMemo(() => ["Manager", "Supervisor", "Staff", "Trainee", "Intern"], []);

  const employmentStatuses = useMemo(
    () => ["Regular", "Probationary", "Contractual", "Part-Time", "Trainee", "Intern"],
    []
  );

  const initialEmployees = useMemo(
    () => [
      {
        employeeNo: "EM-1001",
        firstName: "John",
        middleName: "",
        lastName: "Smith",
        birthdate: "1992-06-15",
        age: "33",
        civilStatus: "Single",
        bloodType: "O+",
        address: "Cebu City",
        contactNo: "09171234567",
        department: "Front Office",
        position: "Manager",
        employmentStatus: "Regular",
        dateHired: "2021-03-12",
        sss: "12-3456789-0",
        philHealth: "123456789012",
        pagIbig: "123456789012",
        tin: "123-456-789-000",
        salaryRate: "25000.00",
      },
      {
        employeeNo: "EM-1002",
        firstName: "Helga",
        middleName: "",
        lastName: "Miller",
        birthdate: "1995-08-10",
        age: "29",
        civilStatus: "Married",
        bloodType: "A+",
        address: "Mandaue City",
        contactNo: "09181234567",
        department: "Human Resources",
        position: "Supervisor",
        employmentStatus: "Regular",
        dateHired: "2022-01-08",
        sss: "23-4567890-1",
        philHealth: "223456789012",
        pagIbig: "223456789012",
        tin: "223-456-789-000",
        salaryRate: "22000.00",
      },
      {
        employeeNo: "EM-1003",
        firstName: "Jacob",
        middleName: "",
        lastName: "Bold",
        birthdate: "1999-12-21",
        age: "25",
        civilStatus: "Single",
        bloodType: "B+",
        address: "Lapu-Lapu City",
        contactNo: "09191234567",
        department: "Finance",
        position: "Staff",
        employmentStatus: "Probationary",
        dateHired: "2024-02-20",
        sss: "34-5678901-2",
        philHealth: "323456789012",
        pagIbig: "323456789012",
        tin: "323-456-789-000",
        salaryRate: "18000.00",
      },
    ],
    []
  );

  const [employees, setEmployees] = useState(initialEmployees);
  const [form, setForm] = useState({
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
    position: "",
    employmentStatus: "",
    dateHired: "",
    sss: "",
    philHealth: "",
    pagIbig: "",
    tin: "",
    salaryRate: "",
  });

  const inputBase =
    "mt-1 w-full h-10 px-3 rounded-xl border border-[#ddd4c7] bg-white text-sm text-[#2a2a2a] outline-none focus:border-[#8d6a3a] focus:ring-2 focus:ring-[#8d6a3a]/10";
  const selectBase =
    "mt-1 w-full h-10 px-3 pr-10 rounded-xl border border-[#ddd4c7] bg-white text-sm text-[#2a2a2a] outline-none focus:border-[#8d6a3a] focus:ring-2 focus:ring-[#8d6a3a]/10 appearance-none";
  const dateBase =
    "mt-1 w-full h-10 px-3 pr-10 rounded-xl border border-[#ddd4c7] bg-white text-sm text-[#2a2a2a] outline-none focus:border-[#8d6a3a] focus:ring-2 focus:ring-[#8d6a3a]/10 appearance-none";
  const labelBase = "text-xs text-[#6f665d]";

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
      ]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [employees, q]);

  const handleClear = () => {
    setForm({
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
                        <col className="w-[90px]" />
                        <col className="w-[110px]" />
                        <col className="w-[90px]" />
                        <col className="w-[170px]" />
                        <col className="w-[130px]" />
                        <col className="w-[120px]" />
                        <col className="w-[130px]" />
                        <col className="w-[130px]" />
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
                            "Salary Rate",
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
                              <td className="px-4 py-4 text-sm text-[#4a4a4a] border-b border-[#ddd2c5] break-words">
                                {emp.salaryRate ? `₱${Number(emp.salaryRate).toLocaleString()}` : "—"}
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
        <div className="fixed inset-0 z-50 bg-black/35 flex items-center justify-center p-4">
          <div className="w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-3xl bg-[#f6f1ea] border border-[#d9cfc2] shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#e4dbcf]">
              <div>
                <div className="text-lg font-semibold text-[#2a2a2a]">Add Employee</div>
                <div className="mt-1 text-sm text-[#6f665d]">Fill up the employee information form below.</div>
              </div>

              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="h-10 w-10 rounded-xl border border-[#ddd4c7] bg-white text-[#6f665d] hover:bg-[#faf7f2] text-lg"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-5 overflow-auto max-h-[calc(92vh-88px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <div className={labelBase}>Employee No.</div>
                  <div className="relative">
                    <span className="absolute left-3 top-[55%] -translate-y-1/2 text-sm text-[#8a8a8a]">EM-</span>
                    <input
                      value={form.employeeNo}
                      onChange={setDigitsField("employeeNo")}
                      inputMode="numeric"
                      className={`${inputBase} pl-12`}
                      placeholder="0000"
                    />
                  </div>
                </div>

                <div>
                  <div className={labelBase}>First Name</div>
                  <input value={form.firstName} onChange={setField("firstName")} className={inputBase} required />
                </div>

                <div>
                  <div className={labelBase}>Middle Name</div>
                  <input value={form.middleName} onChange={setField("middleName")} className={inputBase} />
                </div>

                <div>
                  <div className={labelBase}>Last Name</div>
                  <input value={form.lastName} onChange={setField("lastName")} className={inputBase} required />
                </div>

                <div>
                  <div className={labelBase}>Birthdate</div>
                  <div className="relative">
                    <input type="date" value={form.birthdate} onChange={setField("birthdate")} className={dateBase} />
                    <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <div className={labelBase}>Age</div>
                  <input value={computeAge(form.birthdate)} readOnly className={`${inputBase} bg-[#fbf8f4]`} />
                </div>

                <div>
                  <div className={labelBase}>Civil Status</div>
                  <div className="relative">
                    <select value={form.civilStatus} onChange={setField("civilStatus")} className={selectBase}>
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
                    <select value={form.bloodType} onChange={setField("bloodType")} className={selectBase}>
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
                  <input value={form.address} onChange={setField("address")} className={inputBase} />
                </div>

                <div>
                  <div className={labelBase}>Contact Number</div>
                  <input
                    value={form.contactNo}
                    onChange={setDigitsField("contactNo")}
                    className={inputBase}
                    inputMode="numeric"
                    placeholder="09XXXXXXXXX"
                  />
                </div>

                <div>
                  <div className={labelBase}>Department</div>
                  <div className="relative">
                    <select value={form.department} onChange={setField("department")} className={selectBase} required>
                      <option value="">Select</option>
                      {departments.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <div className={labelBase}>Position</div>
                  <div className="relative">
                    <select value={form.position} onChange={setField("position")} className={selectBase} required>
                      <option value="">Select</option>
                      {positions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <div className={labelBase}>Employment Status</div>
                  <div className="relative">
                    <select value={form.employmentStatus} onChange={setField("employmentStatus")} className={selectBase}>
                      <option value="">Select</option>
                      {employmentStatuses.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <div className={labelBase}>Date Hired</div>
                  <div className="relative">
                    <input type="date" value={form.dateHired} onChange={setField("dateHired")} className={dateBase} />
                    <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b9b9b] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <div className={labelBase}>SSS</div>
                  <input value={form.sss} onChange={setField("sss")} className={inputBase} />
                </div>

                <div>
                  <div className={labelBase}>PhilHealth</div>
                  <input value={form.philHealth} onChange={setField("philHealth")} className={inputBase} />
                </div>

                <div>
                  <div className={labelBase}>Pag-Ibig</div>
                  <input value={form.pagIbig} onChange={setField("pagIbig")} className={inputBase} />
                </div>

                <div>
                  <div className={labelBase}>TIN</div>
                  <input value={form.tin} onChange={setField("tin")} className={inputBase} />
                </div>

                <div>
                  <div className={labelBase}>Salary Rate</div>
                  <input
                    type="number"
                    step="0.01"
                    value={form.salaryRate}
                    onChange={setField("salaryRate")}
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-6">
                <button
                  type="button"
                  onClick={handleClear}
                  className="h-11 px-5 rounded-xl border border-[#d8cec1] bg-white text-sm text-[#2a2a2a] hover:bg-[#faf7f2]"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="h-11 px-5 rounded-xl bg-[#8d6a3a] text-white text-sm font-medium hover:opacity-95"
                >
                  Save Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employees;