
import { Code2, Cloud, Database, Brain, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "From web applications to backend systems, we build robust, well-architected solutions using Laravel, Vue.js, and modern cloud technologies."
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud Infrastructure",
      description: "We streamline deployments and infrastructure management using tools like Laravel Vapor, AWS, and CI/CD pipelines — ensuring speed, security, and uptime."
    },
    {
      icon: Database,
      title: "Solution Architecture",
      description: "We design scalable systems that align with your business goals — from domain modeling and database design to system integration and API design."
    },
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "We integrate GPT-based AI into business workflows to automate tasks like document verification, data normalization, and intelligent processing."
    },
    {
      icon: Users,
      title: "Team Augmentation & Leadership",
      description: "Need technical guidance or delivery firepower? We provide fractional CTO support, technical leadership, and team scaling."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-navy-900 to-slate-blue-900">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-slate-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border border-white/10 bg-navy-800/50 backdrop-blur-sm hover:bg-navy-700/50 hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-slate-blue-500 to-slate-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-slate-blue-300 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
