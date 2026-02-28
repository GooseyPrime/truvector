const Footer = () => {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-md border-t border-white/10 py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-4">
          <div>
            <img
              src="https://res.cloudinary.com/dksj2niho/image/upload/v1769967483/Image_20260130_154437_tm2bye.jpg"
              alt="InTellMe"
              className="h-10 w-auto object-contain mb-2"
            />
            <p className="text-sm text-slate-400">M. Brandon Lane</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">326 Delaware Street</p>
            <p className="text-sm text-slate-400">Johnson City, TN 37604</p>
          </div>
          <div>
            <p className="text-sm">
              <a href="mailto:brandon@intellmeai.com" className="text-white hover:text-slate-300 transition-colors">
                brandon@intellmeai.com
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+17473221977" className="text-white hover:text-slate-300 transition-colors">
                (747) 322-1977
              </a>
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
