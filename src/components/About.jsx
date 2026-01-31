import photo from "../assets/photo.png";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 py-20 border-t border-white/5 bg-linear-to-b from-primary to-[#020617]"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold mb-10">About</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <img
              src={photo}
              alt="Valentina"
              className="rounded-xl w-full aspect-square object-cover border border-white/10"
            />
          </div>
          <div className="space-y-4 text-sm text-white/80 leading-relaxed">
            <p>
              My name is Valentina and I'm a web designer who strives for clean,
              modern, and user-centric website designs.
            </p>
            <p>
              I primarily use Figma to design responsive web layouts, landing
              pages, and UI elements. My experience with Webflow and WordPress
              allows me to create designes efficiently and accurately. Adobe XD is
              the another option for design and My knowledge of HTML, CSS, and
              Bootstrap code is essential for creating realistic yet flexible
              designs.
            </p>
            <p>
              My work highlights: <br /> - Clear layouts and visual hierarchy
              <br /> - Mobile-friendly responsive design <br /> - Streamlined user
              flows that increase conversion rates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
