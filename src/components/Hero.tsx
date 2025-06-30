import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%2364B5F6%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-medium tracking-wide">
            Zyra is your voice-first personal AI agent that remembers, organizes, and executes — 
            just like a real assistant, but always available.
          </p>
          
          {/* Tagline */}
          <div className="mb-12">
            <p className="text-lg text-blue-300 font-semibold tracking-wide">
              "Say it once. Zyra remembers forever."
            </p>
            <p className="text-sm text-gray-400 mt-2 font-medium tracking-wider">
              Voice-powered • Memory-enabled • Action-ready
            </p>
          </div>
          
          {/* CTA Button - Same style as Login button */}
          <div className="flex justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-blue-600/30 to-cyan-600/30 hover:from-blue-600/50 hover:to-cyan-600/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 tracking-wide">
              Try Zyra Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
          {/* Enhanced Animated Brain Image */}
          <div className="relative max-w-2xl mx-auto mb-16">
            <div className="relative brain-container">
              <img 
                src="/public/MW-HO155_brain_ZH_20190725114321 copy.png" 
                alt="AI Brain Network" 
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
              />
              
              {/* Electric pulse overlays */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                {/* Electric rays radiating from center */}
                <div className="electric-rays">
                  <div className="electric-ray ray-1"></div>
                  <div className="electric-ray ray-2"></div>
                  <div className="electric-ray ray-3"></div>
                  <div className="electric-ray ray-4"></div>
                  <div className="electric-ray ray-5"></div>
                  <div className="electric-ray ray-6"></div>
                  <div className="electric-ray ray-7"></div>
                  <div className="electric-ray ray-8"></div>
                  <div className="electric-ray ray-9"></div>
                  <div className="electric-ray ray-10"></div>
                  <div className="electric-ray ray-11"></div>
                  <div className="electric-ray ray-12"></div>
                </div>
                
                {/* Enhanced pulse rings */}
                <div className="pulse-ring pulse-ring-1"></div>
                <div className="pulse-ring pulse-ring-2"></div>
                <div className="pulse-ring pulse-ring-3"></div>
                
                {/* Enhanced electric sparks */}
                <div className="electric-spark spark-1"></div>
                <div className="electric-spark spark-2"></div>
                <div className="electric-spark spark-3"></div>
                <div className="electric-spark spark-4"></div>
                <div className="electric-spark spark-5"></div>
                <div className="electric-spark spark-6"></div>
                <div className="electric-spark spark-7"></div>
                <div className="electric-spark spark-8"></div>
                
                {/* Central energy core */}
                <div className="energy-core"></div>
                
                {/* Enhanced neural pathways */}
                <svg className="absolute inset-0 w-full h-full neural-pathways" viewBox="0 0 400 300">
                  <path className="neural-path path-1" d="M50,150 Q200,50 350,150" stroke="url(#gradient1)" fill="none" />
                  <path className="neural-path path-2" d="M100,80 Q200,150 300,220" stroke="url(#gradient2)" fill="none" />
                  <path className="neural-path path-3" d="M80,200 Q200,100 320,180" stroke="url(#gradient3)" fill="none" />
                  <path className="neural-path path-4" d="M120,50 Q200,200 280,250" stroke="url(#gradient1)" fill="none" />
                  <path className="neural-path path-5" d="M60,120 Q200,180 340,120" stroke="url(#gradient2)" fill="none" />
                  <path className="neural-path path-6" d="M90,250 Q200,80 310,150" stroke="url(#gradient3)" fill="none" />
                  
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
                      <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Chat Interface Visual - Updated with new image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <img 
                src="/public/snip.png" 
                alt="Zyra Chat Interface" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;