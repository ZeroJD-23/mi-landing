import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CobraDiario – Gestión de Préstamos y Cobranzas Diarias",
  description:
    "Digitaliza y automatiza tu negocio de cobradiarios. Controla clientes, pagos y deudas en tiempo real con CobraDiario.",
};

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const features = [
  {
    icon: "👥",
    title: "Gestión de Clientes",
    desc: "Registra y organiza todos tus clientes con sus datos, historial de préstamos y comportamiento de pago en un solo lugar.",
  },
  {
    icon: "💰",
    title: "Registro de Pagos Diarios",
    desc: "Registra abonos diarios de forma rápida. El sistema calcula automáticamente saldos pendientes y fechas de vencimiento.",
  },
  {
    icon: "📊",
    title: "Control de Deudas en Tiempo Real",
    desc: "Visualiza el estado de cada deuda al instante: saldo capital, intereses generados y días de mora sin necesidad de calcular manualmente.",
  },
  {
    icon: "📱",
    title: "Acceso Desde Cualquier Dispositivo",
    desc: "Usa CobraDiario desde tu teléfono, tablet o computadora. Toda tu cartera siempre disponible donde la necesites.",
  },
  {
    icon: "🔔",
    title: "Alertas y Recordatorios",
    desc: "Recibe notificaciones automáticas sobre pagos próximos a vencer y clientes en mora para que no pierdas ni un cobro.",
  },
  {
    icon: "📈",
    title: "Reportes y Estadísticas",
    desc: "Genera reportes de cobranza, rendimiento de cartera y flujo de caja para tomar mejores decisiones de negocio.",
  },
];

const audiences = [
  {
    icon: "🏦",
    title: "Prestamistas",
    desc: "Gestiona múltiples carteras de préstamos con diferentes tasas y plazos de forma ordenada y profesional.",
  },
  {
    icon: "🚶",
    title: "Cobradores",
    desc: "Lleva tu ruta de cobro diaria organizada, registra pagos en campo y sincroniza automáticamente con la oficina.",
  },
  {
    icon: "🏪",
    title: "Pequeños Negocios Financieros",
    desc: "Formaliza y escala tu negocio de crédito con herramientas que antes solo tenían las grandes financieras.",
  },
];

const stack = [
  {
    name: "Next.js",
    icon: "▲",
    color: "from-slate-800 to-slate-600",
    desc: "Framework React para producción",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "from-cyan-700 to-cyan-500",
    desc: "Estilos utilitarios modernos",
  },
  {
    name: "Firebase",
    icon: "🔥",
    color: "from-orange-700 to-orange-500",
    desc: "Base de datos y autenticación",
  },
  {
    name: "Vercel",
    icon: "⚡",
    color: "from-violet-700 to-violet-500",
    desc: "Despliegue y hosting en la nube",
  },
];

const team = [
  { name: "Julian David Moncada Pacheco", role: "Diseñador", avatar: "JD" },
  { name: "Sharol Melissa Sánchez Rojas", role: "Directora y analista", avatar: "SS" },
  { name: "Jhoan David Quiñones Lobo", role: "Desarrollador Full Stack", avatar: "JQ" },
];

