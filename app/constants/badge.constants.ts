import { CvSkillsLevel } from '@/types'

export const SkillLevelColor = {
  [CvSkillsLevel.BEGINNER]: 'neutral',
  [CvSkillsLevel.INTERMEDIATE]: 'info',
  [CvSkillsLevel.ADVANCED]: 'primary',
  [CvSkillsLevel.EXPERT]: 'success'
} as const satisfies Record<CvSkillsLevel, string>
