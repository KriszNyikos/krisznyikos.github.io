import { CvSkillCategory, CvSkillsLevel } from '@/types'

export const SkillCategoryColor = {
  [CvSkillCategory.FRONTEND]: 'primary',
  [CvSkillCategory.BACKEND]: 'secondary',
  [CvSkillCategory.DATABASE]: 'success',
  [CvSkillCategory.DEVOPS]: 'info',
  [CvSkillCategory.MOBILE]: 'warning',
  [CvSkillCategory.DESIGN]: 'error',
  [CvSkillCategory.OTHER]: 'neutral'
} as const satisfies Record<CvSkillCategory, string>

export const SkillLevelColor = {
  [CvSkillsLevel.BEGINNER]: 'neutral',
  [CvSkillsLevel.INTERMEDIATE]: 'info',
  [CvSkillsLevel.ADVANCED]: 'primary',
  [CvSkillsLevel.EXPERT]: 'success'
} as const satisfies Record<CvSkillsLevel, string>
