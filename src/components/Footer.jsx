const Footer = () => {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-md border-t border-white/10 py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8 mb-6 items-start">

          {/* LEFT: InTellMe logo only */}
          <div className="flex items-start">
            <img
              src="https://res.cloudinary.com/dksj2niho/image/upload/v1769967483/Image_20260130_154437_tm2bye.jpg"
              alt="InTellMe"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* CENTER: Contact info */}
          <div className="flex flex-col items-center text-center gap-1">
            <p className="text-white font-semibold text-sm tracking-wide mb-1">M. Brandon Lane</p>
            <p className="text-slate-400 text-sm">326 Delaware Street</p>
            <p className="text-slate-400 text-sm">Johnson City, TN 37604</p>
            <a
              href="mailto:brandon@intellmeai.com"
              className="text-slate-300 hover:text-white transition-colors text-sm mt-1"
            >
              brandon@intellmeai.com
            </a>
            <a
              href="tel:+17473221977"
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              (747) 322-1977
            </a>
          </div>

          {/* RIGHT: Quote */}
          <div className="flex flex-col items-end text-right gap-1">
            <p className="text-slate-300 text-sm italic leading-relaxed">
              "Synergy – the bonus that is achieved when things work together harmoniously"
            </p>
            <p className="text-slate-500 text-xs font-medium tracking-widest uppercase mt-1">
              — Mark Twain
            </p>
          </div>

        </div>

        <div className="text-center pt-4 border-t border-white/10">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} InTellMe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
