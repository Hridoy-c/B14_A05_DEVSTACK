const Footer = () => {
  return (
    <footer className="border-t container mx-auto border-gray-100 bg-white">
      <div className=" max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-xs font-bold text-white">
                DS
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Dev <span className="text-pink-600">Stack</span>
              </h2>
            </div>

            <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-gray-500 sm:mx-0">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-slate-900 sm:justify-start sm:gap-5">
              <a href="#">GitHub</a>
              <span className="text-gray-300 sm:hidden">•</span>
              <a href="#">Twitter</a>
              <span className="text-gray-300 sm:hidden">•</span>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div className="hidden sm:block">
            <h3 className="text-xs font-semibold tracking-wide text-slate-900">
              PRODUCT
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>
          </div>

          <div className="hidden sm:block">
            <h3 className="text-xs font-semibold tracking-wide text-slate-900">
              COMPANY
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>

          <div className="hidden sm:block">
            <h3 className="text-xs font-semibold tracking-wide text-slate-900">
              LEGAL
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;