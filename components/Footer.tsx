import { Landmark } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
