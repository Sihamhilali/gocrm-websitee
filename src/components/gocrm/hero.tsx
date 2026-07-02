'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Bell,
  ChevronUp,
  ChevronDown,
  DollarSign,
  Users,
  Handshake,
  CheckCircle2,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { fadeInUp, slideInRight } from './animations';

/* ─── SVG Area Chart (CSS‑only feel) ─── */
function RevenueChart() {
  return (
    <div className="w-full h-28 sm:h-32 relative">
      {/* Y-axis labels */}
      <div className="absolute inset-0 flex flex-col justify-between text-[9px] text-gray-400 pr-4 pointer-events-none z-10">
        <span>$40k</span>
        <span>$30k</span>
        <span>$20k</span>
        <span>$10k</span>
        <span>$0</span>
      </div>

      <svg
        viewBox="0 0 300 120"
        preserveAspectRatio="none"
        className="w-full h-full ml-8"
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FD5320" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FD5320" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FD5320" />
            <stop offset="100%" stopColor="#011134" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[24, 48, 72, 96].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="300"
            y2={y}
            stroke="#f0f0f0"
            strokeWidth="0.5"
          />
        ))}

        {/* Area fill */}
        <path
          d="M0,100 Q20,90 40,80 T80,55 T120,65 T160,35 T200,45 T240,20 T280,25 L300,28 L300,120 L0,120 Z"
          fill="url(#areaGrad)"
        />

        {/* Main line */}
        <path
          d="M0,100 Q20,90 40,80 T80,55 T120,65 T160,35 T200,45 T240,20 T280,25 L300,28"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Data point dot */}
        <circle cx="240" cy="20" r="4" fill="#FD5320" />
        <circle cx="240" cy="20" r="7" fill="#FD5320" opacity="0.2" />

        {/* Tooltip-like label */}
        <rect x="218" y="2" width="44" height="16" rx="4" fill="#011134" />
        <text x="240" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">
          $32.4k
        </text>
      </svg>
    </div>
  );
}

