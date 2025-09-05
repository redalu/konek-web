import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import TeamPreview from '@/components/TeamPreview'

interface Props {
  params: { id: string }
}

async function getTeam(id: string) {
  const { data: team, error } = await supabase
    .from('groups')
    .select(`
      *,
      group_members (
        user_id,
        role,
        profiles (
          id,
          first_name,
          last_name,
          avatar_url
        )
      ),
      activity_types (
        name
      )
    `)
    .eq('id', id)
    .single()

  if (error || !team) {
    return null
  }

  return team
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const team = await getTeam(id)
  
  if (!team) {
    return {
      title: 'Team Not Found - Konek',
    }
  }

  const title = `${team.name} - Konek`
  const description = team.description || `Join ${team.name} on Konek`
  const imageUrl = team.logo_url || '/og-image.png'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://konek.app/team/${id}`,
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

export default async function TeamPage({ params }: Props) {
  const { id } = await params
  const team = await getTeam(id)

  if (!team) {
    notFound()
  }

  return <TeamPreview team={team} />
}