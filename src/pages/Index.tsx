import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/eb6178e8-67b6-4ad7-9c04-d85c47d4f367/files/4b703e41-4d61-4b49-884b-7edd86407166.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "services", label: "Услуги" },
  { id: "about", label: "О нас" },
  { id: "contact", label: "Контакты" },
];

const SPECIALISTS = [
  {
    id: 1,
    name: "Алексей Воронов",
    role: "Senior Frontend Developer",
    avatar: "АВ",
    avatarColor: "from-blue-500 to-violet-600",
    rating: 4.9,
    reviews: 47,
    rate: "от 4500 ₽/ч",
    available: true,
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    exp: "8 лет",
    projects: 94,
    location: "Москва",
    portfolio: ["E-commerce платформа", "SaaS дашборд", "Мобильное приложение"],
  },
  {
    id: 2,
    name: "Мария Климова",
    role: "Data Scientist / ML Engineer",
    avatar: "МК",
    avatarColor: "from-violet-500 to-purple-700",
    rating: 5.0,
    reviews: 31,
    rate: "от 5500 ₽/ч",
    available: true,
    skills: ["Python", "TensorFlow", "PyTorch", "SQL"],
    exp: "6 лет",
    projects: 52,
    location: "Санкт-Петербург",
    portfolio: ["Рекомендательная система", "NLP-модель", "CV-детектор"],
  },
  {
    id: 3,
    name: "Денис Соколов",
    role: "DevOps / Cloud Architect",
    avatar: "ДС",
    avatarColor: "from-green-400 to-teal-600",
    rating: 4.8,
    reviews: 63,
    rate: "от 5000 ₽/ч",
    available: false,
    skills: ["Kubernetes", "AWS", "Terraform", "CI/CD"],
    exp: "10 лет",
    projects: 118,
    location: "Новосибирск",
    portfolio: ["Миграция в облако", "Kubernetes кластер", "CI/CD pipeline"],
  },
  {
    id: 4,
    name: "Юлия Нечаева",
    role: "UI/UX + Frontend",
    avatar: "ЮН",
    avatarColor: "from-teal-400 to-blue-600",
    rating: 4.9,
    reviews: 88,
    rate: "от 3800 ₽/ч",
    available: true,
    skills: ["Figma", "React", "CSS", "Motion"],
    exp: "5 лет",
    projects: 76,
    location: "Удалённо",
    portfolio: ["Дизайн-система", "Landing pages", "Мобильный UX"],
  },
  {
    id: 5,
    name: "Игорь Белов",
    role: "Backend / System Architect",
    avatar: "ИБ",
    avatarColor: "from-indigo-500 to-violet-600",
    rating: 4.7,
    reviews: 54,
    rate: "от 4800 ₽/ч",
    available: true,
    skills: ["Go", "PostgreSQL", "Redis", "gRPC"],
    exp: "9 лет",
    projects: 103,
    location: "Казань",
    portfolio: ["Highload API", "Микросервисы", "Payment gateway"],
  },
  {
    id: 6,
    name: "Светлана Орлова",
    role: "QA / Automation Engineer",
    avatar: "СО",
    avatarColor: "from-green-400 to-teal-600",
    rating: 4.8,
    reviews: 41,
    rate: "от 3200 ₽/ч",
    available: false,
    skills: ["Selenium", "Cypress", "Jest", "Python"],
    exp: "7 лет",
    projects: 89,
    location: "Екатеринбург",
    portfolio: ["Авто-тесты E2E", "Load testing", "QA стратегия"],
  },
];

const SERVICES = [
  { icon: "Code2", title: "Разработка под ключ", desc: "Полный цикл: от архитектуры до деплоя. Фронт, бэк, БД, DevOps.", color: "cyan" },
  { icon: "Users", title: "Аутстаффинг", desc: "Расширьте команду проверенными специалистами на любой срок.", color: "purple" },
  { icon: "Zap", title: "Быстрый найм", desc: "Подберём кандидата за 48 часов. Гарантия совместимости.", color: "green" },
  { icon: "Shield", title: "Гарантия качества", desc: "Все специалисты проходят техническое интервью и проверку портфолио.", color: "pink" },
  { icon: "BarChart3", title: "Аналитика & BI", desc: "Дашборды, ETL-пайплайны, ML-модели для вашего бизнеса.", color: "cyan" },
  { icon: "Cloud", title: "Cloud & DevOps", desc: "Миграция в облако, настройка CI/CD, Kubernetes-кластеры.", color: "purple" },
];

