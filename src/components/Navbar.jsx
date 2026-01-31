export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-primary/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-sm font-medium text-white hover:text-accent transition-colors">
          Valentina Design
        </a>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="text-white/70 hover:text-accent transition-colors">About</a>
          <a href="#work" className="text-white/70 hover:text-accent transition-colors">Work</a>
          <a href="#projects" className="text-white/70 hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="text-white/70 hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
