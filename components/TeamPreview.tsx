'use client'

import styles from './ActivityPreview.module.css'
import DeepLinkButton from './DeepLinkButton'

interface Team {
  id: string
  name: string
  description?: string
  logo_url?: string
  banner_url?: string
  is_public: boolean
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
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.centerLogo}>
          {team.logo_url ? (
            <img
              src={team.logo_url}
              alt={`${team.name} logo`}
              className={styles.logoImage}
            />
          ) : (
            <div className={styles.logoFallback}>
              {team.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <h1 className={styles.title} style={{ textAlign: 'center' }}>{team.name}</h1>

        {team.description && (
          <p className={styles.description}>{team.description}</p>
        )}

        <div className={styles.details}>
          <div className={styles.detailRow}>
            <span className={styles.icon}>✨</span>
            <span className={styles.detailText}>
              Active community with {memberCount} member{memberCount !== 1 ? 's' : ''}
            </span>
          </div>

          <div className={styles.detailRow}>
            <span className={styles.icon}>🔒</span>
            <span className={styles.detailText}>
              {team.is_public ? 'Public Team' : 'Private Team'}
            </span>
          </div>

          {admins.length > 0 && (
            <div className={styles.detailRow}>
              <span className={styles.icon}>👤</span>
              <span className={styles.detailText}>
                Admin: {admins[0].profiles.first_name} {admins[0].profiles.last_name || ''}
              </span>
            </div>
          )}
        </div>

        <div className={styles.actionButton}>
          <DeepLinkButton
            type="team"
            id={team.id}
            title={team.name}
          />
        </div>
      </div>
    </div>
  )
}