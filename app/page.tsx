import Image from "next/image";
import { GraduationCap, TrendingUp, ArrowRight, CheckCircle2, Landmark } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-medium tracking-tight">icconic<span className="font-bold">blue</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-teal-600 transition-colors">Wealth Management</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Education Consultancy</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Business Coaching</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Resources</a>
            <a href="#" className="hover:text-teal-600 transition-colors">About Us</a>
          </nav>
          <button className="hidden md:inline-flex h-10 items-center justify-center rounded-sm bg-slate-900 px-6 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors">
            Book Consultation
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero_bg.png" 
              alt="Architecture Background" 
              fill 
              className="object-cover opacity-60 object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-slate-50"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start">
                <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-slate-500 uppercase mb-6">
                  <div className="w-8 h-px bg-slate-300"></div>
                  Global Advisory Firm
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                  Architects of <br />
                  <span className="font-light italic text-teal-700">Global Excellence</span>
                </h1>
                <p className="text-lg text-slate-600 mb-12 max-w-2xl leading-relaxed">
                  Icconicblue provides elite strategic advisory across wealth, education, and enterprise. We partner with visionaries to engineer enduring legacies through intellectual rigor and modern transparency.
                </p>
                
                {/* Small Hero Cards */}
                <div className="grid sm:grid-cols-3 gap-6 w-full max-w-4xl">
                  {/* Card 1 */}
                  <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 mb-4">
                      <Landmark size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Wealth Management</h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">Preserving and compounding capital for future generations.</p>
                    <a href="#" className="inline-flex items-center text-xs font-semibold text-teal-700 uppercase tracking-wider hover:text-teal-800 transition-colors">
                      Discover <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 mb-4">
                      <GraduationCap size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Education Consultancy</h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">Navigating elite global institutional placements.</p>
                    <a href="#" className="inline-flex items-center text-xs font-semibold text-teal-700 uppercase tracking-wider hover:text-teal-800 transition-colors">
                      Discover <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                  {/* Card 3 */}
                  <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 mb-4">
                      <TrendingUp size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Business Coaching</h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">Scaling enterprise value through strategic leadership.</p>
                    <a href="#" className="inline-flex items-center text-xs font-semibold text-teal-700 uppercase tracking-wider hover:text-teal-800 transition-colors">
                      Discover <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Side Dark Card */}
              <div className="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0 relative lg:top-12">
                <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-semibold mb-8">Core Divisions</h3>
                  <div className="space-y-6 mb-12">
                    <a href="#" className="flex items-center justify-between group">
                      <span className="text-slate-300 group-hover:text-white transition-colors">Wealth Management</span>
                      <ArrowRight size={18} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="w-full h-px bg-slate-800"></div>
                    <a href="#" className="flex items-center justify-between group">
                      <span className="text-slate-300 group-hover:text-white transition-colors">Education Consultancy</span>
                      <ArrowRight size={18} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="w-full h-px bg-slate-800"></div>
                    <a href="#" className="flex items-center justify-between group">
                      <span className="text-slate-300 group-hover:text-white transition-colors">Business Coaching</span>
                      <ArrowRight size={18} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  
                  <div className="pt-8 border-t border-slate-800">
                    <p className="text-sm text-slate-400 mb-4">Ready to elevate your trajectory?</p>
                    <button className="w-full h-12 rounded-sm bg-teal-700 hover:bg-teal-600 text-white font-medium transition-colors shadow-sm">
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">The Architecture of Achievement</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We build robust foundations for long-term success, blending analytical rigor with visionary foresight across three distinct pillars.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Landmark size={32} className="text-teal-700 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Capital Preservation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Strategic asset allocation and risk mitigation to protect and grow generational wealth in volatile markets.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <GraduationCap size={32} className="text-teal-700 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Academic Excellence</h3>
                <p className="text-slate-600 leading-relaxed">
                  Bespoke guidance for admission into the world's most prestigious educational institutions.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <TrendingUp size={32} className="text-teal-700 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Enterprise Growth</h3>
                <p className="text-slate-600 leading-relaxed">
                  Actionable coaching frameworks designed to scale operations and enhance executive leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wealth Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image 
                  src="/wealth_sculpture.png" 
                  alt="Golden Sculpture representing Wealth" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-slate-500 uppercase mb-6">
                  <div className="w-8 h-px bg-slate-300"></div>
                </div>
                <h2 className="text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                  Securing the <br />
                  <span className="font-light italic text-teal-700">Future.</span>
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Our Wealth Management division operates on a simple premise: your capital should work as hard as you do, with minimal friction and maximum transparency.
                </p>
                <ul className="space-y-5 mb-12">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-teal-600 mt-1" size={20} strokeWidth={2} />
                    <span className="text-slate-700 font-medium">Bespoke Portfolio Construction</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-teal-600 mt-1" size={20} strokeWidth={2} />
                    <span className="text-slate-700 font-medium">Generational Wealth Transfer</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-teal-600 mt-1" size={20} strokeWidth={2} />
                    <span className="text-slate-700 font-medium">Tax Optimization Strategies</span>
                  </li>
                </ul>
                <a href="#" className="inline-flex items-center font-semibold text-slate-900 hover:text-teal-700 transition-colors group">
                  Explore Wealth Services 
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-slate-500 uppercase mb-6">
                  <div className="w-8 h-px bg-slate-300"></div>
                </div>
                <h2 className="text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                  Cultivating <br />
                  <span className="font-light italic text-teal-700">Minds.</span>
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Access to elite education requires more than just academic prowess; it demands a strategic narrative. We help craft compelling profiles for top-tier institutions.
                </p>
                <ul className="space-y-5 mb-12">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-teal-600 mt-1" size={20} strokeWidth={2} />
                    <span className="text-slate-700 font-medium">Ivy League Admission Strategy</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-teal-600 mt-1" size={20} strokeWidth={2} />
                    <span className="text-slate-700 font-medium">Extracurricular Profile Building</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-teal-600 mt-1" size={20} strokeWidth={2} />
                    <span className="text-slate-700 font-medium">Interview Preparation</span>
                  </li>
                </ul>
                <a href="#" className="inline-flex items-center font-semibold text-slate-900 hover:text-teal-700 transition-colors group">
                  Explore Education Services 
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/education_building.png" 
                  alt="Grand Historical Educational Building" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-slate-900 text-white relative">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8">Initiate a Confidential Dialogue</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Excellence is not an accident. It is the result of high intention, sincere effort, and intelligent execution. Let us discuss how we can elevate your trajectory.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-8 h-14 rounded-sm bg-teal-700 hover:bg-teal-600 text-white font-medium transition-colors shadow-sm tracking-wide text-sm">
                BOOK A CONSULTATION
              </button>
              <button className="w-full sm:w-auto px-8 h-14 rounded-sm border border-slate-600 hover:border-white text-white font-medium transition-colors tracking-wide text-sm">
                SEND AN INQUIRY
              </button>
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
