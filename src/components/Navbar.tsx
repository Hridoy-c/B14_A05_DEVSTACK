const Navbar = () => {
  return (
    <div className=" sticky top-0 border-b border-gray-100 bg-white">
      <nav className="container mx-auto">
        <div className="mx-auto flex h-[75px] items-center justify-between px-4 sm:px-6">
          <button
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="h-[3px] w-8 sm:w-10 rounded bg-gray-500"></span>
            <span className="h-[3px] w-8 sm:w-10 rounded bg-gray-500"></span>
            <span className="h-[3px] w-8 sm:w-10 rounded bg-gray-500"></span>
          </button>

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-white text-sm sm:text-base">
              DS
            </div>

            <h1 className="text-lg sm:text-xl font-bold text-slate-900">
              Dev<span className="text-pink-600">Stack</span>
            </h1>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-pink-600">
              Home
            </a>

            <a href="#" className="text-gray-600">
              Technologies
            </a>

            <a href="#" className="text-gray-600">
              Projects
            </a>

            <a href="#" className="text-gray-600">
              About
            </a>

            <a href="#" className="text-gray-600">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-5">
            <button className="hidden sm:inline font-semibold text-gray-600">
              Sign In
            </button>

            <button className="rounded-full bg-pink-600 px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-lg text-white">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
