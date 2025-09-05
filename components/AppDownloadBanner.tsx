'use client'

import { useState } from 'react'

export default function AppDownloadBanner() {
  const [showInstructions, setShowInstructions] = useState(false)
  
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-xl text-gray-900 flex items-center">
          <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-indigo-500 rounded-full mr-3"></div>
          Get the Konek App
        </h3>
      </div>
      
      <div className="space-y-4">
        {/* Platform buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="group bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 rounded-2xl p-4 border border-blue-200/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-blue-800">iOS TestFlight</p>
                <p className="text-blue-600 text-sm">Beta for iPhone</p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-r from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 rounded-2xl p-4 border border-green-200/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.34c-.5 0-.96-.29-1.17-.75l-1.12-2.38c-.18-.39-.32-.51-.58-.51s-.4.12-.58.51l-1.12 2.38c-.21.46-.67.75-1.17.75-.91 0-1.52-.84-1.26-1.68l2.62-8.52c.35-1.15 1.41-1.95 2.6-1.95s2.25.8 2.6 1.95l2.62 8.52c.26.84-.35 1.68-1.26 1.68zm-10.9.01c-.67 0-1.22-.55-1.22-1.22V9.88c0-.67.55-1.22 1.22-1.22s1.22.55 1.22 1.22v4.21c0 .67-.55 1.22-1.22 1.22z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-green-800">Android APK</p>
                <p className="text-green-600 text-sm">Direct download</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions toggle */}
        <button
          onClick={() => setShowInstructions(!showInstructions)}
          className="w-full bg-white/80 backdrop-blur-sm border border-gray-200 py-4 px-6 rounded-2xl font-semibold text-gray-700 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-between group"
        >
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Installation Instructions
          </span>
          <svg 
            className={`w-5 h-5 transform transition-all duration-300 group-hover:scale-110 ${showInstructions ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {showInstructions && (
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 space-y-6 animate-fade-in shadow-lg">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                iOS (TestFlight)
              </h4>
              <div className="bg-blue-50/50 rounded-xl p-4 ml-11">
                <ol className="text-sm text-blue-800 space-y-2 font-medium">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 bg-blue-200 text-blue-800 rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                    Install TestFlight from the App Store
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 bg-blue-200 text-blue-800 rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                    Request access from the Konek team
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 bg-blue-200 text-blue-800 rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                    Open the TestFlight invitation link
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 bg-blue-200 text-blue-800 rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                    Install Konek from TestFlight
                  </li>
                </ol>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 15.34c-.5 0-.96-.29-1.17-.75l-1.12-2.38c-.18-.39-.32-.51-.58-.51s-.4.12-.58.51l-1.12 2.38c-.21.46-.67.75-1.17.75-.91 0-1.52-.84-1.26-1.68l2.62-8.52c.35-1.15 1.41-1.95 2.6-1.95s2.25.8 2.6 1.95l2.62 8.52c.26.84-.35 1.68-1.26 1.68zm-10.9.01c-.67 0-1.22-.55-1.22-1.22V9.88c0-.67.55-1.22 1.22-1.22s1.22.55 1.22 1.22v4.21c0 .67-.55 1.22-1.22 1.22z"/>
                  </svg>
                </div>
                Android (APK)
              </h4>
              <div className="bg-green-50/50 rounded-xl p-4 ml-11">
                <ol className="text-sm text-green-800 space-y-2 font-medium">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 bg-green-200 text-green-800 rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                    Enable "Install from Unknown Sources"
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 bg-green-200 text-green-800 rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                    Request the APK link from Konek team
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 bg-green-200 text-green-800 rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                    Download the APK file
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 bg-green-200 text-green-800 rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                    Open the APK to install Konek
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-indigo-800 mb-1">Beta Testing Phase</p>
                  <p className="text-indigo-700 text-sm leading-relaxed">
                    Konek is currently in testing. Contact our team for beta access and installation support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}