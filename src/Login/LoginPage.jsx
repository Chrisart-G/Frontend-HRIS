import React, { useEffect, useMemo, useState } from "react";

function LoginPage() {
  const BRAND = useMemo(
    () => ({
      logoSrc: "/Logo.jpg",
      title: "Staff & Admin Login",
      subtitle: "Log In to continue",
      rightTitle: "Staff & Admin Portal",
      rightDesc: "Use your work email and password to access the system.",
    }),
    []
  );

  const SLIDES = useMemo(
    () => [
      { a: "/1.jpg", b: "/2.jpg", c: "/3.jpg", d: "/4.jpg", e: "/5.jpg" },
      { a: "/6.jpg", b: "/7.jpg", c: "/8.jpg", d: "/9.jpg", e: "/10.jpg" },
      { a: "/11.jpg", b: "/12.jpg", c: "/13.jpg", d: "/14.jpg", e: "/15.jpg" },
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

  return (
    <div className="min-h-screen bg-[#eef1f5] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden bg-white shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#f5f6f7] px-7 sm:px-10 py-10 sm:py-12">
            <div className="h-full flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <img src={BRAND.logoSrc} alt="Logo" className="h-24 w-24 object-contain" />
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
                  className="w-full h-11 rounded-full bg-[#8d6a3a] text-white text-sm font-semibold tracking-wide hover:bg-[#7c5d32] active:scale-[0.99] transition cursor-pointer"
                >
                  Log In
                </button>

                <div className="flex items-center gap-3 pt-1">
                  <div className="h-px bg-[#e6e6e6] flex-1" />
                  <div className="text-[11px] text-[#9b9b9b] font-medium">OR</div>
                  <div className="h-px bg-[#e6e6e6] flex-1" />
                </div>

                <button
                  type="button"
                  className="h-11 w-full rounded-full bg-white border border-[#e2e2e2] px-4 flex items-center justify-center gap-2 text-sm text-[#3b3b3b] hover:bg-[#fafafa] cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 48 48">
                    <path
                      fill="#FFC107"
                      d="M43.611 20.083H42V20H24v8h11.303C33.644 32.659 29.242 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917Z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306 14.691l6.571 4.819C14.656 16.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.129 6.306 14.691Z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.197l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.221 0-9.613-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44Z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.084 5.565l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917Z"
                    />
                  </svg>
                  Continue with Google
                </button>
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
                <h2 className="text-2xl sm:text-[28px] font-semibold text-[#1d1d1d]">
                  {BRAND.rightTitle}
                </h2>
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