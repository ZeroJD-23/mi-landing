"use client";

import { useState } from "react";
import {
  Users,
  Wallet,
  Activity,
  Smartphone,
  Bell,
  BarChart3,
  Landmark,
  UserCheck,
  Building2,
  Code2,
  Palette,
  Database,
  Zap,
  ShieldCheck,
  Lock,
  Clock,
  CheckCircle2,
  AlertTriangle,
  FileX,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const features = [
  {
    icon: <Users className="w-7 h-7" />,
    title: "Gestión de Clientes",
    desc: "Registra y organiza todos tus clientes con sus datos, historial de préstamos y comportamiento de pago en un solo lugar.",
  },
  {
    icon: <Wallet className="w-7 h-7" />,
    title: "Registro de Pagos Diarios",
    desc: "Registra abonos diarios de forma rápida. El sistema calcula automáticamente saldos pendientes y fechas de vencimiento.",
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Control de Deudas en Tiempo Real",
    desc: "Visualiza el estado de cada deuda al instante: saldo capital, intereses generados y días de mora sin necesidad de calcular manualmente.",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Acceso Desde Cualquier Dispositivo",
    desc: "Usa CobraDiario desde tu teléfono, tablet o computadora. Toda tu cartera siempre disponible donde la necesites.",
  },
  {
    icon: <Bell className="w-7 h-7" />,
    title: "Alertas y Recordatorios",
    desc: "Recibe notificaciones automáticas sobre pagos próximos a vencer y clientes en mora para que no pierdas ni un cobro.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Reportes y Estadísticas",
    desc: "Genera reportes de cobranza, rendimiento de cartera y flujo de caja para tomar mejores decisiones de negocio.",
  },
];

const audiences = [
  {
    icon: <Landmark className="w-10 h-10" />,
    title: "Prestamistas",
    desc: "Gestiona múltiples carteras de préstamos con diferentes tasas y plazos de forma ordenada y profesional.",
  },
  {
    icon: <UserCheck className="w-10 h-10" />,
    title: "Cobradores",
    desc: "Lleva tu ruta de cobro diaria organizada, registra pagos en campo y sincroniza automáticamente con la oficina.",
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Pequeños Negocios Financieros",
    desc: "Formaliza y escala tu negocio de crédito con herramientas que antes solo tenían las grandes financieras.",
  },
];

const stack = [
  {
    name: "Next.js",
    icon: <Code2 className="w-8 h-8" />,
    color: "from-slate-800 to-slate-600",
    desc: "Framework React para producción",
  },
  {
    name: "Tailwind CSS",
    icon: <Palette className="w-8 h-8" />,
    color: "from-cyan-700 to-cyan-500",
    desc: "Estilos utilitarios modernos",
  },
  {
    name: "Firebase",
    icon: <Database className="w-8 h-8" />,
    color: "from-orange-700 to-orange-500",
    desc: "Base de datos y autenticación",
  },
  {
    name: "Vercel",
    icon: <Zap className="w-8 h-8" />,
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
  { label: "Planes", href: "#planes" },
  { label: "Equipo", href: "#equipo" },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          {/* Desktop CTA */}
          <a
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/30"
          >
            Solicitar Demo →
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900 border-b border-slate-800 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="#cta"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-base font-bold transition-all duration-200"
                >
                  Solicitar Demo →
                </a>
              </div>
            </nav>
          </div>
        )}
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
                icon: <AlertTriangle className="w-7 h-7 text-red-400" />,
                title: "Errores de cálculo",
                desc: "Llevar los pagos a mano genera errores aritméticos frecuentes. Un número mal anotado puede significar pérdidas económicas o conflictos con tus clientes.",
              },
              {
                icon: <FileX className="w-7 h-7 text-red-400" />,
                title: "Pérdida de información",
                desc: "Cuadernos extraviados, páginas mojadas o notas ilegibles hacen que pierdas registros vitales de pagos, saldos y acuerdos con tus clientes.",
              },
              {
                icon: <Clock className="w-7 h-7 text-red-400" />,
                title: "Falta de control y tiempo",
                desc: "Revisar deudas pendientes, hacer cuentas y preparar reportes te consume horas cada semana. Sin un sistema, el negocio crece y el caos también.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="group relative bg-slate-800/60 border border-slate-700/50 rounded-3xl p-8 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
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
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors text-emerald-400 duration-300">
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
                <div className="flex justify-center mb-5 text-emerald-400">{a.icon}</div>
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
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-5 shadow-lg text-white`}
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

      {/* ── PLANES ─────────────────────────────────────────────────────────── */}
      <section id="planes" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
              Planes y Precios
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
              Crece sin límites
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Elige el plan que mejor se adapte al tamaño de tu negocio.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 max-w-4xl mx-auto">
            {/* Plan Semanal */}
            <div className="w-full md:w-1/2 bg-slate-800/60 border border-slate-700/50 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">Plan Semanal</h3>
              <p className="text-slate-400 mb-6 min-h-[48px]">
                Ideal para pequeños prestamistas que están iniciando
              </p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">$48.000</span>
                <span className="text-slate-500"> COP / sem</span>
              </div>
              <ul className="mb-8 space-y-4 flex-1">
                {["Gestión de clientes ilimitada", "Registro de pagos diarios", "Reportes básicos", "Soporte por email"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-600 hover:border-emerald-500/50 text-white font-semibold transition-all duration-300 hover:bg-slate-800"
              >
                Elegir Semanal
              </a>
            </div>

            {/* Plan Mensual */}
            <div className="w-full md:w-1/2 relative bg-gradient-to-b from-slate-800 to-slate-800/80 border border-emerald-500/50 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 shadow-2xl shadow-emerald-500/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full shadow-lg shadow-emerald-500/30">
                  Recomendado
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 mt-2">Plan Mensual</h3>
              <p className="text-slate-400 mb-6 min-h-[48px]">
                Perfecto para negocios con mayor volumen de clientes
              </p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">$164.000</span>
                <span className="text-slate-500"> COP / mes</span>
              </div>
              <ul className="mb-8 space-y-4 flex-1">
                {["Todo lo del plan semanal", "Múltiples cobradores", "Reportes avanzados y exportación", "Alertas automáticas", "Soporte prioritario 24/7"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                Elegir Mensual
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPO ───────────────────────────────────────────────────────── */}
      <section id="equipo" className="py-24 bg-slate-950">
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

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] max-w-sm bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-black/20 hover:shadow-emerald-500/10"
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 text-xl font-black mx-auto mb-5 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-400/40 transition-shadow duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-white leading-tight mb-2">{member.name}</h3>
                <p className="text-emerald-400 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section id="cta" className="py-32 bg-slate-900 relative overflow-hidden">
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
              Solicitar Demo Gratuita <ArrowRight className="w-5 h-5" />
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
          <div className="mt-16 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 text-slate-400">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              <span className="font-medium text-sm">Datos protegidos</span>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-emerald-500" />
              <span className="font-medium text-sm">Acceso seguro</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-emerald-500" />
              <span className="font-medium text-sm">Disponible 24/7</span>
            </div>
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
