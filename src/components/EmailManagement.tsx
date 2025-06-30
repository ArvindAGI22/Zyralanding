import React from 'react';
import { Mail } from 'lucide-react';

const EmailManagement = () => {
  return (
    <div className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl">📧</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Email Management
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-8 tracking-wide">
              Inbox, meet intelligence.
            </h3>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-medium">
              Zyra reads, summarizes, drafts, and sends emails with natural voice commands — 
              making inbox zero easier than ever.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                <p className="text-gray-300 font-medium">Smart email summarization and prioritization</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                <p className="text-gray-300 font-medium">Voice-powered email composition and replies</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                <p className="text-gray-300 font-medium">Automatic follow-up reminders and scheduling</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Email Interface Image */}
          <div className="relative">
            <div className="relative max-w-2xl mx-auto">
              <img 
                src="/public/Screenshot 2025-06-30 141229.png" 
                alt="Email Management Interface" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-800"
              />
              
              {/* Floating elements for visual enhancement */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailManagement;