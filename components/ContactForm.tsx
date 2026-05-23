export default function ContactForm() {
  return (
    <section className="py-32 bg-slate-900 text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8">Initiate a Confidential Dialogue</h2>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-xl">
              Excellence is not an accident. It is the result of high intention, sincere effort, and intelligent execution. Let us discuss how we can elevate your trajectory.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold tracking-widest text-teal-500 uppercase mb-2">Global Headquarters</h4>
                <p className="text-slate-300">100 Wall Street<br/>New York, NY 10005</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-widest text-teal-500 uppercase mb-2">Direct Inquiries</h4>
                <p className="text-slate-300">partnerships@icconicblue.com<br/>+1 (212) 555-0198</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800/50 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-slate-700 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-300">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-300">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiryType" className="text-sm font-medium text-slate-300">Area of Interest</label>
                <select 
                  id="inquiryType" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all appearance-none"
                >
                  <option value="wealth">Wealth Management</option>
                  <option value="education">Education Consultancy</option>
                  <option value="business">Business Coaching</option>
                  <option value="other">Other / General</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all resize-none"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full h-14 rounded-lg bg-teal-700 hover:bg-teal-600 text-white font-medium transition-colors shadow-sm tracking-wide text-sm mt-4"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
