"use client";

import React from "react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Night Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 70}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Water Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-800 to-blue-700 opacity-80">
        {/* Water ripples */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-blue-300 rounded-full opacity-30 animate-ping"
              style={{
                left: `${20 + i * 15}%`,
                bottom: `${10 + Math.random() * 20}px`,
                width: `${50 + i * 20}px`,
                height: `${50 + i * 20}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Water reflection shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-10 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* Settings Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          {/* Title with night theme */}
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Under{" "}
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Maintenance
            </span>
          </h1>

          {/* Description */}
          <p className="text-blue-100 mb-8 leading-relaxed drop-shadow-md">
            Like the calm waters under the moonlight, we&apos;re quietly working to enhance your experience. 
            We&apos;ll be back online shortly.
          </p>

          {/* Contact with water theme */}
          <div className="space-y-4">
            <p className="text-blue-200 text-sm">
              For urgent matters, please contact:
            </p>
            <a
              href="mailto:vinaydsurwase@gmail.com"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Send Email
            </a>
          </div>

          {/* Footer with water metaphor */}
          <div className="mt-12 text-blue-300 text-sm drop-shadow-md">
            Like ripples on water, good things take time • Thank you for your patience
          </div>
        </div>
      </div>

      {/* Floating water drops */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
