'use client'

import { useState } from 'react'
import type { Project } from '@/data/projects'
import ProjectList from './ProjectList'
import ProjectDetailModal from './ProjectDetailModal'

type Props = {
  projects: Project[]
}

export default function ProjectListWithModal({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <ProjectList
        projects={projects}
        onProjectClick={(project) => setSelectedProject(project)}
      />
      <ProjectDetailModal
        project={selectedProject}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
