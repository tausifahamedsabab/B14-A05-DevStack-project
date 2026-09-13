import devstack from "../assets/devstack.png";

const DesktopNavbar = () => {
  return (
    <nav className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-16">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={devstack}
            alt="DevStack logo"
            className="h-16 w-16 object-contain"
          />
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#"
            className="text-pink-600 transition hover:text-pink-700"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="transition hover:text-pink-600"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="transition hover:text-pink-600"
          >
            Projects
          </a>

          <a
            href="#about"
            className="transition hover:text-pink-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition hover:text-pink-600"
          >
            Contact
          </a>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-medium text-slate-700 transition hover:text-pink-600"
          >
            Sign In
          </a>

          <button
            type="button"
            className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-700"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;