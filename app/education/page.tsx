import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Globe, FileText, Briefcase, ArrowRight, Map, Building2, CheckCircle2 } from "lucide-react";

export default function EducationConsultancy() {
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
            <Link href="/wealth" className="hover:text-teal-600 transition-colors">Wealth Management</Link>
            <Link href="/education" className="text-teal-700 font-semibold transition-colors border-b-2 border-teal-700 py-1 -mb-[3px]">Education Consultancy</Link>
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
                Icconicblue Education
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Expert Guidance <br />
                for Your <br />
                <span className="text-teal-700">Academic Future.</span>
              </h1>
              <p className="text-lg text-slate-700 mb-10 leading-relaxed font-medium">
                Navigate the complexities of global education with our elite consultancy services. We provide rigorous, transparent, and tailored support to secure your place at the world's leading institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="h-14 px-8 inline-flex items-center justify-center rounded-sm bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg">
                  Begin Your Journey <ArrowRight size={18} className="ml-2" />
                </button>
                <button className="h-14 px-8 inline-flex items-center justify-center rounded-sm bg-white border border-slate-300 text-slate-900 font-medium hover:bg-slate-50 transition-colors shadow-sm">
                  Explore Programs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Academic Support */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Comprehensive Academic Support</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A holistic approach to your educational aspirations, ensuring precision at every stage of the application and transition process.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white p-10 border border-slate-100 rounded-2xl shadow-sm relative overflow-hidden group">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-teal-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                    <GraduationCap size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-slate-900">University Admissions</h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6 max-w-md">
                    Strategic profiling, application crafting, and interview preparation for top-tier global universities. We build compelling narratives that stand out to admissions committees.
                  </p>
                  <a href="#" className="inline-flex items-center text-xs font-bold text-teal-700 uppercase tracking-wider hover:text-teal-800 transition-colors">
                    Learn More <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-10 border border-slate-100 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                  <Globe size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Study Abroad Guidance</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Curated institutional recommendations aligned with your academic goals and cultural preferences.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-10 border border-slate-100 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                  <FileText size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Visa Support</h3>
                <p className="text-slate-600 leading-relaxed text-sm max-w-sm">
                  Meticulous assistance with documentation and regulatory compliance for international study.
                </p>
              </div>

              {/* Card 4 - Wide with image */}
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col sm:flex-row overflow-hidden">
                <div className="p-10 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                    <Briefcase size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-slate-900">Career Counseling</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Aligning educational paths with long-term professional trajectories. We provide foresight into emerging industries and the degrees required to lead them.
                  </p>
                </div>
                <div className="w-full sm:w-2/5 relative min-h-[200px] m-4 rounded-xl overflow-hidden">
                  <Image 
                    src="/image.png" 
                    alt="Career Counseling" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A Global Perspective Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                  A Global Perspective
                </h2>
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                  Our network extends across premier educational hubs worldwide. We leverage our institutional relationships to provide clients with unparalleled insights and access.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                      <Building2 size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Ivy League & Russell Group</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Specialized tracks for the most competitive institutions in the US and UK.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                      <Globe size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">European Excellence</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Guidance for top-tier programs across Switzerland, Germany, and the Netherlands.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                      <CheckCircle2 size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Emerging Global Hubs</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Opportunities in leading Asian universities offering world-class research facilities.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-square lg:aspect-[4/5] bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center justify-center p-12 text-center shadow-inner">
                <Map size={80} className="text-teal-200 mb-6" strokeWidth={1} />
                <p className="text-xs font-bold tracking-widest text-teal-800 uppercase">Global Network Visualization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Define Your Future Section */}
        <section className="py-24 bg-slate-900 text-white relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Ready to Define Your Future?</h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
                Schedule a preliminary consultation with our senior academic advisors to discuss your objectives and evaluate how our expertise aligns with your ambitions.
              </p>
            </div>
            
            <div className="max-w-md mx-auto bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-slate-700">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full h-12 bg-slate-900/50 border border-slate-700 rounded-lg px-4 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full h-12 bg-slate-900/50 border border-slate-700 rounded-lg px-4 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Area of Interest</label>
                  <select 
                    id="interest" 
                    className="w-full h-12 bg-slate-900/50 border border-slate-700 rounded-lg px-4 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors appearance-none"
                  >
                    <option>Undergraduate Admissions</option>
                    <option>Postgraduate Admissions</option>
                    <option>MBA Consulting</option>
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

      {/* Dark Footer */}
      <footer className="bg-[#0B1120] text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#0B1120] rounded-full"></div>
              </div>
              <span className="text-2xl font-medium tracking-tight text-white">icconic<span className="font-bold">blue</span></span>
            </div>
            
            <nav className="flex flex-wrap md:justify-end gap-x-8 gap-y-4 text-sm font-medium text-slate-300">
              <a href="#" className="hover:text-teal-400 transition-colors">Wealth Management</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Education Consultancy</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Business Coaching</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Insight Library</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Case Studies</a>
            </nav>
          </div>
          
          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p className="max-w-sm">
              &copy; {new Date().getFullYear()} Icconicblue. All rights reserved. Intellectual Rigor, Modern Transparency.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
