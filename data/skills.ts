/**
 * Skills and experience data based on Will Lam's LinkedIn profile.
 * @see https://www.linkedin.com/in/willlamwunyin/
 */

export interface SkillItem {
  name: string
  level: number /** 0–100, used for bar width */
}

export interface SkillCategory {
  key: 'mobile' | 'ai' | 'web' | 'tools'
  title: string
  items: SkillItem[]
}

/** Skill categories with levels (0–100) for dashboard bars */
export const skillCategories: SkillCategory[] = [
  {
    key: 'mobile',
    title: 'Mobile development',
    items: [
      { name: 'React Native', level: 92 },
      { name: 'Swift / iOS', level: 88 },
      { name: 'Kotlin / Android', level: 85 },
      { name: 'Flutter', level: 75 },
    ],
  },
  {
    key: 'ai',
    title: 'AI & computer vision',
    items: [
      { name: 'Computer vision (on-device)', level: 88 },
      { name: 'Machine learning', level: 75 },
      { name: 'Python', level: 82 },
    ],
  },
  {
    key: 'web',
    title: 'Web & backend',
    items: [
      { name: 'React / React.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Laravel', level: 70 },
    ],
  },
  {
    key: 'tools',
    title: 'Tools & practices',
    items: [
      { name: 'Git & version control', level: 90 },
      { name: 'Jira & Scrum', level: 85 },
      { name: 'DevOps / deployment', level: 78 },
      { name: 'MVVM / OOP', level: 88 },
    ],
  },
]

export interface LanguageItem {
  name: string
  nameKey: 'english' | 'cantonese' | 'mandarin'
  proficiency: string
  proficiencyKey: 'fullProfessional' | 'native'
  level: number
}

export const languages: LanguageItem[] = [
  { name: 'English', nameKey: 'english', proficiency: 'Full professional', proficiencyKey: 'fullProfessional', level: 90 },
  { name: 'Cantonese', nameKey: 'cantonese', proficiency: 'Native', proficiencyKey: 'native', level: 100 },
  { name: 'Mandarin', nameKey: 'mandarin', proficiency: 'Full professional', proficiencyKey: 'fullProfessional', level: 88 },
]

export interface ExperienceItem {
  role: string
  company: string
  period: string
  duration?: string
}

export const experience: ExperienceItem[] = [
  { role: 'Mobile App Developer', company: 'BroadLearning Education (Asia)', period: 'Oct 2024 – Present', duration: '1+ year' },
  { role: 'Senior Software Engineer', company: 'ReMobility', period: 'Jan 2022 – Jul 2024', duration: '2.5 years' },
  { role: 'Software Engineer', company: 'ReMobility', period: 'Jun 2021 – Dec 2022', duration: '1.5 years' },
  { role: 'Assistant Product Manager', company: 'allblo', period: 'Jan 2020 – Jun 2020', duration: '6 months' },
  { role: 'Software Developer', company: 'Application Technology Ltd', period: 'Jun 2019 – Dec 2019', duration: '6 months' },
]

export const stats = {
  yearsExperience: 5,
  education: ['BEng Computer Engineering, HKU (2021)', 'MSc Computer Science, HKU (2024)'],
}
