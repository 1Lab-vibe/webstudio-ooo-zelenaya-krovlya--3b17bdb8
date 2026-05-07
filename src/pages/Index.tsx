import { useState } from "react";
import { Phone, MapPin, Star, Shield, Clock, CheckCircle2, Hammer, Home, Wrench, Snowflake, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import heroImg from "@/assets/hero-roof.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const PHONE = "+7 (495) 123-45-67";
const PHONE_HREF = "tel:+74951234567";

const services = [
  { icon: Home, title: "Монтаж кровли под ключ", desc: "Металлочерепица, профнастил, мягкая кровля. Стропильная система, утепление, водостоки.", price: "от 1 200 ₽/м²" },
  { icon: Wrench, title: "Ремонт кровли", desc: "Локальный или капитальный ремонт. Устранение протечек, замена обрешётки и покрытия.", price: "от 600 ₽/м²" },
  { icon: Hammer, title: "Демонтаж старой кровли", desc: "Аккуратный демонтаж с вывозом мусора. Подготовка основания под новое покрытие.", price: "от 250 ₽/м²" },
  { icon: Snowflake, title: "Снегозадержатели и водостоки", desc: "Монтаж снегозадержателей, водосточных систем, вентиляции и мансардных окон.", price: "от 850 ₽/пог.м" },
];

const reviews = [
  { name: "Алексей М.", text: "Перекрыли крышу на даче в Истринском районе за 4 дня. Чисто, без задержек, смета не выросла. Рекомендую.", rating: 5 },
  { name: "Ирина К.", text: "Был ремонт после протечки. Приехали в день обращения, нашли причину, переделали узел примыкания. Год — всё сухо.", rating: 5 },
  { name: "Сергей В.", text: "Брали под ключ: стропилка, утепление, металлочерепица. Бригада адекватная, прораб всегда на связи.", rating: 5 },
];

const process = [
  { n: "01", t: "Заявка и звонок", d: "Перезваниваем в течение 15 минут, уточняем задачу." },
  { n: "02", t: "Бесплатный замер", d: "Выезд по Москве и МО в течение 1–2 дней." },
  { n: "03", t: "Смета и договор", d: "Прозрачная смета, фиксированная цена в договоре." },
  { n: "04", t: "Работы и сдача", d: "Соблюдаем сроки. Гарантия до 10 лет на монтаж." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка принята. Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-display font-bold">З</div>
            <div className="leading-tight">
              <div className="font-display font-bold text-base">Зеленая Кровля</div>
              <div className="text-xs text-muted-foreground">ООО · Москва и МО</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#services" className="hover:text-primary">Услуги</a>
            <a href="#portfolio" className="hover:text-primary">Работы</a>
            <a href="#process" className="hover:text-primary">Как работаем</a>
            <a href="#reviews" className="hover:text-primary">Отзывы</a>
            <a href="#contacts" className="hover:text-primary">Контакты</a>
          </nav>
          <a href={PHONE_HREF} className="hidden sm:flex items-center gap-2 font-display font-semibold text-sm">
            <Phone className="h-4 w-4 text-primary" /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Монтаж кровли в Москве" width={1600} height={1024} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              4,9 на Яндекс Картах · 5 лет на рынке
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Кровельные работы в Москве и&nbsp;области под ключ
            </h1>
            <p className="mt-5 text-lg text-white/90 max-w-xl">
              Монтаж, ремонт и обслуживание кровли. Бесплатный замер, фиксированная смета, гарантия до 10 лет.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-cta font-semibold">
                <a href="#request">Бесплатный замер <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white">
                <a href={PHONE_HREF}><Phone className="mr-1 h-4 w-4" /> {PHONE}</a>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
              {[
                { k: "5 лет", v: "на рынке" },
                { k: "300+", v: "объектов" },
                { k: "до 10 лет", v: "гарантия" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-2xl font-bold sm:text-3xl">{s.k}</dt>
                  <dd className="text-xs text-white/80 sm:text-sm">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-secondary">
        <div className="container grid grid-cols-2 gap-6 py-6 md:grid-cols-4">
          {[
            { i: Shield, t: "Договор и гарантия" },
            { i: Clock, t: "Замер за 1–2 дня" },
            { i: CheckCircle2, t: "Фикс. цена в смете" },
            { i: MapPin, t: "Москва и область" },
          ].map(({ i: Icon, t }) => (
            <div key={t} className="flex items-center gap-3 text-sm font-medium">
              <Icon className="h-5 w-5 text-primary shrink-0" />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Услуги</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Что делаем</h2>
          <p className="mt-3 text-muted-foreground">Полный цикл кровельных работ для частных домов, дач и коммерческих объектов.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title} className="p-6 shadow-card hover:-translate-y-1 transition-transform">
              <s.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <p className="mt-4 font-display font-semibold text-primary">{s.price}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Цены ориентировочные. Точная стоимость — после бесплатного замера.</p>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-secondary py-20">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Наши работы</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">До и после</h2>
            </div>
            <a href="#request" className="text-sm font-semibold text-primary hover:underline">Заказать похожую работу →</a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { img: portfolio1, t: "Замена кровли, Одинцово", d: "Металлочерепица, 180 м², 6 дней" },
              { img: portfolio2, t: "Дом в Подольске", d: "Композитная черепица, 240 м², 9 дней" },
              { img: portfolio3, t: "Коттедж, Красногорск", d: "Мягкая кровля, 160 м², 5 дней" },
            ].map((p) => (
              <Card key={p.t} className="overflow-hidden shadow-card">
                <img src={p.img} alt={p.t} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display font-bold">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="container py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Как работаем</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">4 шага до готовой кровли</h2>
        </div>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <li key={p.n} className="rounded-lg border border-border bg-card p-6">
              <div className="font-display text-3xl font-extrabold text-accent">{p.n}</div>
              <h3 className="mt-3 font-display font-bold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-secondary py-20">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Отзывы</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Что говорят клиенты</h2>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
              <span className="font-semibold">4,9</span>
              <span className="text-muted-foreground">· отзывы на Яндекс Картах</span>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <Card key={r.name} className="p-6 shadow-card">
                <div className="flex">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
                <p className="mt-3 text-sm leading-relaxed">«{r.text}»</p>
                <p className="mt-4 font-display font-semibold text-sm">{r.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="container py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Заявка</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Бесплатный замер и смета за 1 день</h2>
            <p className="mt-4 text-muted-foreground">Оставьте заявку — перезвоним в течение 15 минут, обсудим задачу и согласуем удобное время выезда инженера.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Выезд замерщика — 0 ₽", "Расчёт сметы в день обращения", "Договор с фиксированной ценой", "Гарантия на работы до 10 лет"].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>
          <Card className="p-6 sm:p-8 shadow-card">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Ваше имя</label>
                <Input className="mt-1.5" placeholder="Иван" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium">Телефон</label>
                <Input className="mt-1.5" type="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium">Кратко о задаче (необязательно)</label>
                <Textarea className="mt-1.5" placeholder="Тип кровли, площадь, адрес объекта" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-cta font-semibold">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground">Отправляя форму, вы соглашаетесь с обработкой персональных данных.</p>
            </form>
          </Card>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-primary text-primary-foreground py-16">
        <div className="container grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-bold">ООО «Зеленая Кровля»</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">Кровельные работы в Москве и Московской области. ИНН 7700000000.</p>
          </div>
          <div className="space-y-2 text-sm">
            <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-accent"><Phone className="h-4 w-4" /> {PHONE}</a>
            <a href="mailto:info@zelenaya-krovlya.ru" className="flex items-center gap-2 hover:text-accent"><Mail className="h-4 w-4" /> info@zelenaya-krovlya.ru</a>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Москва, выезд по всей области</p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> Пн–Сб, 9:00 — 20:00</p>
          </div>
          <div>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <a href="#request">Оставить заявку</a>
            </Button>
          </div>
        </div>
        <div className="container mt-10 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} ООО «Зеленая Кровля». Все права защищены.
        </div>
      </section>
    </div>
  );
};

export default Index;
