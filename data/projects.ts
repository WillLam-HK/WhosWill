export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  youtubeUrl?: string
  externalUrl?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A mobile app built with React Native. Delivers core features with a modern stack and fast iteration.',
    technologies: ['React Native', 'TypeScript'],
    githubUrl: 'https://github.com',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Native iOS app showcasing Swift and clean architecture. Shipped in a short timeframe.',
    technologies: ['Swift', 'iOS'],
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'Android app built with Kotlin. Demonstrates cross-platform thinking and performance focus.',
    technologies: ['Kotlin', 'Android'],
    githubUrl: 'https://github.com',
  },
  {
    id: '4',
    title: 'Project Four',
    description: 'Full-stack feature with AI-assisted development. Highlights ability to ship quickly with modern tools.',
    technologies: ['React Native', 'AI-assisted coding'],
    youtubeUrl: 'https://youtube.com',
  },
]
