
import { CheckCircle, Shield, TrendingUp, Settings } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Hands-on engineering leadership",
      description: "Direct involvement from experienced architects"
    },
    {
      icon: Shield,
      title: "Proven experience in regulated industries",
      description: "Success in claims, finance, and compliance-heavy sectors"
    },
    {
      icon: TrendingUp,
      title: "Focus on performance, security, and scalability",
      description: "Built for enterprise-grade requirements"
    },
    {
      icon: Settings,
      title: "Built for long-term maintainability and growth",
      description: "Sustainable solutions that evolve with your business"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-navy-800">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Why Choose Architechs?</h2>
          <div className="w-24 h-1 bg-slate-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            What sets us apart in the software development landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl hover:bg-navy-700/50 transition-colors duration-300 group border border-white/5"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-blue-500 to-slate-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-slate-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-slate-blue-400 mb-2">15+</div>
            <div className="text-slate-300">Years of Experience</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-slate-blue-400 mb-2">100%</div>
            <div className="text-slate-300">Client Satisfaction</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-slate-blue-400 mb-2">24/7</div>
            <div className="text-slate-300">Support & Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
