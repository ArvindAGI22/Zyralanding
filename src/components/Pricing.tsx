import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "forever",
      description: "Perfect for getting started with AI assistance",
      features: [
        "Voice commands and text input",
        "Basic task management",
        "Email summarization",
        "Calendar integration",
        "5 AI interactions per day",
        "Community support"
      ],
      buttonText: "Get Started Free",
      buttonStyle: "bg-gray-700 hover:bg-gray-600 text-white",
      popular: false,
      icon: Star
    },
    {
      name: "Premium",
      price: "$20",
      period: "per month",
      description: "Enhanced features for power users",
      features: [
        "Everything in Basic",
        "Unlimited AI interactions",
        "Advanced memory capabilities",
        "Notion & Google Docs integration",
        "Smart scheduling automation",
        "Priority email support",
        "Custom personality settings",
        "Advanced analytics"
      ],
      buttonText: "Start Premium",
      buttonStyle: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white",
      popular: true,
      icon: Zap
    },
    {
      name: "Pro",
      price: "$40",
      period: "per month",
      description: "Complete AI assistant for teams and professionals",
      features: [
        "Everything in Premium",
        "Team collaboration features",
        "Advanced workflow automation",
        "Custom integrations & API access",
        "Dedicated account manager",
        "24/7 priority support",
        "Advanced security & compliance",
        "Custom AI training",
        "White-label options"
      ],
      buttonText: "Go Pro",
      buttonStyle: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white",
      popular: false,
      icon: Star
    }
  ];

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium tracking-wide">
            Start free and scale as you grow. Every plan includes our core AI assistant features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-900 rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20' 
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Plan header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600' 
                    : 'bg-gradient-to-r from-gray-700 to-gray-600'
                }`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-gray-400 text-sm font-medium mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-gray-400 text-lg font-medium ml-2">/{plan.period}</span>
                  )}
                  {plan.price === "Free" && (
                    <span className="text-gray-400 text-lg font-medium ml-2">{plan.period}</span>
                  )}
                </div>
              </div>
              
              {/* Features list */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.popular ? 'bg-blue-500' : 'bg-gray-600'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl tracking-wide ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 font-medium mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money-back guarantee</span>
            <span>✓ Secure payments</span>
            <span>✓ 99.9% uptime SLA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;