'use client'

import { useState } from 'react'

interface Props {
  type: 'activity' | 'team' | 'profile'
  id: string
  title: string
}

export default function DeepLinkButton({ type, id, title }: Props) {
  const [attemptedOpen, setAttemptedOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleOpenInApp = () => {
    setIsLoading(true)
    
    // Try to open the app with custom scheme
    const deepLink = `com.konek.mobileapp://${type}/${id}`
    
    // Create an iframe to attempt opening the app (works on some browsers)
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = deepLink
    document.body.appendChild(iframe)
    
    // Also try window.location for other browsers
    setTimeout(() => {
      window.location.href = deepLink
    }, 100)
    
    // Show fallback after a delay if still on page
    setTimeout(() => {
      setIsLoading(false)
      if (document.hasFocus() || document.visibilityState === 'visible') {
        setAttemptedOpen(true)
      }
      // Clean up iframe
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe)
      }
    }, 2500)
  }

  return (
    <>
      <button
        onClick={handleOpenInApp}
        disabled={isLoading}
        className="group w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-emerald-400 disabled:to-emerald-500 text-white py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl flex items-center justify-center relative overflow-hidden"
      >
        {/* Background shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        {isLoading ? (
          <>
            <svg className="w-6 h-6 mr-3 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            Opening Konek...
          </>
        ) : (
          <>
            <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in Konek App
          </>
        )}
      </button>
      
      {attemptedOpen && (
        <div className="mt-6 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl shadow-lg animate-fade-in">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-amber-800 mb-2">Don't have the app yet?</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                Download Konek to join <strong>"{title}"</strong> and connect with others in your community! 
                Available for iOS and Android.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}