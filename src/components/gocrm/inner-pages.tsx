'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, useInView } from '@/components/gocrm/animations';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users,
  GitBranch,
  Clock,
  Mail,
  Star,
  FileText,
  Receipt,
  CreditCard,
  TrendingUp,
  DollarSign,
  Kanban,
  Workflow,
  Package,
  ShoppingCart,
  Truck,
  BarChart3,
  PieChart,
  LineChart,
  UserCheck,
  Wallet,
  Building2,
  Target,
  Briefcase,
  Store,
  Wrench,
  User,
  Phone,
  MapPin,
  Clock3,
  Heart,
  Lightbulb,
  Sparkles,
  Eye,
  BookOpen,
  ArrowRight,
  Calendar,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   1. FEATURES PAGE
   ───────────────────────────────────────────── */

const featureCategories = [
  {
    id: 'customer',
    label: 'Customer Management',
    icon: Users,
    features: [
      {
        icon: Users,
        title: 'Contact Database',
        desc: '360° customer profiles with complete interaction history, notes, and custom fields.',
      },
      {
        icon: GitBranch,
        title: 'Deal Pipeline',
        desc: 'Visual drag-and-drop pipeline with customizable stages and automated routing.',
      },
      {
        icon: Clock,
        title: 'Activity Tracking & Timeline',
        desc: 'Automated logging of calls, emails, meetings, and notes in a unified timeline.',
      },
      {
        icon: Mail,
        title: 'Email Integration',
        desc: 'Seamless sync with Gmail and Outlook. Track opens, clicks, and replies.',
      },
      {
        icon: Star,
        title: 'Lead Scoring & Qualification',
        desc: 'AI-powered scoring to prioritize leads based on engagement and fit.',
      },
    ],
  },
  {
    id: 'sales',
    label: 'Sales & Revenue',
    icon: DollarSign,
    features: [
      {
        icon: FileText,
        title: 'Quote & Proposal Builder',
        desc: 'Create professional quotes and proposals with templates and e-signatures.',
      },
      {
        icon: Receipt,
        title: 'Invoice Management',
        desc: 'Generate, send, and track invoices. Automated reminders for overdue payments.',
      },
      {
        icon: CreditCard,
        title: 'Payment Processing',
        desc: 'Accept payments online with Stripe, PayPal, and other popular gateways.',
      },
      {
        icon: TrendingUp,
        title: 'Revenue Forecasting',
        desc: 'Predict future revenue with AI-driven forecasts based on pipeline data.',
      },
      {
        icon: DollarSign,
        title: 'Commission Tracking',
        desc: 'Configure commission structures and automatically calculate payouts.',
      },
    ],
  },
  {
    id: 'operations',
    label: 'Operations',
    icon: Kanban,
    features: [
      {
        icon: Kanban,
        title: 'Project Management',
        desc: 'Kanban boards, Gantt charts, and task dependencies for project planning.',
      },
      {
        icon: Workflow,
        title: 'Task Automation',
        desc: 'Build custom workflows to automate repetitive tasks and approvals.',
      },
      {
        icon: Package,
        title: 'Inventory Management',
        desc: 'Real-time stock tracking, low-stock alerts, and multi-warehouse support.',
      },
      {
        icon: ShoppingCart,
        title: 'Purchase Orders',
        desc: 'Create and manage purchase orders with approval workflows.',
      },
      {
        icon: Truck,
        title: 'Supplier Management',
        desc: 'Maintain a supplier database with ratings, lead times, and order history.',
      },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics & Insights',
    icon: BarChart3,
    features: [
      {
        icon: BarChart3,
        title: 'Real-time Dashboards',
        desc: 'Live KPI dashboards with customizable widgets and team visibility.',
      },
      {
        icon: PieChart,
        title: 'Custom Report Builder',
        desc: 'Drag-and-drop report builder with filters, grouping, and scheduled delivery.',
      },
      {
        icon: LineChart,
        title: 'Sales Analytics',
        desc: 'Analyze win rates, cycle lengths, and rep performance in detail.',
      },
      {
        icon: UserCheck,
        title: 'Customer Analytics',
        desc: 'Segment customers, track LTV, churn risk, and engagement scores.',
      },
      {
        icon: Wallet,
        title: 'Financial Reports',
        desc: 'P&L, cash flow, and balance sheet reports with export capabilities.',
      },
    ],
  },
];

function FeatureGrid({ features }: { features: typeof featureCategories[0]['features'] }) {
  const { ref, isInView } = useInView(0.05);
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {features.map((f) => (
        <motion.div
          key={f.title}
          variants={fadeInUp}
          className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange/10 text-orange mb-4 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
            <f.icon className="w-6 h-6" />
          </div>
          <h4 className="text-navy font-semibold text-lg mb-2">{f.title}</h4>
          <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function FeaturesPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: tabsRef, isInView: tabsInView } = useInView(0.05);

  return (
    <section className="py-20 bg-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={heroRef}
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-medium mb-6">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Powerful Features for Modern Business
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Comprehensive tools designed to streamline every aspect of your business — from customer
            relationships to revenue management and operational efficiency.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          ref={tabsRef}
          variants={fadeInUp}
          initial="hidden"
          animate={tabsInView ? 'visible' : 'hidden'}
        >
          <Tabs defaultValue="customer" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-gray-50 p-1.5 rounded-xl h-auto mb-12">
              {featureCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-navy text-gray-500"
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {featureCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <FeatureGrid features={cat.features} />
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. SOLUTIONS PAGE
   ───────────────────────────────────────────── */

const solutions = [
  {
    icon: Building2,
    title: 'Small Businesses',
    desc: 'From customer management to invoicing, everything you need to run and grow your small business.',
  },
  {
    icon: Target,
    title: 'Sales Teams',
    desc: 'Close more deals with pipeline management, forecasting, and team collaboration tools.',
  },
  {
    icon: Briefcase,
    title: 'Agencies',
    desc: 'Manage clients, projects, and billing in one place. Track profitability per account.',
  },
  {
    icon: Store,
    title: 'Retail Stores',
    desc: 'Integrated POS, inventory management, and omnichannel sales capabilities.',
  },
  {
    icon: Wrench,
    title: 'Service Companies',
    desc: 'Schedule jobs, track time, manage invoices, and delight your customers.',
  },
  {
    icon: User,
    title: 'Freelancers',
    desc: 'Simple yet powerful tools to manage clients, projects, and get paid faster.',
  },
];

export function SolutionsPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: gridRef, isInView: gridInView } = useInView(0.05);
  const { ref: ctaRef, isInView: ctaInView } = useInView(0.1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          ref={heroRef}
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-medium mb-6">
            Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Solutions for Every Industry
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            GoCRM adapts to your unique business needs. Discover how thousands of companies across
            industries use our platform to grow.
          </p>
        </motion.div>

        {/* Solution Cards Grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {solutions.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeInUp}
              className="group rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange/10 text-orange mb-6 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
              <button className="inline-flex items-center gap-1.5 text-orange font-medium text-sm hover:gap-2.5 transition-all duration-200">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          variants={fadeInUp}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          className="rounded-2xl bg-navy p-10 md:p-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not sure which plan fits?
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Our team can help you find the perfect solution tailored to your business size and
            industry requirements.
          </p>
          <button className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200">
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. ABOUT PAGE
   ───────────────────────────────────────────── */

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    desc: 'Every decision starts with our customers',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We push boundaries to build better tools',
  },
  {
    icon: Sparkles,
    title: 'Simplicity',
    desc: "Powerful doesn't mean complicated",
  },
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'Honest pricing, open communication',
  },
];

const teamMembers = [
  { name: 'Alex Morgan', role: 'CEO & Co-Founder', initials: 'AM', color: 'bg-orange' },
  { name: 'Priya Sharma', role: 'CTO', initials: 'PS', color: 'bg-navy' },
  { name: 'James Liu', role: 'Head of Product', initials: 'JL', color: 'bg-orange' },
  { name: 'Sarah Williams', role: 'VP of Sales', initials: 'SW', color: 'bg-navy' },
  { name: 'Omar Hassan', role: 'Head of Engineering', initials: 'OH', color: 'bg-orange' },
  { name: 'Maria Costa', role: 'Head of Design', initials: 'MC', color: 'bg-navy' },
];

export function AboutPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: missionRef, isInView: missionInView } = useInView(0.1);
  const { ref: storyRef, isInView: storyInView } = useInView(0.1);
  const { ref: valuesRef, isInView: valuesInView } = useInView(0.05);
  const { ref: teamRef, isInView: teamInView } = useInView(0.05);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          ref={heroRef}
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-medium mb-6">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">About GoCRM</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            We&apos;re on a mission to make powerful business software accessible to every company,
            everywhere. Here&apos;s the story behind GoCRM.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          ref={missionRef}
          variants={fadeInUp}
          initial="hidden"
          animate={missionInView ? 'visible' : 'hidden'}
          className="rounded-2xl bg-gray-50 p-8 md:p-12 mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-orange" />
            </div>
            <h3 className="text-2xl font-bold text-navy">Our Mission</h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            Our mission is to democratize business software. We believe every business, regardless
            of size, deserves access to powerful tools that help them compete and thrive in the
            digital age.
          </p>
        </motion.div>

        {/* Story Section — Two Columns */}
        <motion.div
          ref={storyRef}
          variants={staggerContainer}
          initial="hidden"
          animate={storyInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Left — Text */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold text-navy mb-6">Our Story</h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              GoCRM was born from a simple observation: small and medium businesses were paying
              enterprise prices for basic CRM and ERP tools — or worse, struggling with
              spreadsheets and disconnected apps.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Our founders, veterans of the SaaS industry, set out to build an all-in-one platform
              that combines CRM, ERP, project management, and analytics at a fraction of the cost.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Today, GoCRM serves thousands of businesses across 30+ countries, and we&apos;re just
              getting started. Every day, we work to make our platform more powerful, more
              intuitive, and more affordable.
            </p>
          </motion.div>

          {/* Right — Stats */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
            {[
              { label: 'Founded', value: '2021' },
              { label: 'Team Members', value: '50+' },
              { label: 'Customers', value: '5,000+' },
              { label: 'Countries', value: '30+' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-200 p-6 text-center"
              >
                <div className="text-3xl font-bold text-orange mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          ref={valuesRef}
          variants={staggerContainer}
          initial="hidden"
          animate={valuesInView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-navy text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                className="rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange/10 text-orange mx-auto mb-4">
                  <v.icon className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          ref={teamRef}
          variants={staggerContainer}
          initial="hidden"
          animate={teamInView ? 'visible' : 'hidden'}
        >
          <h3 className="text-3xl font-bold text-navy text-center mb-4">Meet Our Team</h3>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            The passionate people behind GoCRM who work every day to build the best business
            platform for you.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeInUp}
                className="text-center group"
              >
                <div
                  className={`w-20 h-20 rounded-full ${m.color} text-white flex items-center justify-center text-xl font-bold mx-auto mb-3 group-hover:scale-105 transition-transform duration-300`}
                >
                  {m.initials}
                </div>
                <h4 className="text-sm font-semibold text-navy">{m.name}</h4>
                <p className="text-xs text-gray-400">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. CONTACT PAGE
   ───────────────────────────────────────────── */

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@gocrm.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Innovation Drive, San Francisco, CA 94107',
  },
  {
    icon: Clock3,
    label: 'Business Hours',
    value: 'Mon-Fri, 9AM-6PM PST',
  },
];

export function ContactPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: formRef, isInView: formInView } = useInView(0.05);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          ref={heroRef}
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-medium mb-6">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Have a question or want to learn more? We&apos;d love to hear from you. Send us a
            message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        {/* Two Columns */}
        <motion.div
          ref={formRef}
          variants={staggerContainer}
          initial="hidden"
          animate={formInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12"
        >
          {/* Left — Form */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-3 rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-navy font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="h-11 rounded-lg border-gray-200 focus-visible:border-orange focus-visible:ring-orange/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-navy font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="h-11 rounded-lg border-gray-200 focus-visible:border-orange focus-visible:ring-orange/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-navy font-medium">
                  Company
                </Label>
                <Input
                  id="company"
                  placeholder="Your company name"
                  className="h-11 rounded-lg border-gray-200 focus-visible:border-orange focus-visible:ring-orange/20"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-navy font-medium">Subject</Label>
                <Select>
                  <SelectTrigger className="w-full h-11 rounded-lg border-gray-200">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-navy font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="rounded-lg border-gray-200 focus-visible:border-orange focus-visible:ring-orange/20 resize-none"
                />
              </div>
              <Button className="w-full sm:w-auto bg-orange hover:bg-orange-hover text-white font-semibold h-12 px-10 rounded-full text-base">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Right — Contact Info */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
              <h3 className="text-xl font-bold text-navy mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange/10 text-orange shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-navy">{item.label}</div>
                      <div className="text-gray-500 text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-navy p-6 md:p-8 text-center">
              <BookOpen className="w-8 h-8 text-orange mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Need Help?</h4>
              <p className="text-gray-400 text-sm mb-4">
                Check out our Help Center for quick answers to common questions.
              </p>
              <button className="inline-flex items-center gap-1.5 text-orange font-medium text-sm hover:gap-2.5 transition-all duration-200">
                Visit Help Center <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. BLOG PAGE
   ───────────────────────────────────────────── */

const blogPosts = [
  {
    title: '10 CRM Best Practices for Growing Businesses',
    category: 'Tips',
    excerpt:
      'Learn the essential CRM strategies that successful businesses use to nurture relationships and drive growth.',
    author: 'Alex Morgan',
    date: 'Dec 15, 2024',
    initials: 'AM',
    gradient: 'from-orange/20 to-orange/5',
  },
  {
    title: 'How to Build a Sales Pipeline That Converts',
    category: 'Product',
    excerpt:
      'Step-by-step guide to creating a sales pipeline that turns leads into customers consistently.',
    author: 'Sarah Williams',
    date: 'Dec 10, 2024',
    initials: 'SW',
    gradient: 'from-navy/20 to-navy/5',
  },
  {
    title: 'The Future of ERP: Trends to Watch in 2025',
    category: 'Industry',
    excerpt:
      'Explore the emerging trends in ERP technology and how they will shape business operations.',
    author: 'Priya Sharma',
    date: 'Dec 5, 2024',
    initials: 'PS',
    gradient: 'from-orange/20 to-orange/5',
  },
  {
    title: 'Inventory Management 101: A Complete Guide',
    category: 'Tips',
    excerpt:
      'Everything you need to know about managing inventory effectively, from basics to advanced strategies.',
    author: 'James Liu',
    date: 'Nov 28, 2024',
    initials: 'JL',
    gradient: 'from-navy/20 to-navy/5',
  },
  {
    title: 'Why SMEs Need All-in-One Business Software',
    category: 'Industry',
    excerpt:
      'Discover why small and medium enterprises are switching to unified platforms over disjointed tools.',
    author: 'Omar Hassan',
    date: 'Nov 20, 2024',
    initials: 'OH',
    gradient: 'from-orange/20 to-orange/5',
  },
  {
    title: 'GoCRM 3.0: What\'s New and Improved',
    category: 'Product',
    excerpt:
      'A deep dive into the latest GoCRM release — new features, performance improvements, and more.',
    author: 'Maria Costa',
    date: 'Nov 15, 2024',
    initials: 'MC',
    gradient: 'from-navy/20 to-navy/5',
  },
];

const categoryColors: Record<string, string> = {
  Tips: 'bg-orange/10 text-orange',
  Product: 'bg-navy/10 text-navy',
  Industry: 'bg-gray-200 text-gray-600',
};

export function BlogPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: gridRef, isInView: gridInView } = useInView(0.05);
  const { ref: btnRef, isInView: btnInView } = useInView(0.1);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          ref={heroRef}
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-medium mb-6">
            Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Blog &amp; Resources
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Insights, tutorials, and industry news to help you get the most out of GoCRM and grow
            your business smarter.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeInUp}
              className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* Image Placeholder */}
              <div
                className={`relative aspect-[16/10] bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
              >
                <BookOpen className="w-10 h-10 text-orange/40" />
              </div>
              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[post.category] || 'bg-gray-200 text-gray-600'}`}
                >
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-orange transition-colors duration-200 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">
                    {post.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy">{post.author}</div>
                    <div className="text-xs text-gray-400">{post.date}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          ref={btnRef}
          variants={fadeInUp}
          initial="hidden"
          animate={btnInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <button className="inline-flex items-center gap-2 border-2 border-gray-200 text-navy font-semibold px-8 py-3 rounded-full hover:border-orange hover:text-orange transition-colors duration-200">
            <Calendar className="w-4 h-4" />
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. FAQ PAGE (Detailed)
   ───────────────────────────────────────────── */

const faqSections = [
  {
    title: 'Getting Started',
    questions: [
      {
        q: 'How do I set up my GoCRM account?',
        a: 'After signing up, you\'ll be guided through a quick onboarding wizard that helps you configure your company profile, import existing data, and invite team members. Most businesses are up and running within 15 minutes.',
      },
      {
        q: 'Can I import data from my current CRM or spreadsheet?',
        a: 'Absolutely! GoCRM supports CSV imports for contacts, deals, and products. We also offer direct migration tools for popular platforms like Salesforce, HubSpot, and Zoho. Our support team can assist with complex migrations at no extra cost.',
      },
      {
        q: 'Is there a guided onboarding process?',
        a: 'Yes! Every new account gets access to our interactive onboarding tour, video tutorials, and a dedicated onboarding specialist for Professional and Enterprise plans. We also host weekly live webinars for new users.',
      },
      {
        q: 'How long does it take to get started?',
        a: 'Most users have their account fully configured in under 30 minutes. For larger organizations with complex requirements, our team typically completes a full rollout in 1-2 weeks, including data migration and team training.',
      },
    ],
  },
  {
    title: 'Pricing & Billing',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can also pay via invoice with NET-30 terms.',
      },
      {
        q: 'Can I switch plans at any time?',
        a: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll be prorated for the remainder of your billing cycle. Downgrades take effect at the start of your next billing period.',
      },
      {
        q: 'Is there a free trial available?',
        a: 'Yes! We offer a 14-day free trial with full access to all Professional plan features. No credit card required to start. You can upgrade to a paid plan at any time during or after the trial.',
      },
      {
        q: 'What is your refund policy?',
        a: 'We offer a 30-day money-back guarantee on all annual plans. If you\'re not satisfied within the first 30 days, contact our support team for a full refund. Monthly plans can be cancelled at any time.',
      },
    ],
  },
  {
    title: 'Features & Integrations',
    questions: [
      {
        q: 'Does GoCRM offer an API for custom integrations?',
        a: 'Yes, GoCRM provides a comprehensive REST API with full documentation. You can build custom integrations, automate workflows, and connect GoCRM with your existing tech stack. API access is available on all paid plans.',
      },
      {
        q: 'What third-party integrations are supported?',
        a: 'We integrate with 100+ popular tools including Gmail, Outlook, Slack, QuickBooks, Xero, Stripe, Zapier, and many more. New integrations are added regularly based on customer feedback.',
      },
      {
        q: 'Can I customize the dashboard and reports?',
        a: 'Absolutely! GoCRM features a drag-and-drop dashboard builder and a powerful report builder. Create custom widgets, filter data, set up scheduled reports, and share dashboards with your team.',
      },
      {
        q: 'Does GoCRM support mobile devices?',
        a: 'Yes, GoCRM is fully responsive and works great on any device. We also offer native iOS and Android apps with offline support, push notifications, and mobile-specific features like barcode scanning for inventory.',
      },
    ],
  },
  {
    title: 'Security & Privacy',
    questions: [
      {
        q: 'How is my data protected?',
        a: 'Your data is protected with AES-256 encryption at rest and TLS 1.3 in transit. We use AWS infrastructure with SOC 2 Type II compliance, regular security audits, and automated backups with 99.99% uptime SLA.',
      },
      {
        q: 'Is GoCRM GDPR compliant?',
        a: 'Yes, GoCRM is fully GDPR compliant. We provide data processing agreements (DPAs), support data portability and right-to-erasure requests, and our EU customer data is stored in EU-based data centers.',
      },
      {
        q: 'Do you sell or share my data with third parties?',
        a: 'Never. Your data belongs to you. We do not sell, share, or use your customer data for any purpose other than providing the GoCRM service. We are committed to complete data privacy and transparency.',
      },
    ],
  },
];

export function FAQPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { ref: faqRef, isInView: faqInView } = useInView(0.05);
  const { ref: ctaRef, isInView: ctaInView } = useInView(0.1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          ref={heroRef}
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-medium mb-6">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Find answers to common questions about GoCRM. Can&apos;t find what you&apos;re looking
            for? Our support team is here to help.
          </p>
        </motion.div>

        {/* FAQ Sections */}
        <motion.div
          ref={faqRef}
          variants={staggerContainer}
          initial="hidden"
          animate={faqInView ? 'visible' : 'hidden'}
          className="space-y-12 mb-20"
        >
          {faqSections.map((section) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-navy mb-6">{section.title}</h3>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((item, idx) => (
                    <AccordionItem key={idx} value={`${section.title}-${idx}`}>
                      <AccordionTrigger className="text-navy font-medium text-left hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-500 leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          ref={ctaRef}
          variants={fadeInUp}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          className="rounded-2xl bg-navy p-10 md:p-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Our support team is available Monday through Friday, 9AM to 6PM PST. We typically
            respond within a few hours.
          </p>
          <button className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200">
            Contact Support <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}