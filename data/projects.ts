export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  /** Image URLs or paths (e.g. /images/project-1.png or external URL). First image is used as card thumbnail. */
  images?: string[]
  /** Key features or highlights to display in the project detail view. */
  features?: string[]
  /** Awards, recognition, or press (e.g. "Gold Medal, Geneva 2024"). */
  awards?: string[]
  githubUrl?: string
  youtubeUrl?: string
  externalUrl?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'SmartRehab',
    description: 'A telerehabilitation mobile app that lets stroke survivors and other patients do guided exercises at home. Uses AI and computer vision for pose estimation to analyze motion accuracy and give real-time feedback. Includes 13 gross motor and 7 fine motor exercises, with a therapist portal for prescribing plans and monitoring progress and compliance.',
    technologies: ['Mobile (iOS/Android)', 'AI / Computer Vision', 'React Native', 'TypeScript'],
    // Use your own image: add file to public/images/ (e.g. smartrehab.png) and use images: ['/images/smartrehab.png']
    images: [
      'https://placehold.co/800x450/e0e7ff/4f46e5?text=SmartRehab',
    ],
    features: [
      '13 gross motor + 7 fine motor exercises with computer vision pose estimation',
      'Real-time feedback on exercise execution and motion accuracy',
      'Therapist portal for prescribing plans and monitoring progress & compliance',
      'Activity map and traffic-light system for completeness and compliance',
      'Home-based training — any time, any location; accessible on tablet and smartphone',
      'Designed for resource-limited settings where rehab services are scarce',
    ],
    awards: [
      'Gold Medal with Congratulations of the Jury — 49th Geneva International Exhibition of Inventions (2024)',
      'Supported by World Stroke Organization; feasibility trials in 7 countries',
    ],
    externalUrl: 'https://www.remobility.net/smartrehab',
  },
  {
    id: '2',
    title: 'Air Guitar',
    description: 'Motion-activated iOS app that uses the device’s motion sensors to detect air-guitar gestures and generate guitar sounds, so users can play music through hand and arm movements. Built by HKU Computer Engineering students for the China Collegiate Computing Contest.',
    technologies: ['Swift', 'iOS', 'Core Motion', 'Audio'],
    images: [
      'https://placehold.co/800x450/e0e7ff/4f46e5?text=Air+Guitar',
    ],
    features: [
      'Motion sensing via device sensors to detect air-guitar gestures',
      'Real-time guitar sound generation in response to gestures',
      'Play music through hand and arm movements without a physical instrument',
      'Built for Apple co-organized Mobile Application Innovation Contest',
    ],
    awards: [
      'First Class Award — China Collegiate Computing Contest, 3rd Mobile Application Innovation Contest (2018)',
      'Competition co-organized by Apple Inc. and Zhejiang University; 820+ teams, 591 submissions',
      'One of the first Hong Kong teams to win at this national contest',
    ],
    externalUrl: 'https://www.eee.hku.hk/ce-students-teams-won-in-the-mobile-application-innovation-contest-china-collegiate-computing-contest/',
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
