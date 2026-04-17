import React, { useEffect, useMemo, useState } from "react";

function LoginPage({ onLogin }) {
  const BRAND = useMemo(
    () => ({
      logoSrc: "/recruitment.png",
      title: "Staff & Admin Login",
      company: "Human Resource",
      companyDesc: "Information System",
      subtitle: "Log In to continue",
      rightDesc: "Use your employee no. and password to access the system.",
    }),
    []
  );

  const SLIDES = useMemo(
    () => [
      { a: "/a.jpg", b: "/b.jpg", c: "/c.jpg", d: "/d.jpg", e: "/e.jpg" },
      { a: "/f.jpg", b: "/g.jpg", c: "/h.jpg", d: "/i.jpg", e: "/j.jpg" },
      { a: "/k.jpg", b: "/l.jpg", c: "/m.jpg", d: "/n.jpg", e: "/o.jpg" },
    ],
    []
  );

  const [slide, setSlide] = useState(0);
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, [SLIDES.length]);

  const images = SLIDES[slide];

  const onEmployeeNumberChange = (e) => {
    const next = e.target.value.replace(/\D/g, "");
    setEmployeeNumber(next);
  };

  const handleLogin = () => {
    if (typeof onLogin === "function") onLogin();
  };

  return (
    <div className="min-h-screen bg-[#eef1f5] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden bg-white shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#f5f6f7] px-7 sm:px-10 py-10 sm:py-12">
            <div className="h-full flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <div className="text-left">
                  <h1 className="text-2xl sm:text-[28px] font-semibold text-[#1d1d1d] leading-tight">
                    {BRAND.title}
                  </h1>
                  <p className="mt-1 text-sm text-[#7a7a7a]">{BRAND.subtitle}</p>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <label className="block text-xs font-medium text-[#8a8a8a] mb-2">
                    Employee Number
                  </label>
                  <input
                    value={employeeNumber}
                    onChange={onEmployeeNumberChange}
                    inputMode="numeric"
                    autoComplete="off"
                    pattern="[0-9]*"
                    required
                    placeholder="Enter your employee number"
                    className="w-full h-11 rounded-full bg-white border border-[#e2e2e2] px-5 text-sm outline-none focus:border-[#b9915f] placeholder:text-[#b0b0b0]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8a8a8a] mb-2">Password</label>
                  <div className="relative">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPw ? "text" : "password"}
                      required
                      placeholder="Enter your password"
                      className="w-full h-11 rounded-full bg-white border border-[#e2e2e2] px-5 pr-12 text-sm outline-none focus:border-[#b9915f] placeholder:text-[#b0b0b0]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full flex items-center justify-center text-[#8a8a8a] hover:bg-[#f3f3f3] cursor-pointer"
                      aria-label={showPw ? "Hide password" : "Show password"}
                    >
                      {showPw ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 4l16 16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    className="text-xs text-[#8a8a8a] hover:text-[#6b6b6b] cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-full h-11 rounded-full bg-[#8d6a3a] text-white text-sm font-semibold tracking-wide hover:bg-[#7c5d32] active:scale-[0.99] transition cursor-pointer"
                >
                  Log In
                </button>

                <div className="pt-8 flex justify-center">
                  <div className="flex items-center gap-4">
                    <img src={BRAND.logoSrc} alt="Logo" className="h-24 w-24 object-contain" />
                    <div className="text-left">
                      <div className="text-lg font-semibold text-[#1d1d1d] leading-tight">
                        {BRAND.company}
                      </div>
                      <div className="mt-1 text-sm text-[#7a7a7a]">{BRAND.companyDesc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white px-7 sm:px-10 py-10 sm:py-12 flex flex-col justify-center">
            <div className="mx-auto w-full max-w-md">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-36 sm:h-40 rounded-2xl overflow-hidden">
                  <img src={images.a} alt="" className="h-full w-full object-cover" draggable={false} />
                </div>

                <div className="col-span-1 h-36 sm:h-40 rounded-2xl overflow-hidden">
                  <img src={images.b} alt="" className="h-full w-full object-cover" draggable={false} />
                </div>

                <div className="col-span-2 h-36 sm:h-40 rounded-2xl overflow-hidden">
                  <img src={images.c} alt="" className="h-full w-full object-cover" draggable={false} />
                </div>

                <div className="col-span-1 h-36 sm:h-40 rounded-2xl overflow-hidden">
                  <img src={images.d} alt="" className="h-full w-full object-cover" draggable={false} />
                </div>

                <div className="col-span-3 h-24 sm:h-28 rounded-2xl overflow-hidden">
                  <img src={images.e} alt="" className="h-full w-full object-cover" draggable={false} />
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="mt-2 text-sm text-[#7a7a7a]">{BRAND.rightDesc}</p>

                <div className="mt-5 flex items-center justify-center gap-2">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSlide(i)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        i === slide ? "bg-[#8d6a3a]" : "bg-[#d7d7d7]"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;