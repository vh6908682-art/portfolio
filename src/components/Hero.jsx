export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">
          Product Designer & Frontend Developer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          I design and build{" "}
          <span className="text-accent">clean, thoughtful</span> digital
          experiences.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-white/70">
          Focusing on user-centered interfaces, smooth interactions, and
          practical frontend implementation from concept to production.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <a
            href="#projects"
            className="rounded-full border border-accent bg-accent px-5 py-2 text-sm font-medium text-primary hover:bg-transparent hover:text-accent transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white/80 hover:border-accent hover:text-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