/* ─── Mini Pie Chart (SVG) ─── */
function MiniPieChart() {
  const segments = [
    { pct: 45, color: '#011134' },
    { pct: 25, color: '#FD5320' },
    { pct: 20, color: '#a1a1aa' },
    { pct: 10, color: '#e4e4e7' },
  ];
  let cumulativePct = 0;
  const paths = segments.map((s) => {
    const startAngle = cumulativePct * 3.6;
    cumulativePct += s.pct;
    const endAngle = cumulativePct * 3.6;
    const largeArc = s.pct > 50 ? 1 : 0;
    const start = polarToCartesian(24, 24, 20, endAngle);
    const end = polarToCartesian(24, 24, 20, startAngle);
    return `M24,24 L${start.x},${start.y} A20,20 0 ${largeArc},0 ${end.x},${end.y} Z`;
  });

  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12">
      {segments.map((s, i) => (
        <path key={i} d={paths[i]} fill={s.color} />
      ))}
      <circle cx="24" cy="24" r="10" fill="white" />
      <text x="24" y="27" textAnchor="middle" fontSize="8" fontWeight="700" fill="#011134">
        45%
      </text>
    </svg>
  );
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/* ─── Dashboard Mockup ─── */
function DashboardMockup() {
  const kpis = [
    {
      label: 'Total Revenue',
      value: '$124,563',
      change: '+12.5%',
      up: true,
      icon: DollarSign,
      iconBg: 'bg-orange-light',
      iconColor: 'text-orange',
    },
    {
      label: 'Active Customers',
      value: '2,847',
      change: '+8.3%',
      up: true,
      icon: Users,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      label: 'Open Deals',
      value: '156',
      change: '+15.2%',
      up: true,
      icon: Handshake,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-500',
    },
    {
      label: 'Tasks Done',
      value: '89%',
      change: 'Progress',
      up: true,
      icon: CheckCircle2,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500',
      progress: true,
    },
  ];

  const activities = [
    {
      name: 'Sarah Chen',
      initials: 'SC',
      color: 'bg-orange',
      action: 'closed deal worth $8,400',
      time: '2 min ago',
    },
    {
      name: 'Alex Rivera',
      initials: 'AR',
      color: 'bg-navy',
      action: 'added 3 new contacts',
      time: '15 min ago',
    },
    {
      name: 'Maya Patel',
      initials: 'MP',
      color: 'bg-emerald-500',
      action: 'sent invoice #1042',
      time: '1 hr ago',
    },
  ];

  return (
    <div className="rounded-2xl bg-white border border-gray-100 shadow-xl shadow-navy/5 overflow-hidden">
      {/* ── Top Bar ── */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-navy flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">G</span>
          </div>
          <span className="text-navy text-xs font-semibold hidden sm:block">GoCRM Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden sm:flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-1.5">
            <Search className="w-3 h-3 text-gray-400" />
            <span className="text-[10px] text-gray-400">Search...</span>
          </div>
          {/* Bell */}
          <div className="relative">
            <Bell className="w-4 h-4 text-gray-500" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange rounded-full" />
          </div>
          {/* Avatar */}
          <div className="w-6 h-6 rounded-full bg-navy flex items-center justify-center">
            <span className="text-white text-[8px] font-semibold">JD</span>
          </div>
        </div>
      </div>

      {/* ── KPI Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-4 sm:px-5 py-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-gray-50/80 rounded-xl p-3 hover:bg-gray-100/80 transition-colors cursor-default group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`w-7 h-7 rounded-lg ${kpi.iconBg} flex items-center justify-center`}>
                <kpi.icon className={`w-3.5 h-3.5 ${kpi.iconColor}`} />
              </div>
              {kpi.progress ? null : (
                <span
                  className={`text-[10px] font-semibold flex items-center gap-0.5 ${
                    kpi.up ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {kpi.up ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  {kpi.change}
                </span>
              )}
            </div>
            <p className="text-navy text-sm sm:text-base font-bold leading-tight">{kpi.value}</p>
            <p className="text-gray-400 text-[10px] mt-0.5">{kpi.label}</p>
            {kpi.progress && (
              <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[89%] bg-gradient-to-r from-orange to-orange-hover rounded-full" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Main Content Area ── */}
      <div className="px-4 sm:px-5 pb-4 flex flex-col lg:flex-row gap-4">
        {/* Revenue Chart */}
        <div className="flex-1 bg-gray-50/60 rounded-xl p-3 sm:p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-navy text-xs font-semibold">Revenue Overview</p>
              <p className="text-gray-400 text-[10px]">Last 7 months</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] px-2 py-0.5 bg-navy text-white rounded-full font-medium">Monthly</span>
              <span className="text-[9px] px-2 py-0.5 text-gray-400 font-medium">Yearly</span>
            </div>
          </div>
          <RevenueChart />
          {/* Bottom legend */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-orange" />
              <span className="text-[9px] text-gray-400">Revenue</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-navy" />
              <span className="text-[9px] text-gray-400">Target</span>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-full lg:w-44 xl:w-48 flex flex-col gap-3">
          {/* Recent Activity */}
          <div className="bg-gray-50/60 rounded-xl p-3">
            <p className="text-navy text-xs font-semibold mb-2.5">Recent Activity</p>
            <div className="flex flex-col gap-2.5">
              {activities.map((a) => (
                <div key={a.name} className="flex items-start gap-2">
                  <div
                    className={`w-5 h-5 rounded-full ${a.color} flex items-center justify-center shrink-0 mt-0.5`}
                  >
                    <span className="text-white text-[7px] font-bold">{a.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-navy leading-tight">
                      <span className="font-semibold">{a.name}</span>{' '}
                      <span className="text-gray-500">{a.action}</span>
                    </p>
                    <p className="text-[9px] text-gray-400 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deal Status */}
          <div className="bg-gray-50/60 rounded-xl p-3">
            <p className="text-navy text-xs font-semibold mb-2">Deal Status</p>
            <div className="flex items-center gap-3">
              <MiniPieChart />
              <div className="flex flex-col gap-1">
                {[
                  { label: 'Won', color: 'bg-navy' },
                  { label: 'In Progress', color: 'bg-orange' },
                  { label: 'Lost', color: 'bg-gray-400' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                    <span className="text-[9px] text-gray-500">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New Invoice CTA */}
          <div className="bg-navy rounded-xl p-3 hover:bg-navy-light transition-colors cursor-pointer group">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                <FileText className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <p className="text-white text-[11px] font-semibold">New Invoice</p>
                <p className="text-white/50 text-[9px]">Create & send</p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-white/60 group-hover:text-white transition-colors">
              <span className="text-[9px] font-medium">Generate now</span>
              <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════ */
export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-navy/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left Content ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-light text-navy rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange" />
              </span>
              <span className="text-xs font-semibold">Trusted by 5,000+ businesses</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.08] tracking-tight">
              One Platform to{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Manage,</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-orange/15 rounded-sm -z-0" />
              </span>{' '}
              Grow &amp; Succeed
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
              GoCRM helps businesses manage customers, sales, inventory, invoices, projects, and
              reporting — all from one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="bg-orange text-white rounded-full px-8 py-4 text-base font-semibold shadow-lg shadow-orange/20 hover:bg-orange-hover hover:shadow-xl transition-all active:scale-[0.98]">
                Start Free Trial
              </button>
              <button className="border border-gray-300 text-navy rounded-full px-8 py-4 text-base font-semibold hover:border-navy hover:bg-navy hover:text-white transition-all active:scale-[0.98]">
                Book a Demo
              </button>
            </div>

            {/* Below buttons */}
            <p className="mt-4 text-sm text-gray-400">No credit card required &bull; Free 14-day trial</p>
          </motion.div>

          {/* ── Right: Dashboard Mockup ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Gradient glow behind dashboard */}
            <div
              className="absolute -inset-6 -z-10 rounded-3xl opacity-60 blur-2xl"
              style={{
                background:
                  'radial-gradient(ellipse at 20% 50%, rgba(253,83,32,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(1,17,52,0.08) 0%, transparent 50%)',
              }}
            />

            {/* Dashboard with float */}
            <div className="animate-float">
              <DashboardMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}