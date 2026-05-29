import {
  Terminal,
  Code2,
  Shield,
  Server,
  Cpu,
  Wifi,
  Github,
  ExternalLink,
  Award,
  BookOpen,
  Zap,
  Star,
  Users,
  Target,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';

const About = () => {
  const skills = {
    'Penetration Testing': ['Web Application Testing', 'API Security', 'Mobile Security', 'Network Assessment'],
    'Programming': ['Python', 'JavaScript', 'Bash Scripting', 'TypeScript'],
    'Tools': ['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'SQLMap', 'OWASP ZAP'],
    'Platforms': ['HackerOne', 'Bugcrowd', 'Open Bug Bounty', 'YesWeHack'],
  };

  const tools = [
    { name: 'Kali Linux', icon: <Terminal className="w-5 h-5" />, category: 'OS' },
    { name: 'Burp Suite', icon: <Shield className="w-5 h-5" />, category: 'Web Testing' },
    { name: 'Nmap', icon: <Wifi className="w-5 h-5" />, category: 'Network' },
    { name: 'Metasploit', icon: <Cpu className="w-5 h-5" />, category: 'Exploitation' },
    { name: 'Wireshark', icon: <Server className="w-5 h-5" />, category: 'Analysis' },
    { name: 'SQLMap', icon: <Code2 className="w-5 h-5" />, category: 'SQL Injection' },
  ];

  const certifications = [
    { name: 'OSCP', issuer: 'Offensive Security', year: '2023' },
    { name: 'CEH', issuer: 'EC-Council', year: '2022' },
    { name: 'eWPT', issuer: 'eLearnSecurity', year: '2023' },
  ];

  const stats = [
    { icon: <Target className="w-5 h-5" />, value: '150+', label: 'ثغرة مكتشفة' },
    { icon: <Award className="w-5 h-5" />, value: '$50K+', label: 'مكافآت' },
    { icon: <Star className="w-5 h-5" />, value: 'Top 5%', label: 'HackerOne' },
    { icon: <Users className="w-5 h-5" />, value: '50+', label: 'شركة تم اختبارها' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-cyber-bgAlt overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid bg-bg-size-50 opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <span className="font-mono text-cyber-green text-sm mb-4 block">// من أنا</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-cyber-white mb-6">
                Cybersecurity Researcher &<br />
                <span className="text-cyber-green">Bug Bounty Hunter</span>
              </h1>
              <p className="text-cyber-white/70 text-lg mb-6 leading-relaxed">
                أنا باحث أمني شغوف بأمن المعلومات منذ أكثر من 5 سنوات. أركز على اكتشاف
                الثغرات في تطبيقات الويب و APIs و أنظمة IoT. أعمل مع شركات عالمية لاكتشاف
                ون-report الثغرات قبل استغلالها.
              </p>
              <p className="text-cyber-white/70 text-lg mb-8 leading-relaxed">
                خبرتي تشمل العمل مع منصات Bug Bounty مثل HackerOne و Bugcrowd، بالإضافة
                إلى إجراء اختبارات اختراق للشركات الناشئة والمؤسسات الكبيرة.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="mailto:hazemyyy1@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-cyber-white/5 border border-cyber-white/20 rounded-lg text-cyber-white/70 hover:text-cyber-green hover:border-cyber-green/30 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-mono text-sm">hazemyyy1@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/2001124177443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-cyber-green/10 border border-cyber-green/30 rounded-lg text-cyber-green hover:bg-cyber-green/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-mono text-sm">01124177443</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/hazem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-cyber-white/5 border border-cyber-white/20 rounded-lg text-cyber-white hover:bg-cyber-white/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://hackerone.com/hazem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-cyber-green/10 border border-cyber-green/30 rounded-lg text-cyber-green hover:bg-cyber-green/20 transition-colors"
                >
                  HackerOne
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Avatar/Profile Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-cyber-green/20 to-cyber-bg border border-cyber-green/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full bg-cyber-green/10 border-2 border-cyber-green/50 flex items-center justify-center">
                        <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-cyber-green" />
                      </div>
                      <span className="font-mono text-cyber-green">@hazem</span>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                  <div className="absolute top-4 right-4 w-2 h-2 bg-cyber-green rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyber-green rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyber-green rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-cyber-green/20 rounded-3xl blur-xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-cyber-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-cyber-bgAlt rounded-xl border border-cyber-white/10"
              >
                <div className="flex items-center justify-center mb-3 text-cyber-green">
                  {stat.icon}
                </div>
                <div className="font-mono text-3xl font-bold text-cyber-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-cyber-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-cyber-bgAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-cyber-green text-sm mb-4 block">// المهارات</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-cyber-white mb-4">
              الخبرات والتقنيات
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="p-6 bg-cyber-bg/50 rounded-2xl border border-cyber-white/10"
              >
                <h3 className="text-xl font-bold text-cyber-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-cyber-green rounded-full" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-cyber-white/5 rounded-lg text-cyber-white/70 text-sm border border-cyber-white/10 hover:border-cyber-green/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-cyber-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-cyber-green text-sm mb-4 block">// الأدوات</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-cyber-white mb-4">
              أدوات العمل
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group p-4 bg-cyber-bgAlt rounded-xl border border-cyber-white/10 hover:border-cyber-green/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-cyber-green/10 rounded-xl flex items-center justify-center text-cyber-green mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-cyber-white">{tool.name}</span>
                <span className="block text-xs text-cyber-white/50 mt-1">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-cyber-bgAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-cyber-green text-sm mb-4 block">// الشهادات</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-cyber-white mb-4">
              الشهادات المهنية
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-cyber-green/10 to-transparent rounded-2xl border border-cyber-green/20 text-center"
              >
                <div className="w-16 h-16 bg-cyber-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-cyber-white mb-2">{cert.name}</h3>
                <p className="text-cyber-white/60 mb-2">{cert.issuer}</p>
                <span className="text-sm font-mono text-cyber-green">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Section */}
      <section className="py-20 bg-cyber-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-cyber-green text-sm mb-4 block">// IoT Security</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-cyber-white mb-6">
                أمان إنترنت الأشياء
              </h2>
              <p className="text-cyber-white/70 text-lg mb-6 leading-relaxed">
                أعمل أيضاً على أمن أجهزة IoT مثل ESP32 و Raspberry Pi. أبحث في
                ثغرات الأجهزة المنزلية الذكية وأنظمة التحكم الصناعي (ICS/SCADA).
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-cyber-white/70">
                  <span className="w-2 h-2 bg-cyber-green rounded-full" />
                  تحليل بروتوكولات الاتصال اللاسلكية
                </li>
                <li className="flex items-center gap-3 text-cyber-white/70">
                  <span className="w-2 h-2 bg-cyber-green rounded-full" />
                  Reverse Engineering للثغرات
                </li>
                <li className="flex items-center gap-3 text-cyber-white/70">
                  <span className="w-2 h-2 bg-cyber-green rounded-full" />
                  اختبار أنظمة SCADA
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="p-8 bg-cyber-bgAlt rounded-2xl border border-cyber-green/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-cyber-bg rounded-lg">
                    <Cpu className="w-8 h-8 text-cyber-green mx-auto mb-2" />
                    <span className="text-sm text-cyber-white">ESP32</span>
                  </div>
                  <div className="text-center p-4 bg-cyber-bg rounded-lg">
                    <Server className="w-8 h-8 text-cyber-green mx-auto mb-2" />
                    <span className="text-sm text-cyber-white">Raspberry Pi</span>
                  </div>
                  <div className="text-center p-4 bg-cyber-bg rounded-lg">
                    <Wifi className="w-8 h-8 text-cyber-green mx-auto mb-2" />
                    <span className="text-sm text-cyber-white">Zigbee</span>
                  </div>
                  <div className="text-center p-4 bg-cyber-bg rounded-lg">
                    <Zap className="w-8 h-8 text-cyber-green mx-auto mb-2" />
                    <span className="text-sm text-cyber-white">MQTT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;