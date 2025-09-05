'use client'

import Image from 'next/image'
import DeepLinkButton from './DeepLinkButton'
import AppDownloadBanner from './AppDownloadBanner'

interface Team {
  id: string
  name: string
  description?: string
  logo_url?: string
  banner_url?: string
  is_public: boolean
  activity_types?: {
    name: string
  }
  group_members?: Array<{
    user_id: string
    role: string
    profiles: {
      id: string
      first_name: string
      last_name?: string
      avatar_url?: string
    }
  }>
}

interface Props {
  team: Team
}

export default function TeamPreview({ team }: Props) {
  const memberCount = team.group_members?.length || 0
  const admins = team.group_members?.filter(m => m.role === 'admin') || []
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500">
        {team.banner_url && (
          <Image
            src={team.banner_url}
            alt={team.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Team Logo */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          {team.logo_url ? (
            <Image
              src={team.logo_url}
              alt={team.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-lg"
            />
          ) : (
            <div className="w-30 h-30 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-4xl">
                {team.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Team Name and Type */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {team.name}
              </h1>
              {team.activity_types && (
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  {team.activity_types.name}
                </span>
              )}
            </div>

            {/* Description */}
            {team.description && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">About this team</h2>
                <p className="text-gray-600 whitespace-pre-wrap">{team.description}</p>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">{memberCount}</p>
                <p className="text-sm text-gray-600">Members</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {team.is_public ? 'Public' : 'Private'}
                </p>
                <p className="text-sm text-gray-600">Team Type</p>
              </div>
            </div>

            {/* Team Admins */}
            {admins.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Team Admins</h2>
                <div className="space-y-3">
                  {admins.map((admin) => (
                    <div key={admin.user_id} className="flex items-center">
                      {admin.profiles.avatar_url ? (
                        <Image
                          src={admin.profiles.avatar_url}
                          alt={admin.profiles.first_name}
                          width={40}
                          height={40}
                          className="rounded-full mr-3"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mr-3 flex items-center justify-center">
                          <span className="text-white font-bold">
                            {admin.profiles.first_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-gray-900">
                          {admin.profiles.first_name} {admin.profiles.last_name || ''}
                        </p>
                        <p className="text-sm text-gray-500">Admin</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Members Preview */}
            {memberCount > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Team Members ({memberCount})
                </h2>
                <div className="flex -space-x-2">
                  {team.group_members?.slice(0, 10).map((member) => (
                    <div
                      key={member.user_id}
                      className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center"
                      title={`${member.profiles.first_name} ${member.profiles.last_name || ''}`}
                    >
                      {member.profiles.avatar_url ? (
                        <Image
                          src={member.profiles.avatar_url}
                          alt={member.profiles.first_name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      ) : (
                        <span className="text-sm font-medium text-gray-600">
                          {member.profiles.first_name.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                  ))}
                  {memberCount > 10 && (
                    <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">+{memberCount - 10}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-4">
              <DeepLinkButton 
                type="team" 
                id={team.id}
                title={team.name}
              />
              <AppDownloadBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}