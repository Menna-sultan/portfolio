export default function Contact() {
  return (
    <section id="contact" className="py-40 pb-20">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FCFAFF] border border-violet-500/20 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 bg-[#FDDFDD]/80 blur-[70px] rounded-full"></div>

            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-56 h-56 bg-[#E2EFFF]/80 blur-[70px] rounded-full"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#202021]/80 mb-6 relative z-10">
              Let&apos;s work together
            </h2>
            <p className="text-[#4B5563] text-lg mb-12 max-w-2xl mx-auto relative z-10">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to
              say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 relative z-10">
              <div className="flex items-center gap-3 text-slate-700 bg-white/60 backdrop-blur px-6 py-3 rounded-full border border-white/50 shadow-sm">
                <i className="fa-regular fa-envelope text-[#7C7CF4] text-sm"></i>
                <span className="text-sm">mennasultan84@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700 bg-white/60 backdrop-blur px-6 py-3 rounded-full border border-white/50 shadow-sm">
                <i className="fa-solid fa-phone text-[#E879A6] text-sm"></i>
                <span className="text-sm">+20 109 703 3188</span>
              </div>

              <div className="flex items-center gap-3 text-slate-700 bg-white/60 backdrop-blur px-6 py-3 rounded-full border border-white/50 shadow-sm">
                <i className="fa-solid fa-location-dot text-[#34D399] text-sm"></i>
                <span className="text-sm">Giza, Egypt</span>
              </div>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mennasultan84@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-white shadow-md text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors relative z-10"
            >
              Say Hello
            </a>
          </div>

          <div className="mt-16 text-center text-slate-600 text-sm">
            <p>© 2025 Menna Allah Abd El Hamid. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
