'use client'

import { useState } from 'react'
import type { Project } from '@/data/projects'
import type { Messages } from '@/lib/i18n'
import ProjectList from './ProjectList'
import ProjectDetailModal from './ProjectDetailModal'

type Props = {
  projects: Project[]
  common: Messages['common']
}

export default function ProjectListWithModal({ projects, common }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <ProjectList
        projects={projects}
        onProjectClick={(project) => setSelectedProject(project)}
        common={common}
      />
      <ProjectDetailModal
        project={selectedProject}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        common={common}
      />
    </>
  )
}