const REVIEWS = [
  { name: "Павел Громов", company: "CEO, FinTech Startup", text: "Нашли Senior-разработчика за 2 дня. Уже 8 месяцев работаем вместе — результат превзошёл ожидания.", rating: 5, avatar: "ПГ" },
  { name: "Анна Лебедева", company: "Product Manager, Retail Corp", text: "Отличная платформа! Очень удобные профили специалистов — видишь реальные проекты и отзывы.", rating: 5, avatar: "АЛ" },
  { name: "Михаил Захаров", company: "CTO, SaaS Platform", text: "Пользуемся уже год. Закрыли 12 позиций. Качество специалистов стабильно высокое.", rating: 5, avatar: "МЗ" },
];

const TEAM = [
  { name: "Роман Кузнецов", role: "Founder & CEO", avatar: "РК", color: "from-blue-500 to-violet-600" },
  { name: "Екатерина Дмитриева", role: "Head of Talent", avatar: "ЕД", color: "from-violet-500 to-purple-700" },
  { name: "Артём Новиков", role: "CTO", avatar: "АН", color: "from-teal-400 to-blue-600" },
  { name: "Ольга Семёнова", role: "Head of Sales", avatar: "ОС", color: "from-green-400 to-teal-600" },
];

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon key={i} name="Star" size={13} className={i <= Math.round(value) ? "fill-yellow-400 text-yellow-400" : "text-white/20"} />
      ))}
    </div>
  );
}

