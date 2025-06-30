import React from 'react';
import { Calendar } from 'lucide-react';

const SmartScheduling = () => {
  return (
    <div className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl">📅</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Smart Scheduling
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-green-400 mb-8 tracking-wide">
              Calendar chaos? Not anymore.
            </h3>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-medium">
              Zyra finds free slots, creates events, and handles last-minute changes 
              without you lifting a finger — making calendar management effortless.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-300 font-medium">Intelligent conflict detection and resolution</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-300 font-medium">Automatic meeting scheduling with participants</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-300 font-medium">Smart time zone coordination and reminders</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Calendar Interface Image */}
          <div className="relative">
            <div className="relative max-w-2xl mx-auto">
              <div className="bg-black rounded-2xl p-8">
                <img 
                  src="/Untitled design (1).png" 
                  alt="Smart Scheduling Interface" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-gray-800"
                />
              </div>
              
              {/* Floating elements for visual enhancement */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartScheduling;