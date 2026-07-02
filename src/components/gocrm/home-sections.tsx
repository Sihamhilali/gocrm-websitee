'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Layers,
  Package,
  TrendingUp,
  Zap,
  BarChart3,
  GitBranch,
  FileText,
  FolderKanban,
  Share2,
  Headphones,
  Monitor,
  Calendar,
  Globe,
  Image,
  Star,
  ArrowUpRight,
  UserPlus,
  Database,
  Rocket,
  Search,
  Bell,
  Menu,
  ChevronRight,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  useInView,
  useCountUp,
} from '@/components/gocrm/animations';

/* -------------------------------------------------------------------------- */
/*  1. TrustedBy                                                              */
/* -------------------------------------------------------------------------- */

const companies = ['TechFlow', 'Meridian', 'NovaStar', 'Quantum', 'Apex Digital', 'ClearPath'];

export function TrustedBy() {
  return (
    <section className="py-16 bg-white">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-gray-400 text-sm font-medium uppercase tracking-wider text-center mb-10"
      >
        Trusted by innovative companies worldwide
      </motion.p>

      {/* Desktop: static flex */}
      <div className="hidden md:flex items-center justify-center gap-12 flex-wrap opacity-60">
        {companies.map((name) => (
          <motion.span
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-gray-300 text-xl font-bold select-none tracking-wide"
          >
            {name}
          </motion.span>
        ))}
      </div>

      {/* Mobile: marquee */}
      <div className="md:hidden overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 w-max">
          {[...companies, ...companies].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-gray-300 text-lg font-bold select-none tracking-wide whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. WhyGoCRM                                                               */
/* -------------------------------------------------------------------------- */

const whyFeatures = [
  { icon: Users, title: 'CRM', desc: 'Build stronger relationships with smart contact management and deal tracking' },
  { icon: Layers, title: 'ERP', desc: 'Streamline operations from procurement to delivery with integrated workflows' },
  { icon: Package, title: 'Inventory', desc: 'Real-time stock tracking, alerts, and automated reorder management' },
  { icon: TrendingUp, title: 'Sales', desc: 'Visualize your pipeline, close deals faster with AI-powered insights' },
  { icon: Zap, title: 'Automation', desc: 'Eliminate repetitive tasks with powerful workflow automation rules' },
  { icon: BarChart3, title: 'Analytics', desc: 'Make data-driven decisions with beautiful, real-time dashboards' },
];

export function WhyGoCRM() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-navy">
            Why GoCRM?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Everything your business needs in one platform
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {whyFeatures.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeInUp}
              className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:shadow-navy/5 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-navy group-hover:text-orange transition-colors duration-300 mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. DashboardPreview                                                       */
/* -------------------------------------------------------------------------- */

function DashboardMockup() {
  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-gray-50/50">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-navy/10 flex items-center justify-center">
            <Menu className="w-3.5 h-3.5 text-navy/50" />
          </div>
          <span className="text-xs font-semibold text-navy">GoCRM</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
          <Search className="w-3 h-3 text-gray-400" />
          <span className="text-[10px] text-gray-400">Search...</span>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-gray-400" />
          <div className="w-6 h-6 rounded-full bg-orange text-white text-[9px] font-bold flex items-center justify-center">
            JD
          </div>
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col gap-4 w-12 border-r border-gray-100 py-4 px-2 items-center bg-gray-50/30">
          {[
            <div key="h" className="w-5 h-5 rounded bg-orange/10 flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-sm bg-orange" /></div>,
            <div key="p" className="w-5 h-5 rounded bg-gray-100" />,
            <div key="c" className="w-5 h-5 rounded bg-gray-100" />,
            <div key="s" className="w-5 h-5 rounded bg-gray-100" />,
            <div key="i" className="w-5 h-5 rounded bg-gray-100" />,
          ].map((el, i) => (
            <div
              key={i}
              className={`${i === 0 ? 'ring-2 ring-orange/30 rounded-lg' : 'opacity-40'}`}
            >
              {el}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 space-y-4">
          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Revenue', value: '$48.2K', change: '+12.5%', color: 'text-emerald-600' },
              { label: 'Customers', value: '2,847', change: '+8.1%', color: 'text-emerald-600' },
              { label: 'Deals', value: '384', change: '+23.7%', color: 'text-emerald-600' },
            ].map((m) => (
              <div key={m.label} className="bg-gray-50 rounded-xl p-3">
                <p className="text-[10px] text-gray-400 font-medium">{m.label}</p>
                <p className="text-sm font-bold text-navy mt-0.5">{m.value}</p>
                <p className={`text-[9px] ${m.color} font-medium mt-0.5`}>{m.change}</p>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-semibold text-navy">Revenue Overview</p>
              <span className="text-[9px] text-gray-400">Last 7 days</span>
            </div>
            <svg viewBox="0 0 300 80" className="w-full h-20">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FD5320" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#FD5320" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,60 Q30,55 60,45 T120,35 T180,25 T240,20 T300,10"
                fill="none"
                stroke="#FD5320"
                strokeWidth="2"
              />
              <path
                d="M0,60 Q30,55 60,45 T120,35 T180,25 T240,20 T300,10 V80 H0 Z"
                fill="url(#chartGrad)"
              />
            </svg>
          </div>

          {/* Recent table */}
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-[10px] font-semibold text-navy mb-2">Recent Deals</p>
            <div className="space-y-2">
              {[
                { name: 'Acme Corp', amount: '$12,400', status: 'Won', bg: 'bg-emerald-100 text-emerald-700' },
                { name: 'GlobalTech', amount: '$8,750', status: 'Active', bg: 'bg-orange-light text-orange' },
                { name: 'StartUp Inc', amount: '$5,200', status: 'Won', bg: 'bg-emerald-100 text-emerald-700' },
              ].map((d) => (
                <div key={d.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-[7px] font-bold text-gray-500">
                        {d.name.split(' ').map((w) => w[0]).join('')}
                      </span>
                    </div>
                    <span className="text-[10px] text-navy font-medium">{d.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-navy font-semibold">{d.amount}</span>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${d.bg}`}>
                      {d.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-navy">
            See everything at a glance
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg mt-4">
            Your business dashboard, beautifully designed
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={scaleIn}
          className="relative max-w-5xl mx-auto"
        >
          {/* Floating stat widgets */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -left-8 top-16 bg-white rounded-xl shadow-lg shadow-navy/5 border border-gray-100 px-4 py-3 animate-float z-10"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">+42% Revenue</p>
                  <p className="text-[10px] text-gray-400">vs last quarter</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -right-8 top-32 bg-white rounded-xl shadow-lg shadow-navy/5 border border-gray-100 px-4 py-3 animate-float-delayed z-10"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-light flex items-center justify-center">
                  <Users className="w-4 h-4 text-orange" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">2,847 Customers</p>
                  <p className="text-[10px] text-gray-400">active users</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -right-4 bottom-20 bg-white rounded-xl shadow-lg shadow-navy/5 border border-gray-100 px-4 py-3 animate-float-slow z-10"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">98.5% Uptime</p>
                  <p className="text-[10px] text-gray-400">last 30 days</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Laptop mockup */}
          <div className="rounded-3xl bg-navy p-2 shadow-2xl shadow-navy/20">
            <div className="rounded-2xl bg-white overflow-hidden">
              <DashboardMockup />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  4. FeaturesSection                                                        */
/* -------------------------------------------------------------------------- */

const mainFeatures = [
  { icon: Users, title: 'Customer Management', desc: '360\u00b0 view of every customer interaction' },
  { icon: GitBranch, title: 'Sales Pipeline', desc: 'Visual pipeline with drag-and-drop stages' },
  { icon: FileText, title: 'Invoices', desc: 'Create, send, and track professional invoices' },
  { icon: Package, title: 'Inventory', desc: 'Smart stock management with auto-reorder' },
  { icon: FolderKanban, title: 'Projects', desc: 'Plan, execute, and deliver projects on time' },
  { icon: Share2, title: 'Affiliate Management', desc: 'Track and manage your partner programs' },
  { icon: BarChart3, title: 'Reports', desc: 'Comprehensive reports with custom filters' },
  { icon: Headphones, title: 'Support', desc: 'Multi-channel ticket management system' },
  { icon: Monitor, title: 'POS', desc: 'Complete point-of-sale for retail stores' },
  { icon: Calendar, title: 'Calendar', desc: 'Schedule meetings and track deadlines' },
  { icon: Globe, title: 'Omnichannel Sales', desc: 'Sell across web, mobile, social, and in-store' },
  { icon: Image, title: 'Media Library', desc: 'Centralized asset management for your team' },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-navy">
            Powerful features for every need
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            From lead to revenue, GoCRM covers your entire business
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-5"
        >
          {mainFeatures.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeInUp}
              className="group rounded-xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-navy group-hover:text-orange transition-colors duration-300 mb-3">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-navy mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  5. GrowthSection                                                          */
/* -------------------------------------------------------------------------- */

const growthStats = [
  { value: 47, suffix: '%', label: 'Average Revenue Increase' },
  { value: 3.2, suffix: 'x', label: 'Faster Deal Closings', decimal: true },
  { value: 65, suffix: '%', label: 'Time Saved on Admin' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
];

function GrowthStatCard({
  value,
  suffix,
  label,
  decimal,
  isInView,
}: {
  value: number;
  suffix: string;
  label: string;
  decimal?: boolean;
  isInView: boolean;
}) {
  const displayed = useCountUp(decimal ? Math.round(value * 10) : value, 2000, isInView);
  const displayValue = decimal ? (displayed / 10).toFixed(1) : displayed;

  return (
    <div className="text-center">
      <p className="text-5xl md:text-6xl font-bold text-white">
        {displayValue}
        <span className="text-orange">{suffix}</span>
      </p>
      <p className="text-gray-400 text-sm mt-2">{label}</p>
    </div>
  );
}

function GrowthChart() {
  return (
    <svg
      viewBox="0 0 800 200"
      className="w-full max-w-3xl mx-auto mt-16"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="growthAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FD5320" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FD5320" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[40, 80, 120, 160].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="800"
          y2={y}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}
      {/* Area fill */}
      <path
        d="M0,180 C50,170 100,160 150,140 C200,120 250,130 300,100 C350,70 400,80 450,60 C500,40 550,50 600,30 C650,15 700,20 750,10 L800,5 L800,200 L0,200 Z"
        fill="url(#growthAreaGrad)"
      />
      {/* Line */}
      <path
        d="M0,180 C50,170 100,160 150,140 C200,120 250,130 300,100 C350,70 400,80 450,60 C500,40 550,50 600,30 C650,15 700,20 750,10 L800,5"
        fill="none"
        stroke="#FD5320"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Dots */}
      {[
        [0, 180],
        [150, 140],
        [300, 100],
        [450, 60],
        [600, 30],
        [800, 5],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          fill="#FD5320"
          stroke="#011134"
          strokeWidth="2"
        />
      ))}
      {/* Labels */}
      <text x="0" y="195" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="sans-serif">
        Jan
      </text>
      <text x="145" y="195" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="sans-serif">
        Mar
      </text>
      <text x="295" y="195" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="sans-serif">
        May
      </text>
      <text x="440" y="195" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="sans-serif">
        Jul
      </text>
      <text x="590" y="195" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="sans-serif">
        Sep
      </text>
      <text x="770" y="195" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="sans-serif">
        Dec
      </text>
    </svg>
  );
}

export function GrowthSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
            Businesses grow faster with GoCRM
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 text-lg mt-4">
            Real results from real companies
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {growthStats.map((s) => (
            <motion.div key={s.label} variants={fadeInUp}>
              <GrowthStatCard
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                decimal={s.decimal}
                isInView={isInView}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GrowthChart />
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  6. HowItWorks                                                             */
/* -------------------------------------------------------------------------- */

const steps = [
  {
    number: '01',
    title: 'Create Your Account',
    desc: 'Sign up in seconds with your email. No credit card required.',
    icon: UserPlus,
  },
  {
    number: '02',
    title: 'Import Your Data',
    desc: 'Seamlessly migrate from spreadsheets or other CRMs with our import wizard.',
    icon: Database,
  },
  {
    number: '03',
    title: 'Grow Your Business',
    desc: 'Start managing customers, closing deals, and scaling operations.',
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-navy">
            Get started in minutes
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row items-stretch gap-8 md:gap-0"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="flex-1 relative group"
            >
              {/* Connector arrow (between steps, desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-12 -right-4 z-10 text-gray-200">
                  <ChevronRight className="w-8 h-8" />
                </div>
              )}

              <div className="relative bg-gray-50 rounded-2xl p-6 md:p-8 h-full border border-gray-100 group-hover:border-gray-200 group-hover:shadow-md transition-all duration-300">
                {/* Large background step number */}
                <span className="absolute top-2 right-4 text-6xl md:text-7xl font-bold text-orange/10 select-none leading-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-5">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  7. Testimonials                                                           */
/* -------------------------------------------------------------------------- */

const testimonials = [
  {
    quote:
      'GoCRM transformed how we manage our sales pipeline. We closed 40% more deals in the first quarter alone.',
    name: 'Sarah Chen',
    title: 'CEO',
    company: 'TechFlow',
    initials: 'SC',
    color: 'bg-rose-100 text-rose-700',
  },
  {
    quote:
      'The all-in-one approach saved us from juggling 5 different tools. Everything we need is right here.',
    name: 'Marcus Johnson',
    title: 'COO',
    company: 'Meridian Group',
    initials: 'MJ',
    color: 'bg-sky-100 text-sky-700',
  },
  {
    quote:
      'The reporting dashboards are incredibly powerful. We finally have real visibility into our business performance.',
    name: 'Elena Rodriguez',
    title: 'VP Sales',
    company: 'NovaStar',
    initials: 'ER',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    quote:
      'Implementation was seamless. Our team was up and running in less than a day. The support team is outstanding.',
    name: 'David Park',
    title: 'Founder',
    company: 'Quantum Labs',
    initials: 'DP',
    color: 'bg-emerald-100 text-emerald-700',
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-navy">
            Loved by businesses worldwide
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <StarRating />
              <p className="text-gray-600 mt-4 mb-6 leading-relaxed text-sm md:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-xs font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  8. PricingPreview                                                         */
/* -------------------------------------------------------------------------- */

const plans = [
  {
    name: 'Starter',
    priceMonthly: 0,
    priceAnnual: 0,
    desc: 'Perfect for freelancers',
    features: ['100 contacts', '1 user', 'Basic reports', 'Email support'],
    highlighted: false,
    cta: 'Get Started',
    ctaVariant: 'default' as const,
  },
  {
    name: 'Professional',
    priceMonthly: 49,
    priceAnnual: 39,
    desc: 'Best for growing teams',
    features: [
      '10,000 contacts',
      '10 users',
      'Advanced reports',
      'Priority support',
      'Automation',
      'API access',
    ],
    highlighted: true,
    badge: 'Most Popular',
    cta: 'Get Started',
    ctaVariant: 'default' as const,
  },
  {
    name: 'Enterprise',
    priceMonthly: 99,
    priceAnnual: 79,
    desc: 'For large organizations',
    features: [
      'Unlimited contacts',
      'Unlimited users',
      'Custom reports',
      'Dedicated support',
      'Custom integrations',
      'SSO',
    ],
    highlighted: false,
    cta: 'Get Started',
    ctaVariant: 'outline' as const,
  },
];

export function PricingPreview() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-navy">
            Simple, transparent pricing
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg mt-4">
            Start free. Scale as you grow.
          </motion.p>

          {/* Toggle */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm ${!annual ? 'text-navy font-medium' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                annual ? 'bg-orange' : 'bg-gray-200'
              }`}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${
                  annual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-navy font-medium' : 'text-gray-400'}`}>
              Annual
              <span className="ml-1.5 text-xs text-orange font-medium">Save 20%</span>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 items-center"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative rounded-2xl border p-6 md:p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'border-2 border-orange scale-105 shadow-xl md:-my-4'
                  : 'border-gray-100 hover:shadow-md'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-semibold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-navy">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{plan.desc}</p>

                <div className="mt-6 mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-navy">
                    ${annual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-gray-400 text-sm">/mo</span>
                </div>

                <Button
                  className={`w-full rounded-lg py-2.5 ${
                    plan.highlighted
                      ? 'bg-orange hover:bg-orange-hover text-white'
                      : plan.name === 'Enterprise'
                        ? 'bg-navy hover:bg-navy-light text-white'
                        : 'bg-orange hover:bg-orange-hover text-white'
                  }`}
                  variant={plan.ctaVariant}
                >
                  {plan.cta}
                </Button>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-orange shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  9. FAQSection                                                             */
/* -------------------------------------------------------------------------- */

const faqs = [
  {
    q: 'What is GoCRM?',
    a: 'GoCRM is an all-in-one CRM + ERP platform that helps businesses manage customers, sales, inventory, invoices, projects, and analytics from a single, powerful interface.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes! GoCRM offers a free 14-day trial with full access to all Professional features. No credit card required.',
  },
  {
    q: 'Can I import my existing data?',
    a: 'Absolutely. GoCRM supports importing data from spreadsheets (CSV, Excel) and other CRMs. Our import wizard makes migration seamless.',
  },
  {
    q: 'Is my data secure?',
    a: 'Security is our top priority. We use 256-bit SSL encryption, regular security audits, and enterprise-grade infrastructure to protect your data.',
  },
  {
    q: 'Can I customize GoCRM for my business?',
    a: 'Yes, GoCRM is highly customizable. From custom fields and pipelines to branded invoices and reports, you can tailor the platform to your exact needs.',
  },
  {
    q: 'Do you offer support?',
    a: 'We offer email support for all plans, priority support for Professional, and dedicated support with a named account manager for Enterprise customers.',
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-navy">
            Frequently asked questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl px-6 mb-3 border border-gray-100"
              >
                <AccordionTrigger className="text-navy font-medium text-sm md:text-base hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  10. CTASection                                                            */
/* -------------------------------------------------------------------------- */

export function CTASection() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Ready to transform your business?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Join 5,000+ companies already using GoCRM to manage, grow, and succeed.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Button
              size="lg"
              className="bg-orange hover:bg-orange-hover text-white rounded-lg px-8 py-3 text-base font-medium shadow-lg shadow-orange/20 hover:shadow-orange/30 transition-shadow"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-lg px-8 py-3 text-base font-medium transition-colors"
            >
              Book a Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Exports                                                                   */
/* -------------------------------------------------------------------------- */

export {
  TrustedBy,
  WhyGoCRM,
  DashboardPreview,
  FeaturesSection,
  GrowthSection,
  HowItWorks,
  Testimonials,
  PricingPreview,
  FAQSection,
  CTASection,
};