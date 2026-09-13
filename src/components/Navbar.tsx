import devstack from "../assets/devstack.png";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3 sm:px-6 sm:py-4 md:px-16">
      {/* Mobile Hamburger */}
      <button
        type="button"
        className="text-2xl text-slate-700 md:hidden"
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Logo */}
      <a
        href="#"
        className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
      >
        <img
          src={devstack}
          alt="DevStack logo"
          className="h-12 w-12 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
        />
      </a>

      {/* Navigation Links - Desktop */}
      <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
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
      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <a
          href="#"
          className="text-xs font-medium text-slate-700 transition hover:text-pink-600 sm:text-sm"
        >
          Sign In
        </a>

        <button
          type="button"
          className="rounded-full bg-pink-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-pink-700 sm:px-4 sm:text-sm"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;