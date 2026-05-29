import { Github, Twitter, Linkedin, Shield, Lock, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-cyber-bgAlt border-t border-cyber-green/10">
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-green/20 to-transparent animate-scan-line" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Shield className="w-8 h-8 text-cyber-green" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-green rounded-full animate-pulse-glow" />
              </div>
              <span className="font-mono font-bold text-xl text-cyber-white">
                HAZEM<span className="text-cyber-green">.BLOG</span>
              </span>
            </div>
            <p className="text-cyber-white/60 max-w-md mb-6">
              Cybersecurity Researcher & Bug Bounty Hunter. Uncovering vulnerabilities
              to make the digital world a safer place.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <a
                href="mailto:hazemyyy1@gmail.com"
                className="flex items-center gap-2 text-cyber-white/60 hover:text-cyber-green transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-mono text-sm">hazemyyy1@gmail.com</span>
              </a>
              <a
                href="https://wa.me/2001124177443"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyber-white/60 hover:text-cyber-green transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-mono text-sm">01124177443</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/hazem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cyber-white/5 rounded-lg hover:bg-cyber-green/10 hover:text-cyber-green transition-all duration-200 text-cyber-white/60"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/hazem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cyber-white/5 rounded-lg hover:bg-cyber-green/10 hover:text-cyber-green transition-all duration-200 text-cyber-white/60"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/hazem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cyber-white/5 rounded-lg hover:bg-cyber-green/10 hover:text-cyber-green transition-all duration-200 text-cyber-white/60"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cyber-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-cyber-white/60 hover:text-cyber-green transition-colors">
                  المدونة
                </a>
              </li>
              <li>
                <a href="/about" className="text-cyber-white/60 hover:text-cyber-green transition-colors">
                  من أنا
                </a>
              </li>
              <li>
                <a href="/contact" className="text-cyber-white/60 hover:text-cyber-green transition-colors">
                  تواصل معي
                </a>
              </li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-semibold text-cyber-white mb-4">المنصات</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://hackerone.com/hazem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-white/60 hover:text-cyber-green transition-colors"
                >
                  HackerOne
                </a>
              </li>
              <li>
                <a
                  href="https://bugcrowd.com/hazem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-white/60 hover:text-cyber-green transition-colors"
                >
                  Bugcrowd
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hazem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-white/60 hover:text-cyber-green transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cyber-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cyber-white/40 text-sm">
              © {currentYear} HAZEM.BLOG. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cyber-green/10 rounded-full border border-cyber-green/20">
                <Lock className="w-4 h-4 text-cyber-green" />
                <span className="font-mono text-xs text-cyber-green">Secured Static Page</span>
              </div>
              <div className="flex items-center gap-2 text-cyber-white/40 text-sm">
                <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;