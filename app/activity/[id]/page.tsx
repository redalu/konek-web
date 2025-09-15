import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import ActivityPreview from '@/components/ActivityPreview'

interface PageProps {
  params: Promise<{ id: string }>
}

async function getActivity(id: string) {
  // Get activity with organizer profile, activity type, group, and participant count
  const { data: activity, error } = await supabase
    .from('activities')
    .select(`
      *,
      organizer:profiles!activities_created_by_fkey (
        first_name,
        last_name,
        avatar_url
      ),
      activity_type:activity_types (
        name
      ),
      group:groups!activities_group_id_fkey (
        id,
        name,
        logo_url
      )
    `)
    .eq('id', id)
    .single()

  if (error || !activity) {
    console.log('Activity query error:', error)
    return null
  }

  // Get confirmed participant count separately
  const { count: participantCount } = await supabase
    .from('activity_participants')
    .select('*', { count: 'exact', head: true })
    .eq('activity_id', id)
    .eq('status', 'confirmed')

  // Add participant count to activity data
  const activityWithCount = {
    ...activity,
    participant_count: participantCount || 0
  }

  console.log('Activity found:', activityWithCount)
  return activityWithCount
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const activity = await getActivity(id)
  
  if (!activity) {
    return {
      title: 'Activity Not Found - Konek',
    }
  }

  const title = `${activity.title} - Konek`
  const description = activity.description || `Join ${activity.title} on Konek`
  const imageUrl = activity.banner_url || activity.banner_image_url || '/og-image.png'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://konek.app/activity/${id}`,
      images: [imageUrl],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function ActivityPage({ params }: PageProps) {
  const { id } = await params
  const activity = await getActivity(id)

  if (!activity) {
    notFound()
  }

  return <ActivityPreview activity={activity} />
}