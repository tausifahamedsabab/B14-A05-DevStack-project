
import devstack from "../assets/devstack.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4 md:px-16">
      {/* Logo */}
      <a href="#" className="flex items-center">
        <img
          src={devstack}
          alt="DevStack logo"
          className="h-14 w-14 object-contain sm:h-16 sm:w-16"
        />
      </a>

      {/* Navigation Links */}
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

      {/* Authentication Buttons */}
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="hidden text-sm font-medium text-slate-700 transition hover:text-pink-600 sm:block"
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
    </nav>
  );
};

export default Navbar;