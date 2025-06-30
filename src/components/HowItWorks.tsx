import React from 'react';
import { Mic, Brain, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      title: "Talk or Type",
      description: "Zyra listens in real-time to your voice commands or text inputs, understanding context and intent naturally.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "She Remembers",
      description: "Every task, fact, and event is stored in her continuous memory, building a personalized knowledge base.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "She Acts",
      description: "Emails, calendars, tasks, and more — Zyra executes on your behalf with precision and care.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            How Zyra Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium tracking-wide">
            Three simple steps to transform how you manage your digital life
          </p>
        </div>
        
        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg relative z-10`}>
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto font-medium">{step.description}</p>
                
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full border-2 border-gray-600 flex items-center justify-center text-sm font-bold text-white z-20">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-900 rounded-3xl p-12 shadow-sm border border-gray-800">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
              Ready to delegate your digital life?
            </h3>
            <p className="text-xl text-gray-400 mb-8 font-medium">
              Experience the AI that works like a real human assistant.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl tracking-wide">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;