
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy-800 to-slate-blue-900 text-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Build Something Meaningful</h2>
          <div className="w-24 h-1 bg-slate-blue-400 mx-auto mb-4"></div>
          <p className="text-xl text-navy-100 max-w-2xl mx-auto">
            Whether you're refining an existing system or starting from scratch, 
            we'd love to hear about your project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <MessageSquare className="h-6 w-6 text-slate-blue-400" />
                  <span>Start a Conversation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-navy-100 leading-relaxed">
                  Ready to transform your business with cutting-edge software solutions? 
                  Let's discuss your project requirements and explore how we can help you achieve your goals.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-slate-blue-600 hover:bg-slate-blue-700 text-white py-3 text-lg group"
                    onClick={() => window.location.href = 'mailto:hello@architechs.dev'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="text-sm text-navy-200 text-center">
                    We typically respond within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Discovery Call</h4>
                      <p className="text-navy-200 text-sm">Understanding your requirements and challenges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Technical Assessment</h4>
                      <p className="text-navy-200 text-sm">Evaluating current systems and architecture</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Custom Proposal</h4>
                      <p className="text-navy-200 text-sm">Tailored solution with timeline and investment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Partnership Begins</h4>
                      <p className="text-navy-200 text-sm">Collaborative development and delivery</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
