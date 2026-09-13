
import bannerstack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:justify-between md:px-16 md:py-20">
      {/* Hero Content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 text-sm leading-7 text-slate-500 md:text-base">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        {/* Hero Buttons */}
        <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href="#technologies"
            className="rounded-md bg-gradient-to-r from-orange-500 to-pink-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-pink-500 hover:text-pink-600"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center">
        <img
          src={bannerstack}
          alt="Development stack illustration"
          className="w-full max-w-sm object-contain md:max-w-md"
        />
      </div>
    </main>
  );
};

export default Hero;