import { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Clock, MessageCircle, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = 'hazemyyy1@gmail.com';
  const whatsapp = '01124177443';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        budget: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'البريد الإلكتروني',
      value: email,
      action: handleCopyEmail,
      actionLabel: copied ? 'تم النسخ!' : 'نسخ',
      actionIcon: copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'واتساب',
      value: whatsapp,
      action: () => {
        window.open(`https://wa.me/20${whatsapp.slice(1)}`, '_blank');
      },
      actionLabel: 'تواصل',
      actionIcon: <MessageCircle className="w-4 h-4" />,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'وقت الاستجابة',
      value: 'خلال 24-48 ساعة',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="relative py-16 bg-cyber-bgAlt overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid bg-bg-size-50 opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-mono text-cyber-green text-sm mb-4 block">// تواصل</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-cyber-white mb-4">
              لنعمل معاً
            </h1>
            <p className="text-cyber-white/60 max-w-2xl mx-auto">
              هل لديك مشروع تحتاج فيه لتدقيق أمني؟ تواصل معي وسأرد عليك في أقرب وقت
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-cyber-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 bg-cyber-bgAlt rounded-2xl border border-cyber-white/10">
                <h3 className="text-xl font-bold text-cyber-white mb-6">معلومات التواصل</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyber-green/10 rounded-lg flex items-center justify-center text-cyber-green flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm text-cyber-white/50 block mb-1">
                          {info.label}
                        </span>
                        {info.action ? (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-cyber-white">{info.value}</span>
                            <button
                              onClick={info.action}
                              className="flex items-center gap-1 px-3 py-1.5 bg-cyber-green/10 rounded-lg text-cyber-green text-sm hover:bg-cyber-green/20 transition-colors"
                            >
                              {info.actionIcon}
                              {info.actionLabel}
                            </button>
                          </div>
                        ) : (
                          <span className="text-cyber-white">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-cyber-bgAlt rounded-2xl border border-cyber-white/10">
                <h3 className="text-xl font-bold text-cyber-white mb-4">الخدمات المتاحة</h3>
                <ul className="space-y-3">
                  {[
                    'اختبار اختراق تطبيقات الويب',
                    'تقييم أمان APIs',
                    'فحص تطبيقات الهاتف',
                    'اختبار الشبكات',
                    'استجابة للحوادث',
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-3 text-cyber-white/70">
                      <span className="w-2 h-2 bg-cyber-green rounded-full" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-cyber-green/10 to-transparent rounded-2xl border border-cyber-green/20">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-cyber-green" />
                  <span className="font-semibold text-cyber-white">ملاحظة</span>
                </div>
                <p className="text-cyber-white/60 text-sm">
                  يمكنني التوقيع على NDA قبل مناقشة أي تفاصيل مشروع. الخصوصية والسرية
                  من أهم أولوياتي.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="p-8 bg-cyber-bgAlt rounded-2xl border border-cyber-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cyber-white mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-bg/50 border border-cyber-white/10 rounded-xl text-cyber-white placeholder:text-cyber-white/40 focus:border-cyber-green/50 focus:outline-none transition-colors"
                      placeholder="محمد أحمد"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cyber-white mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-bg/50 border border-cyber-white/10 rounded-xl text-cyber-white placeholder:text-cyber-white/40 focus:border-cyber-green/50 focus:outline-none transition-colors"
                      placeholder="example@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-cyber-white mb-2">
                      الشركة (اختياري)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cyber-bg/50 border border-cyber-white/10 rounded-xl text-cyber-white placeholder:text-cyber-white/40 focus:border-cyber-green/50 focus:outline-none transition-colors"
                      placeholder="اسم الشركة"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-cyber-white mb-2">
                      الميزانية التقريبية
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cyber-bg/50 border border-cyber-white/10 rounded-xl text-cyber-white focus:border-cyber-green/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">اختر الميزانية</option>
                      <option value="under-1k">أقل من $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-cyber-white mb-2">
                    الموضوع *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-bg/50 border border-cyber-white/10 rounded-xl text-cyber-white placeholder:text-cyber-white/40 focus:border-cyber-green/50 focus:outline-none transition-colors"
                    placeholder="نوع الخدمة المطلوبة"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-cyber-white mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cyber-bg/50 border border-cyber-white/10 rounded-xl text-cyber-white placeholder:text-cyber-white/40 focus:border-cyber-green/50 focus:outline-none transition-colors resize-none"
                    placeholder="اشرح تفاصيل المشروع والخدمة المطلوبة..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-xl transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-cyber-green/50 cursor-not-allowed'
                      : 'bg-cyber-green text-cyber-bg hover:bg-cyber-green-bright hover:shadow-lg hover:shadow-cyber-green/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-cyber-bg/30 border-t-cyber-bg rounded-full animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : submitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      تم الإرسال بنجاح!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;