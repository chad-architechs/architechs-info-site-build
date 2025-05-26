import { User, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-navy-800">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">About Us</h2>
          <div className="w-24 h-1 bg-slate-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-200 leading-relaxed">
              At Architechs, we're passionate about turning complex challenges into elegant, 
              maintainable software. With deep expertise across full-stack development, DevOps, 
              and solution architecture, we partner with businesses to build secure, scalable 
              platforms that drive growth and reduce operational friction.
            </p>
            
            <p className="text-lg text-slate-200 leading-relaxed">
              Beyond traditional consulting, we also partner with companies through ownership 
              and tech investment opportunities. For ventures that align with our vision and 
              expertise, we offer strategic partnerships where we invest our technical capabilities 
              in exchange for partial ownership, creating long-term value for both parties.
            </p>

            <p className="text-lg text-slate-200 leading-relaxed">
              Led by <strong className="text-white">Chad La Vita</strong>, who brings 11 years 
              of software development experience spanning banking systems, escrow payment platforms, 
              claims industry management systems, AI integration, and company automation solutions. 
              As a seasoned software architect and hands-on CTO, Chad combines strategic thinking 
              with engineering precision for every engagement.
            </p>

            <p className="text-lg text-slate-200 leading-relaxed">
              We've successfully transformed old-school companies from using multiple disparate 
              applications to streamlined, all-in-one systems that dramatically boost productivity 
              and operational efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <User className="h-8 w-8 text-slate-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white">Expert Leadership</h4>
                <p className="text-sm text-slate-300 mt-1">Seasoned architects guiding every project</p>
              </div>
              <div className="text-center p-4">
                <Award className="h-8 w-8 text-slate-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white">Proven Experience</h4>
                <p className="text-sm text-slate-300 mt-1">Success in regulated industries</p>
              </div>
              <div className="text-center p-4">
                <Target className="h-8 w-8 text-slate-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white">Strategic Focus</h4>
                <p className="text-sm text-slate-300 mt-1">Aligned with your business goals</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-navy-700 to-slate-blue-800 p-8 rounded-2xl border border-white/10">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-slate-blue-400 rounded-full"></div>
                  <span className="text-slate-200">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-slate-blue-400 rounded-full"></div>
                  <span className="text-slate-200">DevOps & Cloud Infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-slate-blue-400 rounded-full"></div>
                  <span className="text-slate-200">Solution Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-slate-blue-400 rounded-full"></div>
                  <span className="text-slate-200">AI-Powered Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-slate-blue-400 rounded-full"></div>
                  <span className="text-slate-200">Technical Leadership</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-slate-blue-400 rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-white/30 rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
