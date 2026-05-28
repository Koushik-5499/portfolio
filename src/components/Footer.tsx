export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03050a] py-8">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-primary font-medium">Koushik S</span>. Crafted with AI & Passion.
        </p>
        <div className="flex gap-4">
          <a href="mailto:koushik4680@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-cyan transition-colors border border-white/5">
            ✉️
          </a>
          <a href="https://linkedin.com/in/koushik-s-22122a386" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-blue-400 transition-colors border border-white/5">
            💼
          </a>
          <a href="https://github.com/Koushik-5499" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-purple-400 transition-colors border border-white/5">
            🐙
          </a>
        </div>
      </div>
    </footer>
  );
}
