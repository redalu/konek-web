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
  const [isLoading, setIsLoading] = useState(false)
  const [platform] = useState<Platform>(() => detectPlatform())
  
  const getStoreUrl = (platform: Platform) => {
    const testFlightUrl = 'https://testflight.apple.com/join/xMTHB8p2'
    const androidExpoUrl = 'https://expo.dev/accounts/redalu/projects/bolt-expo-nativewind/builds/95c9d9f5-0045-4e1c-acd5-8ca9dea9b785'

    switch (platform) {
      case 'ios':
        return testFlightUrl
      case 'android':
        return androidExpoUrl
      case 'web':
        return testFlightUrl
      default:
        return testFlightUrl
    }
  }

  const handleOpenInApp = () => {
    setIsLoading(true)

    // Try to open the app with custom scheme
    // Use 'teams' for team type to match mobile app routing
    const pathType = type === 'team' ? 'teams' : type
    const deepLink = `com.konek.mobileapp://${pathType}/${id}`

    // Try to open the app
    window.location.href = deepLink

    // Fallback after a shorter delay if still on page
    setTimeout(() => {
      setIsLoading(false)
      if (document.hasFocus() || document.visibilityState === 'visible') {
        // Si l'app ne s'ouvre pas, rediriger vers TestFlight
        const storeUrl = getStoreUrl(platform)
        if (storeUrl) {
          window.location.href = storeUrl
        }
      }
    }, 750)
  }

  return (
    <>
      <button
        onClick={handleOpenInApp}
        disabled={isLoading}
        className="konek-button-content"
      >
        {!isLoading && (
          <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
        {isLoading ? "Opening..." : "Open in Konek"}
      </button>
      
    </>
  )
}