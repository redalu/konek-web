'use client'

import { useState } from 'react'

interface Props {
  type: 'activity' | 'team' | 'profile'
  id: string
  title: string
}

type Platform = 'ios' | 'android' | 'web'

function detectPlatform(): Platform {
  if (typeof window === 'undefined') return 'web'
  
  const userAgent = window.navigator.userAgent.toLowerCase()
  
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios'
  } else if (/android/.test(userAgent)) {
    return 'android'
  }
  
  return 'web'
}

export default function DeepLinkButton({ type, id, title }: Props) {
  const [attemptedOpen, setAttemptedOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [platform] = useState<Platform>(() => detectPlatform())
  
  const getStoreUrl = (platform: Platform) => {
    // URLs à configurer selon vos besoins
    const urls = {
      ios: {
        appStore: 'https://apps.apple.com/app/konek/id123456789', // Remplacer par votre ID App Store
        testFlight: 'https://testflight.apple.com/join/YOUR_TESTFLIGHT_CODE' // Remplacer par votre code TestFlight
      },
      android: {
        playStore: 'https://play.google.com/store/apps/details?id=com.konek.mobileapp', // Remplacer par votre package name
        apkDirect: 'https://github.com/yourorg/konek-mobile/releases/latest/download/konek.apk' // Remplacer par votre lien APK
      },
      web: {
        expo: 'https://expo.dev/@yourorg/konek', // Remplacer par votre projet Expo
        download: 'https://konek.app/download' // Page de téléchargement personnalisée
      }
    }
    
    switch (platform) {
      case 'ios':
        return urls.ios.testFlight // Utiliser testFlight pour la beta, appStore pour la version finale
      case 'android':
        return urls.android.apkDirect // Utiliser playStore pour la version finale, apkDirect pour la beta
      case 'web':
        return urls.web.download
      default:
        return urls.web.download
    }
  }

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
        // Si l'app ne s'ouvre pas, rediriger vers le store approprié
        const storeUrl = getStoreUrl(platform)
        window.open(storeUrl, '_blank')
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
        <div className="mt-6 p-6 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl shadow-lg animate-fade-in">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-emerald-800 mb-2">
                {platform === 'ios' ? 'Redirected to TestFlight' : 
                 platform === 'android' ? 'Redirected to Download' :
                 'Redirected to Download Page'}
              </p>
              <p className="text-emerald-700 text-sm leading-relaxed">
                {platform === 'ios' ? 'Install Konek from TestFlight to join' : 
                 platform === 'android' ? 'Download and install the APK to join' :
                 'Follow the instructions to install Konek and join'} <strong>"{title}"</strong>!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}