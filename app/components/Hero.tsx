export default function Hero() {
  return (
    <section className="min-h-[94vh] flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
              Muhammad Rifky R
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-100">
            Full Stack Developer & Creative Problem Solver
          </p>
        </div>

        <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          I create beautiful and functional digital experiences. With expertise
          in modern web technologies, I turn ideas into elegant solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#projects"
            className="btn-primary inline-flex items-center justify-center"
          >
            View My Work
          </a>
        </div>

        <div className="pt-12">
          <svg
            className="animate-bounce mx-auto w-8 h-8 text-sky-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
