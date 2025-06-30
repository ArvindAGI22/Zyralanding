import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ishaan",
      role: "Product Manager",
      content: "Zyra literally replaced three apps for me. It's like having a real assistant who never forgets.",
      rating: 5
    },
    {
      name: "Priya",
      role: "Startup Founder", 
      content: "Finally, an AI that feels personal and actually useful. Zyra understands my workflow better than I do.",
      rating: 5
    },
    {
      name: "Alex",
      role: "Marketing Director",
      content: "The memory feature is game-changing. Zyra remembers client preferences from months ago and applies them automatically.",
      rating: 5
    }
  ];

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What People Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium tracking-wide">
            Join thousands of professionals who've transformed their productivity with Zyra
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-8 rounded-2xl relative hover:shadow-lg transition-shadow duration-300 border border-gray-800"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-6" />
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white tracking-tight">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm font-medium">{testimonial.role}</p>
                </div>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2 tracking-tight">10k+</div>
              <div className="text-blue-100 font-medium">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 tracking-tight">1M+</div>
              <div className="text-blue-100 font-medium">Tasks Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 tracking-tight">99.9%</div>
              <div className="text-blue-100 font-medium">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;