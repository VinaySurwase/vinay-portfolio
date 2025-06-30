import React from "react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Maintenance Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto bg-gray-700 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-300"
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

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-gray-400 mb-8 leading-relaxed">
          We&apos;re currently performing scheduled maintenance to improve your experience. 
          We&apos;ll be back online shortly.
        </p>

        {/* Contact */}
        <div className="space-y-4">
          <p className="text-gray-500 text-sm">
            For urgent matters, please contact:
          </p>
          <a
            href="mailto:vinaydsurwase@gmail.com"
            className="inline-block px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Send Email
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-600 text-xs">
          Thank you for your patience
        </div>
      </div>
    </div>
  );
}
