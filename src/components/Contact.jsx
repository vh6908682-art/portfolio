import behanceIcon from "../assets/icons8-behance-94.png";
import dribbbleIcon from "../assets/dribbble.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 py-20 border-t border-white/5 bg-gradient-to-t from-black/80 to-primary"
    >
      <div className="mx-auto max-w-5xl text-center space-y-6">
        <h2 className="text-2xl font-semibold">Let&apos;s work together</h2>
        <p className="max-w-xl mx-auto text-sm text-white/70">
          Looking for help with a product, website, or interface? I&apos;m open
          to remote freelance and long-term collaborations.
        </p>
        <a
          href="mailto:vh6908682@gmail.com"
          className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-6 py-2 text-sm font-medium text-primary hover:bg-transparent hover:text-accent transition-colors"
        >
          Email me
        </a>
        <div className="flex justify-center items-center gap-6 text-white/60 mt-6">
          <a
            href="https://www.behance.net/valentihernand137"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <img src={behanceIcon} alt="" className="w-6 h-6" aria-hidden />
          </a>
          <a
            href="https://dribbble.com/ValentinaDesigner0120"
            target="_blank"
            rel="noreferrer"
            aria-label="Dribbble"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <img src={dribbbleIcon} alt="" className="w-6 h-6" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