const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Características", href: "#caracteristicas" },
  { label: "¿Quién lo usa?", href: "#audiencia" },
  { label: "Tecnología", href: "#stack" },
  { label: "Equipo", href: "#equipo" },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-bold text-xl text-white">
            <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 text-sm font-black">
              CD
            </span>
            CobraDiario
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/30"
          >
            Solicitar Demo →
          </a>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background gradient blobs */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-800/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Sistema de Gestión Financiera
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
            Digitaliza tu negocio de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              cobradiarios
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Gestiona tus préstamos, pagos y cartera de clientes de forma
            eficiente, segura y desde cualquier dispositivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              id="hero-cta-primary"
              href="#cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg transition-all duration-300 shadow-xl shadow-emerald-500/40 hover:shadow-emerald-400/50 hover:-translate-y-0.5"
            >
              Comenzar Ahora →
            </a>
            <a
              id="hero-cta-secondary"
              href="#caracteristicas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Ver Características
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Clientes activos" },
              { value: "$2M+", label: "En cartera gestionada" },
              { value: "99.9%", label: "Disponibilidad" },
              { value: "24/7", label: "Acceso en línea" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-black text-emerald-400">{s.value}</p>
                <p className="text-sm text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ──────────────────────────────────────────────────────── */}
      <section id="problema" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
              El Problema
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
              Los cuadernos ya no son suficientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "❌",
                title: "Errores de cálculo",
                desc: "Llevar los pagos a mano genera errores aritméticos frecuentes. Un número mal anotado puede significar pérdidas económicas o conflictos con tus clientes.",
              },
              {
                icon: "📋",
                title: "Pérdida de información",
                desc: "Cuadernos extraviados, páginas mojadas o notas ilegibles hacen que pierdas registros vitales de pagos, saldos y acuerdos con tus clientes.",
              },
              {
                icon: "⏰",
                title: "Falta de control y tiempo",
                desc: "Revisar deudas pendientes, hacer cuentas y preparar reportes te consume horas cada semana. Sin un sistema, el negocio crece y el caos también.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="group relative bg-slate-800/60 border border-slate-700/50 rounded-3xl p-8 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-2xl mb-5">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-emerald-900/40 to-teal-900/30 border border-emerald-500/20 text-center">
            <p className="text-xl md:text-2xl font-semibold text-white">
              <span className="text-emerald-400">CobraDiario</span> elimina todos estos problemas con tecnología
              diseñada específicamente para tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* ── CARACTERÍSTICAS ──────────────────────────────────────────────── */}
      <section id="caracteristicas" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
              Características
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Herramientas profesionales diseñadas para el cobrador moderno.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl mb-5 group-hover:bg-emerald-500/20 transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCIA ────────────────────────────────────────────────────── */}
      <section id="audiencia" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
              ¿A quién va dirigido?
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
              Hecho para quienes mueven el crédito
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-800/50 border border-slate-700/50 hover:border-emerald-500/40 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-5">{a.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{a.title}</h3>
                <p className="text-slate-400 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK TECNOLÓGICO ────────────────────────────────────────────── */}
      <section id="stack" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
              Stack Tecnológico
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
              Construido con tecnología de punta
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Usamos las mejores herramientas del ecosistema para garantizar
              rendimiento, seguridad y escalabilidad.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stack.map((s) => (
              <div
                key={s.name}
                className="group relative bg-slate-900 border border-slate-800 hover:border-emerald-500/30 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mx-auto mb-5 shadow-lg`}
                >
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{s.name}</h3>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPO ───────────────────────────────────────────────────────── */}
      <section id="equipo" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
              Equipo
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
              Las personas detrás del producto
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Un equipo apasionado por la tecnología financiera y la inclusión digital.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-slate-800/60 border border-slate-700/50 hover:border-emerald-500/40 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 text-xl font-black mx-auto mb-5 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-400/40 transition-shadow duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-emerald-400 text-sm mt-1 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section id="cta" className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Background */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-600/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-6">
            🚀 Empieza hoy mismo
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Empieza a digitalizar tu negocio{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              hoy
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Únete a los cientos de prestamistas y cobradores que ya gestionan su
            cartera de forma profesional con CobraDiario. Sin papeles, sin errores,
            sin pérdidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              id="cta-final-demo"
              href="mailto:demo@cobradiario.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg transition-all duration-300 shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-400/50 hover:-translate-y-1"
            >
              Solicitar Demo Gratuita →
            </a>
            <a
              id="cta-final-contact"
              href="mailto:info@cobradiario.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full border border-slate-600 hover:border-emerald-500/60 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-300 hover:-translate-y-1"
            >
              Contactar al Equipo
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {["✅ Sin tarjeta de crédito", "✅ Setup en 5 minutos", "✅ Soporte incluido"].map(
              (b) => (
                <span key={b}>{b}</span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-2 font-bold text-xl text-white">
              <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 text-sm font-black">
                CD
              </span>
              CobraDiario
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-slate-500 hover:text-emerald-400 transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} CobraDiario. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
