import devstack from "../assets/devstack.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-16">
      <a href="#" className="flex items-center gap-2">
        <img
          src={devstack}
          alt="Dev Stack"
          className="h-20 w-20 object-contain"
        />
      </a>

      <div className="hidden gap-6 text-sm md:flex">
        <a href="#" className="text-pink-600">
          Home
        </a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="hidden text-sm sm:block">
          Sign In
        </a>

        <button className="rounded-full bg-pink-600 px-4 py-2 text-sm text-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;