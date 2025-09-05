import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import ProfilePreview from '@/components/ProfilePreview'

interface Props {
  params: { id: string }
}

async function getProfile(id: string) {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select(`
      *,
      activities_created:activities!created_by (
        id,
        title
      )
    `)
    .eq('id', id)
    .single()

  if (error || !profile) {
    return null
  }

  return profile
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const profile = await getProfile(id)
  
  if (!profile) {
    return {
      title: 'Profile Not Found - Konek',
    }
  }

  const fullName = `${profile.first_name} ${profile.last_name || ''}`.trim()
  const title = `${fullName} - Konek`
  const description = profile.bio || `Connect with ${fullName} on Konek`
  const imageUrl = profile.avatar_url || '/og-image.png'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://konek.app/profile/${id}`,
      images: [imageUrl],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function ProfilePage({ params }: Props) {
  const { id } = await params
  const profile = await getProfile(id)

  if (!profile) {
    notFound()
  }

  return <ProfilePreview profile={profile} />
}