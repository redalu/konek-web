'use client'

import styles from './ActivityPreview.module.css'
import DeepLinkButton from './DeepLinkButton'

interface Activity {
  id: string
  title: string
  description?: string
  location?: string
  poi_name?: string
  address_full?: string
  start_time: string
  end_time?: string
  banner_url?: string
  banner_image_url?: string
  max_participants?: number
  participant_count?: number
  skill_level?: string
  visibility?: string
  organizer?: {
    first_name: string
    last_name?: string
    avatar_url?: string
  }
  activity_type?: {
    name: string
  }
  group?: {
    id: string
    name: string
    logo_url?: string
  }
}

interface Props {
  activity: Activity
}

export default function ActivityPreview({ activity }: Props) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  }

  const creatorName = activity.organizer
    ? `${activity.organizer.first_name} ${activity.organizer.last_name || ''}`.trim()
    : 'Unknown'
  const organizerName = activity.group?.name || creatorName
  const participantCount = activity.participant_count || 0

  return (
    <div className={styles.card}>
      {activity.banner_url && (
        <div className={styles.bannerContainer}>
          <img
            src={activity.banner_url}
            alt={activity.title}
            className={styles.banner}
          />
        </div>
      )}

      <div className={styles.content}>
        <h1 className={styles.title}>{activity.title}</h1>
        
        {activity.description && (
          <p className={styles.description}>{activity.description}</p>
        )}

        <div className={styles.details}>
          <div className={styles.detailRow}>
            <span className={styles.icon}>📅</span>
            <span className={styles.detailText}>{formatDate(activity.start_time)}</span>
          </div>

          {(activity.poi_name || activity.location || activity.address_full) && (
            <div className={styles.detailRow}>
              <span className={styles.icon}>📍</span>
              <div className={styles.detailText}>
                {activity.poi_name && (
                  <div style={{ fontWeight: '600', marginBottom: '2px' }}>
                    {activity.poi_name}
                  </div>
                )}
                {(activity.location || activity.address_full) && (
                  <div>
                    {activity.location || activity.address_full}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className={styles.detailRow}>
            <span className={styles.icon}>👤</span>
            <span className={styles.detailText}>{organizerName}</span>
          </div>

          {activity.activity_type && (
            <div className={styles.detailRow}>
              <span className={styles.icon}>🏃</span>
              <span className={styles.detailText}>{activity.activity_type.name}</span>
            </div>
          )}

          <div className={styles.detailRow}>
            <span className={styles.icon}>👥</span>
            <span className={styles.detailText}>
              {participantCount > 0 ? `${participantCount} participant${participantCount > 1 ? 's' : ''}` : 'No participants yet'}
            </span>
          </div>
        </div>

        <div className={styles.actionButton}>
          <DeepLinkButton 
            type="activity" 
            id={activity.id} 
            title={activity.title}
          />
        </div>
      </div>
    </div>
  )
}