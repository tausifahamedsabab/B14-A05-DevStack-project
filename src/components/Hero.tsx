import bannerstack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:justify-between md:px-16">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-7 flex justify-center gap-3 md:justify-start">
          <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-600 px-4 py-3 text-sm text-white">
            Explore Technologies
          </button>

          <button className="rounded-md border px-5 py-3 text-sm">
            Learn More
          </button>
        </div>
      </div>

      <img
        src={bannerstack}
        alt="Development Stack"
        className="w-full max-w-sm object-contain"
      />
    </main>
  );
};

export default Hero;