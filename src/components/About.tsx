
import { User, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-6">About Us</h2>
          <div className="w-24 h-1 bg-slate-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-navy-600 leading-relaxed">
              At Architechs, we're passionate about turning complex challenges into elegant, 
              maintainable software. With deep expertise across full-stack development, DevOps, 
              and solution architecture, we partner with businesses to build secure, scalable 
              platforms that drive growth and reduce operational friction.
            </p>
            
            <p className="text-lg text-navy-600 leading-relaxed">
              Led by <strong className="text-navy-800">Chad La Vita</strong>, a seasoned software architect 
              and hands-on CTO, we bring strategic thinking and engineering precision to every engagement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <User className="h-8 w-8 text-slate-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-navy-800">Expert Leadership</h4>
                <p className="text-sm text-navy-600 mt-1">Seasoned architects guiding every project</p>
              </div>
              <div className="text-center p-4">
                <Award className="h-8 w-8 text-slate-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-navy-800">Proven Experience</h4>
                <p className="text-sm text-navy-600 mt-1">Success in regulated industries</p>
              </div>
              <div className="text-center p-4">
                <Target className="h-8 w-8 text-slate-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-navy-800">Strategic Focus</h4>
                <p className="text-sm text-navy-600 mt-1">Aligned with your business goals</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-navy-100 to-slate-blue-100 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-slate-blue-600 rounded-full"></div>
                  <span className="text-navy-700">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-slate-blue-600 rounded-full"></div>
                  <span className="text-navy-700">DevOps & Cloud Infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-slate-blue-600 rounded-full"></div>
                  <span className="text-navy-700">Solution Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-slate-blue-600 rounded-full"></div>
                  <span className="text-navy-700">AI-Powered Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-slate-blue-600 rounded-full"></div>
                  <span className="text-navy-700">Technical Leadership</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-slate-blue-300 rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-navy-300 rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
