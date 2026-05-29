import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Github, ExternalLink, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/blog', label: 'المدونة' },
    { path: '/about', label: 'من أنا' },
    { path: '/contact', label: 'تواصل' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyber-bg/80 backdrop-blur-xl border-b border-cyber-green/20 shadow-lg shadow-cyber-green/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Shield className="w-8 h-8 text-cyber-green group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-green rounded-full animate-pulse-glow" />
            </div>
            <span className="font-mono font-bold text-xl text-cyber-white">
              HAZEM<span className="text-cyber-green">.BLOG</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-medium transition-colors duration-200 rounded-lg ${
                  isActive(link.path)
                    ? 'text-cyber-green'
                    : 'text-cyber-white/70 hover:text-cyber-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyber-green rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/2001124177443"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-cyber-green hover:bg-cyber-green/10 rounded-lg transition-colors duration-200"
              aria-label="WhatsApp"
              title="تواصل عبر واتساب"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/hazem"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-cyber-white/50 hover:text-cyber-green transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://hackerone.com/hazem"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyber-green/10 border border-cyber-green/30 rounded-lg text-cyber-green font-mono text-sm hover:bg-cyber-green/20 transition-colors duration-200 flex items-center gap-2"
            >
              <span>HackerOne</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-cyber-white hover:text-cyber-green transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cyber-bgAlt/95 backdrop-blur-xl border-t border-cyber-green/10 px-4 py-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-cyber-green/10 text-cyber-green border-l-2 border-cyber-green'
                    : 'text-cyber-white/70 hover:bg-cyber-white/5 hover:text-cyber-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4 mt-2 border-t border-cyber-white/10">
              <a
                href="https://wa.me/2001124177443"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyber-green/10 rounded-lg text-cyber-green border border-cyber-green/30 hover:bg-cyber-green/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-mono text-sm">واتساب</span>
              </a>
              <a
                href="https://github.com/hazem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyber-white/5 rounded-lg text-cyber-white/70 hover:text-cyber-green transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;