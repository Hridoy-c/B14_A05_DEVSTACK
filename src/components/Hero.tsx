import HeroLogo from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className=" container mx-auto bg-white">
      <div className="mx-auto flex flex-col md:flex-row min-h-[550px] items-center justify-between px-6 py-16">
        <div className="w-full max-w-[620px] text-center md:text-left">
          <h1 className="text-5xl font-bold leading-[1.15] text-slate-900 md:text-6xl">
            Build Your Ideal
          </h1>

          <h2 className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-5xl font-bold leading-[1.15] text-transparent md:text-6xl">
            Development Stack
          </h2>

          <p className="mt-6 max-w-[600px] text-lg leading-7 text-slate-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="w-full sm:w-auto rounded-lg border border-gray-200 px-6 sm:px-12 py-3 text-sm text-slate-600 transition hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-10 flex w-full justify-center md:mt-0 md:w-[45%]">
          <img
            src={HeroLogo}
            alt="Development Stack"
            className="w-[390px] sm:w-[440px] md:w-[550px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
