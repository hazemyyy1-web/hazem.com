import { Link } from 'react-router-dom';
import {
  Shield,
  Terminal,
  Zap,
  Eye,
  Lock,
  Code2,
  Server,
  Smartphone,
  ChevronRight,
  Award,
  Users,
  Target
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'اختبار اختراق تطبيقات الويب',
      description: 'اكتشاف الثغرات الأمنية مثل XSS، و SQL Injection، و Access Control Flaws',
      tags: ['OWASP Top 10', 'Business Logic', 'API Security'],
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'تقييم أمان API',
      description: 'فحص شامل لـ REST و GraphQL APIs لاكتشاف ثغرات OTP Bypass و Rate Limiting',
      tags: ['OTP Bypass', 'Race Conditions', 'Side-Channel'],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'اختبار تطبيقات الهاتف والشبكات',
      description: 'تحليل تطبيقات Android/iOS والشبكات لاكتشاف ثغرات Moblie و Network',
      tags: ['Android/iOS', 'Network Analysis', 'IoT Security'],
    },
  ];

  const stats = [
    { icon: <Target className="w-5 h-5" />, value: '150+', label: 'ثغرة مكتشفة' },
    { icon: <Award className="w-5 h-5" />, value: '50+', label: 'شهادة تقدير' },
    { icon: <Users className="w-5 h-5" />, value: '30+', label: 'شركة تم اختبارها' },
  ];

  const achievements = [
    {
      type: 'Hall of Fame',
      target: 'Google',
      year: '2024',
      severity: 'High',
    },
    {
      type: 'Critical Finding',
      target: 'Uber',
      year: '2024',
      severity: 'Critical',
    },
    {
      type: 'API Chain Attack',
      target: 'Shopify',
      year: '2023',
      severity: 'High',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid bg-bg-size-50" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg/50 via-transparent to-cyber-bg" />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-green/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-green/10 border border-cyber-green/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
            <span className="font-mono text-sm text-cyber-green">Active Monitoring</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-cyber-white mb-6 leading-tight">
            <span className="block">اكتشف الثغرات</span>
            <span className="block text-cyber-green">قبل المتطفلين</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-cyber-white/70 max-w-2xl mx-auto mb-10">
            باحث أمني متخصص في اختبار الاختراق واكتشاف الثغرات. أساعد الشركات والمطورين
            على حماية أنظمتهم من الهجمات الإلكترونية.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-cyber-green text-cyber-bg font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyber-green/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                اطلب تدقيق أمني
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-green-bright to-cyber-green opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              to="/blog"
              className="px-8 py-4 bg-cyber-white/5 border border-cyber-white/20 rounded-lg text-cyber-white hover:bg-cyber-white/10 transition-all duration-300"
            >
              اقرأ المدونة
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-cyber-white/5 rounded-xl border border-cyber-white/10 hover:border-cyber-green/30 transition-colors"
              >
                <div className="flex items-center justify-center mb-2 text-cyber-green">
                  {stat.icon}
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-cyber-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-cyber-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyber-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-cyber-green rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative bg-cyber-bgAlt">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid bg-bg-size-50 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-cyber-green text-sm mb-4 block">// الخدمات</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-cyber-white mb-4">
              خدمات الاختبار الأمني
            </h2>
            <p className="text-cyber-white/60 max-w-2xl mx-auto">
              أقدم مجموعة متكاملة من خدمات الأمان لمساعدتك في حماية أنظمتك وتطبيقاتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 bg-cyber-bg/50 rounded-2xl border border-cyber-white/10 hover:border-cyber-green/30 transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-cyber-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="w-12 h-12 bg-cyber-green/10 rounded-xl flex items-center justify-center text-cyber-green mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-cyber-white mb-3">{service.title}</h3>
                  <p className="text-cyber-white/60 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-mono bg-cyber-white/5 rounded border border-cyber-white/10 text-cyber-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative bg-cyber-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-cyber-green text-sm mb-4 block">// الإنجازات</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-cyber-white mb-4">
              اعترافات ومكتشفات
            </h2>
            <p className="text-cyber-white/60 max-w-2xl mx-auto">
              بعض من أبرز الإنجازات في مجال البحث الأمني
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="relative p-6 bg-gradient-to-br from-cyber-green/10 to-transparent rounded-2xl border border-cyber-green/20"
              >
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 text-xs font-mono bg-cyber-green/20 rounded text-cyber-green">
                    {item.year}
                  </span>
                </div>
                <div className="mt-8">
                  <div className="text-xs font-mono text-cyber-green mb-2">{item.type}</div>
                  <h3 className="text-xl font-bold text-cyber-white mb-2">{item.target}</h3>
                  <div className="inline-flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      item.severity === 'Critical' ? 'bg-red-500' : 'bg-orange-500'
                    }`} />
                    <span className="text-sm text-cyber-white/60">{item.severity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-cyber-white/5 rounded-full border border-cyber-white/10">
              <span className="font-mono text-cyber-white/60">Want to see more?</span>
              <Link
                to="/about"
                className="text-cyber-green hover:underline"
              >
                View full profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 relative bg-cyber-bgAlt">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid bg-bg-size-50 opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 bg-gradient-to-br from-cyber-green/10 to-transparent rounded-3xl border border-cyber-green/20">
            <Shield className="w-16 h-16 text-cyber-green mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-cyber-white mb-4">
              هل تحتاج لتدقيق أمني؟
            </h2>
            <p className="text-cyber-white/60 mb-8 max-w-xl mx-auto">
              دعنا نساعدك في اكتشاف الثغرات الأمنية في تطبيقك قبل أن يكتشفها المهاجمون
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-green text-cyber-bg font-bold rounded-lg hover:bg-cyber-green-bright transition-colors"
            >
              تواصل الآن
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add missing icon
const Globe = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default Home;