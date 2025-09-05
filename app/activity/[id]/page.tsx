import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import ActivityPreview from '@/components/ActivityPreview'

interface Props {
  params: { id: string }
}

async function getActivity(id: string) {
  // Simplified query for testing - just get basic activity data
  const { data: activity, error } = await supabase
    .from('activities')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !activity) {
    console.log('Activity query error:', error)
    return null
  }

  console.log('Activity found:', activity)
  return activity
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function ActivityPage({ params }: Props) {
  const { id } = await params
  const activity = await getActivity(id)

  if (!activity) {
    notFound()
  }

  return <ActivityPreview activity={activity} />
}