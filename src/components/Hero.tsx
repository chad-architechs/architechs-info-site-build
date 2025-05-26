
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Cloud, Cog } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-slate-blue-900">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/30 rotate-45"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-slate-blue-300 rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-white/20 rotate-45"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up">
            Empowering businesses through 
            <span className="text-slate-blue-300 block mt-2">tailored software solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Whether you're a startup looking to launch fast or an enterprise modernizing legacy systems, 
            Architechs delivers clean code, smart automation, and systems that scale.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center p-6 rounded-lg glass-effect hover:bg-white/10 transition-all duration-300">
              <Code className="h-8 w-8 text-slate-blue-300 mb-3" />
              <h3 className="font-semibold text-white mb-2">Scalable Architecture</h3>
              <p className="text-slate-300 text-sm text-center">Modern, maintainable systems built for growth</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg glass-effect hover:bg-white/10 transition-all duration-300">
              <Cloud className="h-8 w-8 text-slate-blue-300 mb-3" />
              <h3 className="font-semibold text-white mb-2">Expert Development</h3>
              <p className="text-slate-300 text-sm text-center">Full-stack solutions with proven technologies</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg glass-effect hover:bg-white/10 transition-all duration-300">
              <Cog className="h-8 w-8 text-slate-blue-300 mb-3" />
              <h3 className="font-semibold text-white mb-2">Smart Automation</h3>
              <p className="text-slate-300 text-sm text-center">AI-powered workflows and intelligent processing</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-slate-blue-600 hover:bg-slate-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Let's Build Something Meaningful
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
