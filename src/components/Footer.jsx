import behanceIcon from "../assets/icons8-behance-94.png";
import dribbbleIcon from "../assets/dribbble.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-white/50">
          © 2023 Valentina Design. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <img src={behanceIcon} alt="" className="w-6 h-6" aria-hidden />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Dribbble"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <img src={dribbbleIcon} alt="" className="w-6 h-6" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
