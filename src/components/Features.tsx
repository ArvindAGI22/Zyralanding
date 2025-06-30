import React from 'react';
import { User, Shield, Zap, Settings } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Everything you need in one AI assistant
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium tracking-wide">
            Zyra combines the best of human-like intelligence with digital efficiency, 
            giving you a truly personal assistant that grows with you.
          </p>
        </div>
        
        {/* Why Zyra section */}
        <div className="bg-gray-900 rounded-3xl p-12 shadow-sm border border-gray-800">
          <h3 className="text-3xl font-bold text-white text-center mb-12 tracking-tight">Why Choose Zyra?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Truly Personal", 
                desc: "Learns your preferences, routines, and workflows",
                icon: User,
                gradient: "from-blue-600 to-cyan-600"
              },
              { 
                title: "Privacy First", 
                desc: "All your data is secure and belongs only to you",
                icon: Shield,
                gradient: "from-green-600 to-emerald-600"
              },
              { 
                title: "Execution-Ready", 
                desc: "Not just talk — Zyra acts on your behalf",
                icon: Zap,
                gradient: "from-yellow-600 to-orange-600"
              },
              { 
                title: "Customizable Personality", 
                desc: "You define how she speaks and works",
                icon: Settings,
                gradient: "from-purple-600 to-indigo-600"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 tracking-tight">{item.title}</h4>
                <p className="text-gray-400 text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;