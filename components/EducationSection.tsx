import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function EducationSection() {
  return (
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
  );
}
