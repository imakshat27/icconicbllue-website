import Image from "next/image";
import { GraduationCap, TrendingUp, ArrowRight, Landmark } from "lucide-react";

export default function Hero() {
  return (
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
  );
}
