import devstack from "../assets/devstack.png";

const MobileNavbar = () => {
  return (
    <nav className="border-b border-slate-100 bg-white">
      <div className="relative flex items-center justify-between px-4 py-3">
        {/* Hamburger */}
        <button
          type="button"
          className="text-2xl text-slate-700"
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Center Logo */}
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2"
        >
          <img
            src={devstack}
            alt="DevStack logo"
            className="h-12 w-12 object-contain"
          />
        </a>

        {/* Authentication */}
        <div className="ml-auto flex items-center gap-2">
          <a
            href="#"
            className="text-xs font-medium text-slate-700"
          >
            Sign In
          </a>

          <button
            type="button"
            className="rounded-full bg-pink-600 px-3 py-2 text-xs font-semibold text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;