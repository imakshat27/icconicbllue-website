import { Landmark, GraduationCap, TrendingUp } from "lucide-react";

export default function ServicesGrid() {
  return (
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
  );
}
