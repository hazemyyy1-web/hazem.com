import { useState } from 'react';
import { Search, Calendar, Clock, ChevronRight, Tag, Filter } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Stored XSS في نظام إدارة المحتوى: دراسة حالة',
    excerpt: 'اكتشاف ثغرة Stored XSS خطيرة في نظام CMS شائع تسمح للمهاجم بسرقة بيانات المستخدمين وتنفيذ أكواد JavaScript.',
    content: 'في هذه المقالة، سأشرح بالتفصيل كيفية اكتشاف واستغلال ثغرة Stored XSS...',
    date: '2024-03-15',
    readTime: '12 دقيقة',
    category: 'Web Security',
    tags: ['XSS', 'Web', 'Bug Bounty'],
    featured: true,
  },
  {
    id: 2,
    title: 'OTP Bypass: تجاوز التحقق بخطوتين',
    excerpt: 'شرح تقني مفصل لطرق تجاوز أنظمة التحقق بخطوتين في تطبيقات مختلفة.',
    content: 'التحقق بخطوتين (2FA) يعتبر من أهم وسائل الحماية...',
    date: '2024-03-10',
    readTime: '15 دقيقة',
    category: 'Web Security',
    tags: ['OTP', 'Authentication', 'Web'],
  },
  {
    id: 3,
    title: 'Side-Channel Timing Attack: هجوم التوقيت الجانبي',
    excerpt: 'كيف يمكن استغلال فروق التوقيت في الاستجابات لاكتشاف معلومات حساسة.',
    content: 'هجمات التوقيت الجانبي تعتمد على قياس الفروق الزمنية...',
    date: '2024-03-05',
    readTime: '10 دقيقة',
    category: 'Cryptography',
    tags: ['Timing Attack', 'Side-Channel', 'Cryptography'],
  },
  {
    id: 4,
    title: 'API Security: تسلسل ثغرات API',
    excerpt: 'استغلال سلسلة من الثغرات في API للحصول على وصول غير مصرح.',
    content: 'غالباً ما تكون الأنظمة معرضة لتسلسل ثغرات...',
    date: '2024-02-28',
    readTime: '18 دقيقة',
    category: 'API Security',
    tags: ['API', 'Chain Attack', 'Web'],
    featured: true,
  },
  {
    id: 5,
    title: 'OAuth 2.0 Vulnerability: ثغرة في تدفق Authorization',
    excerpt: 'اكتشاف ثغرة في تطبيق OAuth تتيح الوصول غير المصرح به.',
    content: 'OAuth 2.0 هو بروتوكول授权 widely used...',
    date: '2024-02-20',
    readTime: '14 دقيقة',
    category: 'Web Security',
    tags: ['OAuth', 'Authentication', 'Web'],
  },
  {
    id: 6,
    title: 'Race Condition: استغلال شروط التوقيت',
    excerpt: 'كيف يمكن استغلال Race Conditions في تطبيقات الدفع.',
    content: 'Race Condition يحدث عندما...',
    date: '2024-02-15',
    readTime: '11 دقيقة',
    category: 'Web Security',
    tags: ['Race Condition', 'Web', 'Payment'],
  },
];

const categories = ['الكل', 'Web Security', 'API Security', 'Cryptography'];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory =
      selectedCategory === 'الكل' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="relative py-16 bg-cyber-bgAlt overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid bg-bg-size-50 opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-cyber-green text-sm mb-4 block">// المدونة</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-cyber-white mb-4">
              المقالات التقنية
            </h1>
            <p className="text-cyber-white/60 max-w-2xl mx-auto">
              اكتشف أحدث الأبحاث والتقنيات في مجال الأمان السيبراني
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyber-white/40" />
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-cyber-bg/50 border border-cyber-white/10 rounded-xl text-cyber-white placeholder:text-cyber-white/40 focus:border-cyber-green/50 focus:outline-none transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyber-white/40" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full sm:w-auto px-12 py-4 bg-cyber-bg/50 border border-cyber-white/10 rounded-xl text-cyber-white appearance-none cursor-pointer focus:border-cyber-green/50 focus:outline-none transition-colors pr-10"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-cyber-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Posts */}
          {selectedCategory === 'الكل' && searchQuery === '' && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-cyber-white mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-cyber-green rounded-full" />
                مقالات مميزة
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredPosts
                  .filter((post) => post.featured)
                  .map((post) => (
                    <article
                      key={post.id}
                      className="group relative p-6 bg-gradient-to-br from-cyber-green/10 to-transparent rounded-2xl border border-cyber-green/20 hover:border-cyber-green/40 transition-all duration-300"
                    >
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-mono bg-cyber-green/20 rounded-full text-cyber-green">
                          مميز
                        </span>
                      </div>
                      <div className="mt-8">
                        <div className="flex items-center gap-4 text-sm text-cyber-white/50 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-cyber-white mb-3 group-hover:text-cyber-green transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-cyber-white/60 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 text-xs font-mono bg-cyber-white/5 rounded text-cyber-white/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button className="flex items-center gap-2 text-cyber-green hover:underline">
                            اقرأ المزيد
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold text-cyber-white mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-cyber-green rounded-full" />
              {selectedCategory === 'الكل' ? 'جميع المقالات' : selectedCategory}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group p-6 bg-cyber-bgAlt/50 rounded-2xl border border-cyber-white/10 hover:border-cyber-green/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-cyber-green" />
                    <span className="text-sm text-cyber-green font-mono">{post.category}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-cyber-white/50 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-cyber-white mb-3 group-hover:text-cyber-green transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-cyber-white/60 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs font-mono bg-cyber-white/5 rounded text-cyber-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-1 text-cyber-green text-sm hover:underline">
                      اقرأ
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-cyber-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-cyber-white/30" />
                </div>
                <h3 className="text-xl font-bold text-cyber-white mb-2">لا توجد نتائج</h3>
                <p className="text-cyber-white/60">
                  جرب البحث بكلمات مختلفة أو تغيير الفئة
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;