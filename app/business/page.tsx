import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Star, TrendingUp, Target, Network, BarChart3, MapPin, Globe, Compass, ArrowRight } from "lucide-react";

export default function BusinessCoaching() {
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
            <Link href="/Wealth" className="hover:text-teal-600 transition-colors">Wealth Management</Link>
            <Link href="/education" className="hover:text-teal-600 transition-colors">Education Consultancy</Link>
            <Link href="/business" className="text-teal-700 font-semibold transition-colors border-b-2 border-teal-700 py-1 -mb-[3px]">Business Coaching</Link>
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
        <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-48 overflow-hidden bg-slate-100">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/image.png" 
              alt="Hero Background" 
              fill 
              className="object-cover opacity-80 object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50/80 backdrop-blur-sm border border-teal-100 text-teal-800 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                Executive Advisory
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Scale with <br />
                <span className="text-teal-700">Strategy.</span> <br />
                Lead with <br />
                <span className="text-teal-700">Precision.</span>
              </h1>
              <p className="text-lg text-slate-700 mb-10 leading-relaxed font-medium">
                Elevating visionary leaders through rigorous intellectual frameworks and actionable scaling methodologies. We engineer the mental architecture for monumental growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="h-14 px-8 inline-flex items-center justify-center rounded-sm bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg">
                  Initiate Dialogue <ArrowRight size={18} className="ml-2" />
                </button>
                <button className="h-14 px-8 inline-flex items-center justify-center rounded-sm bg-white border border-slate-300 text-slate-900 font-medium hover:bg-slate-50 transition-colors shadow-sm">
                  Explore Methodology
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* The Executive Ecosystem */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">The Executive Ecosystem</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                True scaling requires more than operational shifts; it demands a psychological evolution. Our coaching ecosystem surrounds leaders with high-fidelity insights, stress-tested strategies, and absolute clarity.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700">
                    <Lightbulb size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Cognitive Agility</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Developing mental frameworks to navigate complex market dynamics and rapid organizational change.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700">
                    <Star size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Architectural Leadership</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Transitioning from operational management to systemic design and strategic delegation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/image.png" 
                  alt="Executive Ecosystem" 
                  fill 
                  className="object-cover"
                />
                {/* Floating Stat Card */}
                <div className="absolute -left-6 lg:left-6 -bottom-6 lg:bottom-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
                  <div className="flex items-center gap-2 mb-3 text-teal-700">
                    <TrendingUp size={16} strokeWidth={2} />
                    <span className="text-xs font-bold tracking-widest uppercase">High-Performance Metrics</span>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-1">3.5x</div>
                  <p className="text-xs text-slate-500 leading-tight">Average revenue multiplier post-engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scaling Methodologies Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Scaling Methodologies</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A detailed breakdown of our strategic pillars for organizational transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white p-10 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                  <Lightbulb size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Cognitive Agility</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  Master adaptive thinking frameworks to pivot seamlessly in volatile markets. We train leaders to anticipate disruption rather than react to it.
                </p>
                <a href="#" className="inline-flex items-center text-xs font-bold text-teal-700 uppercase tracking-wider hover:text-teal-800 transition-colors">
                  Explore Pillar <ArrowRight size={14} className="ml-1" />
                </a>
              </div>

              {/* Card 2 - Dark */}
              <div className="bg-slate-900 p-10 rounded-2xl shadow-lg text-white">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-teal-400 mb-6">
                  <Target size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Operational Excellence</h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Streamlining core processes to eliminate friction and maximize output efficiency across all business units.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-10 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                  <Network size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Systems Design</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Architecting scalable business frameworks that support sustained growth without compromising operational integrity.
                </p>
              </div>

              {/* Card 4 - Wide with image */}
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col sm:flex-row overflow-hidden">
                <div className="p-10 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                    <BarChart3 size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-slate-900">Performance Analytics</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Utilizing advanced metrics to quantify leadership impact and drive data-informed strategic decisions.
                  </p>
                </div>
                <div className="w-full sm:w-2/5 relative min-h-[200px] m-4 rounded-xl overflow-hidden bg-slate-900 p-2">
                  <Image 
                    src="/image.png" 
                    alt="Analytics Dashboard" 
                    fill 
                    className="object-cover opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Leadership Network Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                  Global Leadership Network
                </h2>
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                  Connect with an elite cadre of industry pioneers. Our network spans major economic hubs, offering unparalleled opportunities for strategic alliances and cross-pollination of ideas.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-5 items-start">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-slate-900 flex items-center justify-center text-white mt-1">
                      <MapPin size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">North American Hubs</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Strategic centers in New York, San Francisco, and Toronto.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-5 items-start">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-slate-900 flex items-center justify-center text-white mt-1">
                      <Globe size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">European Centers of Excellence</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Executive forums in London, Frankfurt, and Zurich.</p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-slate-900 flex items-center justify-center text-white mt-1">
                      <Compass size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">APAC Emerging Markets</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Growth accelerators in Singapore, Tokyo, and Sydney.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-square lg:aspect-[4/5] bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center justify-center p-12 text-center shadow-inner">
                <Globe size={80} className="text-teal-200 mb-6" strokeWidth={1} />
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Global Network Visualization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Consultation Section */}
        <section className="py-24 bg-slate-900 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Executive Consultation</h2>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Initiate a confidential dialogue with our senior partners to explore how our advisory frameworks can address your organization's trajectory.
              </p>
            </div>
            
            <div className="max-w-md mx-auto bg-slate-50 p-8 rounded-2xl shadow-2xl border border-slate-200">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full h-12 bg-white border border-slate-300 rounded-lg px-4 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors shadow-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-2">Corporate Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full h-12 bg-white border border-slate-300 rounded-lg px-4 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors shadow-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="objective" className="block text-xs font-semibold text-slate-700 mb-2">Primary Objective</label>
                  <select 
                    id="objective" 
                    className="w-full h-12 bg-white border border-slate-300 rounded-lg px-4 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors appearance-none shadow-sm"
                  >
                    <option>Strategic Scaling</option>
                    <option>Leadership Transition</option>
                    <option>Operational Efficiency</option>
                    <option>Other</option>
                  </select>
                </div>
                <button className="w-full h-12 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors shadow-md mt-4 flex items-center justify-center gap-2">
                  Request Consultation <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Dark Footer */}
      <footer className="bg-[#0B1120] text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="md:col-span-1 pr-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#0B1120] rounded-full"></div>
                </div>
                <span className="text-2xl font-medium tracking-tight text-white">icconic<span className="font-bold">blue</span></span>
              </div>
              <p className="text-xs leading-relaxed text-slate-500">
                Elevating organizational excellence through academic and professional rigor.
              </p>
              <p className="text-xs leading-relaxed text-slate-600 mt-8">
                &copy; {new Date().getFullYear()} Icconicblue. All rights reserved.<br />
                Intellectual Rigor, Modern Transparency.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-slate-300 mb-6">Services</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-xs text-slate-500 hover:text-teal-400 transition-colors">Wealth Management</a></li>
                  <li><a href="#" className="text-xs text-slate-500 hover:text-teal-400 transition-colors">Education Consultancy</a></li>
                  <li><a href="#" className="text-xs text-teal-500 font-semibold transition-colors">Business Coaching</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-slate-300 mb-6">Insights</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-xs text-slate-500 hover:text-teal-400 transition-colors">Insight Library</a></li>
                  <li><a href="#" className="text-xs text-slate-500 hover:text-teal-400 transition-colors">Case Studies</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-slate-300 mb-6">Legal</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-xs text-slate-500 hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-xs text-slate-500 hover:text-teal-400 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