function SpecialistCard({ spec, onClick }: { spec: typeof SPECIALISTS[0]; onClick: () => void }) {
  return (
    <div className="glass-card rounded-2xl p-6 cursor-pointer" onClick={onClick}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${spec.avatarColor} flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0`}>
          {spec.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display font-semibold text-white text-base">{spec.name}</h3>
            <span className={spec.available ? "badge-available" : "badge-busy"}>
              {spec.available ? "Доступен" : "Занят"}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mt-0.5">{spec.role}</p>
          <div className="flex items-center gap-2 mt-1">
            <StarRating value={spec.rating} />
            <span className="text-yellow-400 text-xs font-semibold">{spec.rating}</span>
            <span className="text-muted-foreground text-xs">({spec.reviews})</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {spec.skills.map((s, i) => (
          <span key={s} className={`skill-tag ${i % 3 === 1 ? "skill-tag-purple" : i % 3 === 2 ? "skill-tag-green" : ""}`}>{s}</span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center">
          <div className="text-neon-cyan font-display font-bold text-lg">{spec.exp}</div>
          <div className="text-muted-foreground text-xs">опыта</div>
        </div>
        <div className="text-center border-x border-white/5">
          <div className="text-neon-cyan font-display font-bold text-lg">{spec.projects}</div>
          <div className="text-muted-foreground text-xs">проектов</div>
        </div>
        <div className="text-center">
          <div className="text-neon-cyan font-display font-bold text-sm leading-tight">{spec.rate}</div>
          <div className="text-muted-foreground text-xs">ставка</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
          <Icon name="MapPin" size={12} />
          <span>{spec.location}</span>
        </div>
        <button className="gradient-btn text-xs px-4 py-1.5 rounded-lg font-semibold" style={{ color: '#080c14' }} onClick={(e) => { e.stopPropagation(); onClick(); }}>
          Профиль →
        </button>
      </div>
    </div>
  );
}

function SpecialistModal({ spec, onClose }: { spec: typeof SPECIALISTS[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors" onClick={onClose}>
          <Icon name="X" size={22} />
        </button>
        <div className="flex items-start gap-5 mb-6">
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${spec.avatarColor} flex items-center justify-center text-white font-display font-bold text-2xl flex-shrink-0`}>
            {spec.avatar}
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="font-display font-bold text-white text-2xl">{spec.name}</h2>
              <span className={spec.available ? "badge-available" : "badge-busy"}>
                {spec.available ? "Доступен" : "Занят"}
              </span>
            </div>
            <p className="text-neon-cyan text-sm mt-1">{spec.role}</p>
            <div className="flex items-center gap-2 mt-2">
              <StarRating value={spec.rating} />
              <span className="text-yellow-400 text-sm font-bold">{spec.rating}</span>
              <span className="text-muted-foreground text-sm">· {spec.reviews} отзывов</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { val: spec.exp, label: "опыта" },
            { val: String(spec.projects), label: "проектов" },
            { val: spec.rate, label: "ставка" },
          ].map((s) => (
            <div key={s.label} className="counter-card">
              <div className="gradient-text font-display font-bold text-xl">{s.val}</div>
              <div className="text-muted-foreground text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h3 className="font-display font-semibold text-white mb-3 text-lg">Стек технологий</h3>
          <div className="flex flex-wrap gap-2">
            {spec.skills.map((s, i) => (
              <span key={s} className={`skill-tag text-sm px-3 py-1 ${i % 3 === 1 ? "skill-tag-purple" : i % 3 === 2 ? "skill-tag-green" : ""}`}>{s}</span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-display font-semibold text-white mb-3 text-lg">Портфолио</h3>
          <div className="space-y-2">
            {spec.portfolio.map((p) => (
              <div key={p} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.1)' }}>
                <Icon name="FolderOpen" size={16} className="text-neon-cyan" />
                <span className="text-white/80 text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-display font-semibold text-white mb-3 text-lg">Отзывы клиентов</h3>
          <div className="space-y-3">
            {REVIEWS.slice(0, 2).map((r) => (
              <div key={r.name} className="p-4 rounded-xl" style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">{r.avatar}</div>
                  <span className="text-white text-sm font-semibold">{r.name}</span>
                  <StarRating value={r.rating} />
                </div>
                <p className="text-muted-foreground text-sm">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button className="gradient-btn flex-1 py-3 rounded-xl font-display font-semibold" style={{ color: '#080c14' }}>Связаться</button>
          <button className="flex-1 py-3 rounded-xl font-display font-semibold border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/5 transition-colors">В список</button>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedSpec, setSelectedSpec] = useState<typeof SPECIALISTS[0] | null>(null);
  const [filterRole, setFilterRole] = useState("Все");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const roles = ["Все", "Frontend", "Backend", "DevOps", "Data Science", "QA", "UI/UX"];

  const filteredSpecs = SPECIALISTS.filter((s) => {
    if (filterRole === "Все") return true;
    if (filterRole === "Frontend") return s.role.toLowerCase().includes("frontend");
    if (filterRole === "Backend") return s.role.toLowerCase().includes("backend");
    if (filterRole === "DevOps") return s.role.toLowerCase().includes("devops") || s.role.toLowerCase().includes("cloud");
    if (filterRole === "Data Science") return s.role.toLowerCase().includes("data");
    if (filterRole === "QA") return s.role.toLowerCase().includes("qa");
    if (filterRole === "UI/UX") return s.role.toLowerCase().includes("ui");
    return true;
  });

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-body" style={{ background: 'var(--bg-dark)' }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/5">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center">
              <Icon name="Cpu" size={16} className="text-dark-base" />
            </div>
            <span className="font-display font-bold text-white text-xl tracking-wider">HIGH<span className="neon-text">WAY</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} className={`nav-link ${activeSection === item.id ? "active" : ""}`} onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm nav-link px-4 py-2 rounded-lg border border-white/10 hover:border-neon-cyan/30 transition-all">Войти</button>
            <button className="gradient-btn text-sm px-5 py-2 rounded-lg font-semibold" style={{ color: '#080c14' }}>Разместить задачу</button>
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden glass border-t border-white/5 px-4 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} className="block w-full text-left nav-link py-2 text-base" onClick={() => scrollTo(item.id)}>{item.label}</button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center mesh-bg grid-bg pt-16">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff' }}>
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                Более 500 специалистов онлайн
              </div>
              <h1 className="font-display font-black text-5xl lg:text-7xl leading-tight text-white mb-6">
                НАЙДИ СВОЕГО<br />
                <span className="gradient-text">IT-ЭКСПЕРТА</span><br />
                ЗА 48 ЧАСОВ
              </h1>
              <p className="text-white/60 text-lg mb-10 max-w-lg leading-relaxed">
                Платформа с проверенными IT-специалистами: подробные профили, реальное портфолио, честные отзывы и гарантия результата.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <button className="gradient-btn px-8 py-4 rounded-xl font-display font-semibold text-lg" style={{ color: '#080c14' }} onClick={() => scrollTo("catalog")}>
                  Найти специалиста →
                </button>
                <button className="px-8 py-4 rounded-xl font-display font-semibold text-lg border border-white/15 text-white hover:border-neon-cyan/40 hover:text-neon-cyan transition-all" onClick={() => scrollTo("about")}>
                  Как это работает
                </button>
              </div>
              <div className="flex flex-wrap gap-8">
                {[{ val: "500+", label: "Специалистов" }, { val: "1200+", label: "Проектов" }, { val: "98%", label: "Довольных клиентов" }].map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-black text-3xl gradient-text">{s.val}</div>
                    <div className="text-muted-foreground text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-float hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden neon-border">
                <img src={HERO_IMAGE} alt="IT Team" className="w-full object-cover h-[500px]" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.9) 0%, transparent 60%)' }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">АВ</div>
                    <div>
                      <div className="text-white text-sm font-semibold">Алексей Воронов</div>
                      <div className="text-neon-cyan text-xs">Senior Frontend · Доступен</div>
                    </div>
                    <button className="ml-auto gradient-btn text-xs px-3 py-1.5 rounded-lg font-semibold" style={{ color: '#080c14' }}>Нанять</button>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 animate-pulse-slow">
                <div className="text-neon-green font-display font-bold text-2xl">4.9★</div>
                <div className="text-muted-foreground text-xs">средний рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 mesh-bg">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="section-line mx-auto mb-4" />
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4">КАТАЛОГ <span className="gradient-text">СПЕЦИАЛИСТОВ</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Все специалисты прошли технический отбор. Изучите профили и выберите лучшего.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setFilterRole(r)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${filterRole === r ? "gradient-btn" : "border border-white/10 text-white/60 hover:border-neon-cyan/30 hover:text-neon-cyan"}`}
                style={filterRole === r ? { color: '#080c14' } : {}}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecs.map((spec) => (
              <SpecialistCard key={spec.id} spec={spec} onClick={() => setSelectedSpec(spec)} />
            ))}
          </div>
          {filteredSpecs.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Icon name="Search" size={48} className="mx-auto mb-4 opacity-30" />
              <p>Специалисты не найдены. Выберите другую категорию.</p>
            </div>
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="section-line mx-auto mb-4" />
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4">УСЛУГИ & <span className="gradient-text">РЕШЕНИЯ</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">От разовой задачи до долгосрочного сотрудничества — подберём оптимальный формат.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {SERVICES.map((svc) => {
              const colorStyles = {
                cyan: { icon: "text-neon-cyan", bg: "rgba(0,212,255,0.08)", border: "rgba(0,212,255,0.15)" },
                purple: { icon: "text-violet-400", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.15)" },
                green: { icon: "text-green-400", bg: "rgba(0,230,118,0.08)", border: "rgba(0,230,118,0.15)" },
                pink: { icon: "text-pink-400", bg: "rgba(255,0,110,0.08)", border: "rgba(255,0,110,0.15)" },
              };
              const cs = colorStyles[svc.color as keyof typeof colorStyles];
              return (
                <div key={svc.title} className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: cs.bg, border: `1px solid ${cs.border}` }}>
                    <Icon name={svc.icon} size={22} className={cs.icon} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl text-white text-center mb-8">Что говорят клиенты</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {REVIEWS.map((r) => (
                <div key={r.name} className="glass-card rounded-2xl p-6">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={15} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">"{r.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">{r.avatar}</div>
                    <div>
                      <div className="text-white text-sm font-semibold">{r.name}</div>
                      <div className="text-muted-foreground text-xs">{r.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 mesh-bg">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="section-line mx-auto mb-4" />
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4">О <span className="gradient-text">TECHHUNT</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Мы соединяем бизнес с лучшими IT-экспертами</h3>
              <p className="text-white/65 leading-relaxed mb-6">
                TechHunt — платформа следующего поколения для найма IT-специалистов. Каждый кандидат проходит многоступенчатый технический отбор.
              </p>
              <p className="text-white/65 leading-relaxed mb-8">
                Наш алгоритм умного подбора анализирует требования и предлагает подходящих специалистов в течение 48 часов.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "CheckCircle2", text: "Технический отбор" },
                  { icon: "ShieldCheck", text: "Проверка портфолио" },
                  { icon: "Clock", text: "Подбор за 48 часов" },
                  { icon: "RefreshCw", text: "Замена без вопросов" },
                ].map((i) => (
                  <div key={i.text} className="flex items-center gap-2 text-white/75 text-sm">
                    <Icon name={i.icon} size={16} className="text-neon-cyan flex-shrink-0" />
                    {i.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "2020", label: "Год основания", color: "cyan" },
                { val: "500+", label: "Специалистов в базе", color: "purple" },
                { val: "47", label: "Городов присутствия", color: "green" },
                { val: "98%", label: "Успешных проектов", color: "cyan" },
              ].map((s) => (
                <div key={s.label} className="counter-card">
                  <div className={`font-display font-black text-3xl ${s.color === "cyan" ? "neon-text" : s.color === "purple" ? "text-violet-400" : "text-green-400"}`}>{s.val}</div>
                  <div className="text-muted-foreground text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl text-white text-center mb-8">Наша команда</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {TEAM.map((m) => (
                <div key={m.name} className="glass-card rounded-2xl p-5 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-3`}>{m.avatar}</div>
                  <div className="text-white font-semibold text-sm">{m.name}</div>
                  <div className="text-muted-foreground text-xs mt-1">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24" style={{ background: 'rgba(0,0,0,0.4)' }}>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="section-line mx-auto mb-4" />
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4">СВЯЖИТЕСЬ <span className="gradient-text">С НАМИ</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Ответим в течение 2 часов и поможем подобрать нужного специалиста</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass-card rounded-3xl p-8">
              {formSent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(0,230,118,0.15)', border: '1px solid rgba(0,230,118,0.3)' }}>
                    <Icon name="CheckCircle2" size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">Заявка отправлена!</h3>
                  <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setFormSent(true); }} className="space-y-5">
                  <h3 className="font-display font-bold text-white text-xl mb-6">Оставить заявку</h3>
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Ваше имя</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none" style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.15)' }} placeholder="Иван Иванов" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Email</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none" style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.15)' }} placeholder="ivan@company.ru" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Расскажите о задаче</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none resize-none" style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.15)' }} placeholder="Нужен Senior React разработчик..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <button type="submit" className="gradient-btn w-full py-4 rounded-xl font-display font-semibold text-lg" style={{ color: '#080c14' }}>Отправить заявку →</button>
                </form>
              )}
            </div>
            <div className="space-y-6">
              <div className="glass-card rounded-3xl p-8 space-y-5">
                <h3 className="font-display font-bold text-white text-xl mb-2">Контактная информация</h3>
                {[
                  { icon: "MapPin", label: "Адрес", value: "Москва, Красная Пресня, 6, офис 420" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                  { icon: "Mail", label: "Email", value: "hello@techhunt.ru" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 9:00–20:00 МСК" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                      <Icon name={c.icon} size={16} className="text-neon-cyan" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">{c.label}</div>
                      <div className="text-white text-sm font-medium">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl overflow-hidden" style={{ height: '260px', border: '1px solid rgba(0,212,255,0.15)' }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.554466%2C55.756850&z=14&l=map&pt=37.554466,55.756850,pm2rdm"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(0.85) hue-rotate(180deg) saturate(0.7)' }}
                  title="Карта офиса TechHunt"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-btn flex items-center justify-center">
              <Icon name="Cpu" size={14} className="text-dark-base" />
            </div>
            <span className="font-display font-bold text-white text-lg tracking-wider">HIGH<span className="neon-text">WAY</span></span>
          </div>
          <p className="text-muted-foreground text-sm">© 2026 Highway. Все права защищены.</p>
          <div className="flex gap-5">
            {["Политика", "Оферта", "FAQ"].map((l) => (
              <button key={l} className="text-muted-foreground text-sm hover:text-neon-cyan transition-colors">{l}</button>
            ))}
          </div>
        </div>
      </footer>

      {selectedSpec && <SpecialistModal spec={selectedSpec} onClose={() => setSelectedSpec(null)} />}
    </div>
  );
}