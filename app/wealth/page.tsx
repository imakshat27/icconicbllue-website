import Image from "next/image";
import Link from "next/link";
import { BarChart3, ShieldCheck, Briefcase, Scale, CheckCircle2, PieChart, LineChart, Clock, Landmark, Globe, ArrowRight, Navigation } from "lucide-react";

export default function WealthManagement() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-medium tracking-tight">icconic<span className="font-bold">blue</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/wealth" className="text-teal-700 font-semibold transition-colors">Wealth Management</Link>
            <Link href="/education" className="hover:text-teal-600 transition-colors">Education Consultancy</Link>
            <Link href="/business" className="hover:text-teal-600 transition-colors">Business Coaching</Link>
            <Link href="#" className="hover:text-teal-600 transition-colors">Resources</Link>
            <Link href="#" className="hover:text-teal-600 transition-colors">About Us</Link>
          </nav>
          <button className="hidden md:inline-flex h-10 items-center justify-center rounded-sm bg-slate-900 px-6 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors">
            Book Consultation
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden bg-slate-100">
          <div className="absolute inset-0 z-0 mix-blend-multiply opacity-50">
            <Image 
              src="/wealth_hero_bg.png" 
              alt="Abstract Architecture" 
              fill 
              className="object-cover object-center"
              priority
            />
          </div>
          
          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold tracking-widest uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                Wealth Management
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Institutional-Grade <br className="hidden lg:block" />
                Wealth Management <br className="hidden lg:block" />
                for Multi-<br className="hidden lg:block" />
                Generational Growth.
              </h1>
              <p className="text-lg text-slate-700 mb-10 max-w-xl leading-relaxed">
                We architect resilient financial structures designed to withstand market volatility and secure your legacy. For viewable assets, employing sophisticated strategies previously reserved for institutional entities.
              </p>
              <button className="h-14 px-8 inline-flex items-center justify-center rounded-sm bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg">
                Explore Advisory Services <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* The Strategic Framework */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">The Strategic Framework</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our methodology transcends traditional asset allocation. It's a calculated, dynamic portfolio anchored in deep macroeconomic analysis and rigorous risk management.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white p-10 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                  <BarChart3 size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Quantitative Rigor</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Leveraging advanced proprietary models to identify asymmetrical risk/reward opportunities across global markets, ensuring optimal capital deployment.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-10 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                  <ShieldCheck size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Tactical Risk Mitigation</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Implementing multi-layered hedging strategies and non-correlated asset classes to preserve capital during periods of systemic stress.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-10 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                  <Briefcase size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Alternative Assets</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Exclusive access to private equity, real estate, and sophisticated alternative investments to drive alpha beyond public equity returns.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-white p-10 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                  <Scale size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Structural Alpha</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Optimizing the legal and tax architecture of your wealth to enhance after-tax returns and facilitate efficient generational transfer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Private Office Advisory Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/private_office.png" 
                  alt="Luxurious Private Office" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Navigation size={18} className="text-teal-700" />
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Bespoke Guidance</span>
                  </div>
                  <p className="text-sm font-medium text-slate-800">A dedicated team acting as your financial vanguard.</p>
                </div>
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                  Private Office <br />
                  Advisory
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  For individuals and families requiring a comprehensive solution to their financial lives. We act as your outsourced Chief Investment Office, coordinating across legal, tax, and investment disciplines to ensure absolute alignment.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="text-teal-600 mt-0.5 shrink-0" size={22} strokeWidth={2} />
                    <span className="text-slate-700 font-medium leading-relaxed">Consolidated reporting across all global assets and entities.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="text-teal-600 mt-0.5 shrink-0" size={22} strokeWidth={2} />
                    <span className="text-slate-700 font-medium leading-relaxed">Proactive tax mitigation strategy coordination.</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="text-teal-600 mt-0.5 shrink-0" size={22} strokeWidth={2} />
                    <span className="text-slate-700 font-medium leading-relaxed">Philanthropic planning and foundation management.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Advisory Divisions Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Core Advisory Divisions</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Specialized expertise across the full spectrum of wealth management, tailored to your unique financial architecture.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white p-8 border border-slate-100 rounded-2xl shadow-sm">
                <PieChart size={28} className="text-teal-700 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Portfolio Management</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  Active, institutional-grade portfolio construction designed to capture upside while rigorously managing downside risk across market cycles.
                </p>
                <a href="#" className="inline-flex items-center text-xs font-semibold text-teal-700 uppercase tracking-wider hover:text-teal-800 transition-colors">
                  Explore Capabilities <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-8 border border-slate-100 rounded-2xl shadow-sm">
                <LineChart size={28} className="text-teal-700 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Investment Planning</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Strategic asset allocation modeling aligned with your unique return targets and risk constraints.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-gradient-to-br from-teal-50 to-white p-8 border border-teal-100 rounded-2xl shadow-sm">
                <Clock size={28} className="text-teal-700 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Retirement Strategy</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Structuring cash flow and asset accumulation to sustain desired lifestyle in perpetuity.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-white p-8 border border-slate-100 rounded-2xl shadow-sm">
                <Landmark size={28} className="text-teal-700 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Estate & Legacy</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Comprehensive generational wealth transfer planning, working in concert with top legal and tax professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach, Local Expertise Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                  Global Reach, Local <br />
                  Expertise
                </h2>
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                  Our investment mandate spans global markets, providing access to exclusive opportunities and cross-border diversification, while maintaining a deep understanding of local regulatory environments.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                      <Globe size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Global Market Access</h4>
                      <p className="text-sm text-slate-600">Direct investment capabilities across developed and emerging markets.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                      <Navigation size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Cross-Border Structuring</h4>
                      <p className="text-sm text-slate-600">Navigating complex international tax and legal frameworks.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-square lg:aspect-auto lg:h-[500px] bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center justify-center p-12 text-center shadow-inner">
                <Globe size={64} className="text-teal-200 mb-6" strokeWidth={1} />
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Institutional Visualization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Trust Section */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-12">Institutional Trust</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">$5B+</div>
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">Assets Advised</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">25+</div>
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">Years of Excellence</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">98%</div>
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">Client Retention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-24 bg-slate-900 text-white relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Connect with a Partner</h2>
              <p className="text-slate-400 leading-relaxed">
                Initiate your Private Dialogue to discover how institutional wealth management can optimize your financial architecture.
              </p>
            </div>
            
            <div className="max-w-md mx-auto bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-2xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full h-12 bg-slate-900/50 border border-slate-700 rounded-lg px-4 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full h-12 bg-slate-900/50 border border-slate-700 rounded-lg px-4 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry" className="block text-xs font-medium text-slate-300 mb-2">Inquiry Type</label>
                  <select 
                    id="inquiry" 
                    className="w-full h-12 bg-slate-900/50 border border-slate-700 rounded-lg px-4 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors appearance-none"
                  >
                    <option>Private Office Advisory</option>
                    <option>Portfolio Management</option>
                    <option>Wealth Transfer Planning</option>
                    <option>Other</option>
                  </select>
                </div>
                <button className="w-full h-12 rounded-lg bg-teal-700 hover:bg-teal-600 text-white font-medium transition-colors shadow-sm mt-4 flex items-center justify-center gap-2">
                  Request Consultation <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-1 pr-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-medium tracking-tight text-slate-900">icconic<span className="font-bold">blue</span></span>
              </div>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                Architects of Global Excellence. Engineering enduring legacies through intellectual rigor and modern transparency.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-700 transition-colors">
                  <Landmark size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-700 transition-colors">
                  <Landmark size={18} />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 mb-6">Divisions</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-sm text-slate-600 hover:text-teal-700 transition-colors">Wealth Management</a></li>
                  <li><a href="#" className="text-sm text-slate-600 hover:text-teal-700 transition-colors">Education Consultancy</a></li>
                  <li><a href="#" className="text-sm text-slate-600 hover:text-teal-700 transition-colors">Business Coaching</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 mb-6">Company</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-sm text-slate-600 hover:text-teal-700 transition-colors">About Us</a></li>
                  <li><a href="#" className="text-sm text-slate-600 hover:text-teal-700 transition-colors">Our Philosophy</a></li>
                  <li><a href="#" className="text-sm text-slate-600 hover:text-teal-700 transition-colors">Leadership Team</a></li>
                  <li><a href="#" className="text-sm text-slate-600 hover:text-teal-700 transition-colors">Careers</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 mb-6">Insights</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-sm text-slate-600 hover:text-teal-700 transition-colors">Market Analysis</a></li>
                  <li><a href="#" className="text-sm text-slate-600 hover:text-teal-700 transition-colors">Educational Trends</a></li>
                  <li><a href="#" className="text-sm text-slate-600 hover:text-teal-700 transition-colors">Case Studies</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Icconicblue. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Legal Disclosures</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
