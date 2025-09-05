'use client'

import Image from 'next/image'
import DeepLinkButton from './DeepLinkButton'
import AppDownloadBanner from './AppDownloadBanner'

interface Profile {
  id: string
  first_name: string
  last_name?: string
  bio?: string
  avatar_url?: string
  banner_url?: string
  city?: string
  country?: string
  activities_created?: Array<{
    id: string
    title: string
  }>
}

interface Props {
  profile: Profile
}

export default function ProfilePreview({ profile }: Props) {
  const fullName = `${profile.first_name} ${profile.last_name || ''}`.trim()
  const location = [profile.city, profile.country].filter(Boolean).join(', ')
  const activitiesCount = profile.activities_created?.length || 0
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-green-400 to-blue-500">
        {profile.banner_url && (
          <Image
            src={profile.banner_url}
            alt={fullName}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Profile Avatar */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          {profile.avatar_url ? (
            <Image
              src={profile.avatar_url}
              alt={fullName}
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-lg"
            />
          ) : (
            <div className="w-30 h-30 bg-gradient-to-br from-green-500 to-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-4xl">
                {profile.first_name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Name and Location */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {fullName}
              </h1>
              {location && (
                <div className="flex items-center justify-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location}</span>
                </div>
              )}
            </div>

            {/* Bio */}
            {profile.bio && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
                <p className="text-gray-600 whitespace-pre-wrap">{profile.bio}</p>
              </div>
            )}

            {/* Stats */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">{activitiesCount}</p>
                <p className="text-sm text-gray-600">Activities Organized</p>
              </div>
            </div>

            {/* Recent Activities */}
            {activitiesCount > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Recent Activities</h2>
                <div className="space-y-2">
                  {profile.activities_created?.slice(0, 5).map((activity) => (
                    <div key={activity.id} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-900">{activity.title}</p>
                    </div>
                  ))}
                  {activitiesCount > 5 && (
                    <p className="text-sm text-gray-500 text-center pt-2">
                      And {activitiesCount - 5} more activities...
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-4">
              <DeepLinkButton 
                type="profile" 
                id={profile.id}
                title={fullName}
              />
              <AppDownloadBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}