import type { CvSkillCategory, CvContent } from '@/types'

export default function mapSkillsToCategories(
  skills: CvContent['skills']
): Record<CvSkillCategory, CvContent['skills']> {
  const acc = Object.create(null) as Record<CvSkillCategory, CvContent['skills']>

  for (const skill of skills) {
    const category = (skill.category ?? ('uncategorized' as unknown)) as CvSkillCategory
    acc[category] = acc[category] ?? []
    acc[category].push(skill)
  }

  return acc
}
