export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/chgr6.png')",
      }}
    >
      <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="text-center px-6 z-10 max-w-3xl" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-6 font-bold text-green-500 tracking-tight advance">
          ADVANCING
        </h1>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white advance"
          data-aos="fade-left"
        >
          TOMORROW’S INFRASTRUCTURE
        </h2>

        <div
          className="mt-6 border-t border-green-700 w-11/12 sm:w-2/3 mx-auto pt-4 text-green-400 text-sm sm:text-base italic"
          data-aos="fade-right"
        >
          <p>STRATEGIC EV CHARGING INVESTMENTS</p>
          <p>CAPITALIZE ON THE GROWTH OF ELECTRIC MOBILITY.</p>
        </div>
      </div>
    </section>
  );
}
