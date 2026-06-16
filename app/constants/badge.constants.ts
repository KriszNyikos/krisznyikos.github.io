import { CvSkillCategory, CvSkillsLevel } from '@/types'

export const SkillCategoryVariant = {
  [CvSkillCategory.FRONTEND]: 'soft',
  [CvSkillCategory.BACKEND]: 'subtle',
  [CvSkillCategory.DATABASE]: 'solid',
  [CvSkillCategory.DEVOPS]: 'soft',
  [CvSkillCategory.MOBILE]: 'subtle',
  [CvSkillCategory.DESIGN]: 'solid',
  [CvSkillCategory.OTHER]: 'soft'
} as const satisfies Record<CvSkillCategory, string>

export const SkillLevelVariant = {
  [CvSkillsLevel.BEGINNER]: 'soft',
  [CvSkillsLevel.INTERMEDIATE]: 'subtle',
  [CvSkillsLevel.ADVANCED]: 'solid',
  [CvSkillsLevel.EXPERT]: 'solid'
} as const satisfies Record<CvSkillsLevel, string>
