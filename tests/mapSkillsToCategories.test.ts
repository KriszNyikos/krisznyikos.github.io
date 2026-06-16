import mapSkillsToCategories from '../app/utils/mapSkillsToCategories'
import { CvSkillsLevel, CvSkillCategory } from '../app/types/enums'
import { describe, it, expect } from 'vitest'

const skills = [
  { name: 'Vue', level: CvSkillsLevel.EXPERT, category: CvSkillCategory.FRONTEND },
  { name: 'Node', level: CvSkillsLevel.ADVANCED, category: CvSkillCategory.BACKEND },
  { name: 'GraphQL', level: CvSkillsLevel.INTERMEDIATE }
]

describe('mapSkillsToCategories', () => {
  it('groups skills by category and places uncategorized under "uncategorized" key', () => {
    const grouped = mapSkillsToCategories(skills as unknown)

    expect(grouped[CvSkillCategory.FRONTEND].map(s => s.name)).toEqual(['Vue'])
    expect(grouped[CvSkillCategory.BACKEND].map(s => s.name)).toEqual(['Node'])
    expect((grouped as unknown)['uncategorized']).toBeDefined()
    expect((grouped as unknown)['uncategorized'].map((s: unknown) => s.name)).toEqual(['GraphQL'])
  })
})
