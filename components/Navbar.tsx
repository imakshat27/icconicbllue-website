import Link from "next/link";

export default function Navbar() {
  return (
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
  );
}
