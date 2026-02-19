'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import type { Project } from '@/data/projects'

type Props = {
  project: Project | null
  open: boolean
  onClose: () => void
}

export default function ProjectDetailModal({ project, open, onClose }: Props) {
  if (!project) return null

  const hasImages = project.images && project.images.length > 0
  const hasFeatures = project.features && project.features.length > 0
  const hasAwards = project.awards && project.awards.length > 0

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50" transition>
      <div
        className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm transition duration-300 ease-out data-[closed]:opacity-0"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <DialogPanel
          transition
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-cardHover border border-neutral-200/90 transition duration-300 ease-out data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:translate-y-4"
          aria-labelledby="project-modal-title"
        >
          {/* Images */}
          {hasImages && (
            <div className="rounded-t-2xl overflow-hidden bg-neutral-100">
              {project.images!.length === 1 ? (
                <div className="aspect-video w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.images![0]}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="flex gap-2 p-3 overflow-x-auto">
                  {project.images!.map((src, i) => (
                    <div key={i} className="relative shrink-0 w-48 aspect-video rounded-lg overflow-hidden bg-neutral-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="p-6 md:p-8">
            <DialogTitle
              id="project-modal-title"
              className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2"
            >
              {project.title}
            </DialogTitle>
            <p className="text-neutral-600 text-base leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded transition-colors duration-200 hover:bg-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            {hasFeatures && (
              <section className="mb-6" aria-labelledby={`project-${project.id}-features`}>
                <h3 id={`project-${project.id}-features`} className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                  Features
                </h3>
                <ul className="space-y-2">
                  {project.features!.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-600 text-sm">
                      <span className="text-primary shrink-0 mt-0.5" aria-hidden>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Awards */}
            {hasAwards && (
              <section className="mb-6" aria-labelledby={`project-${project.id}-awards`}>
                <h3 id={`project-${project.id}-awards`} className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                  Awards & recognition
                </h3>
                <ul className="space-y-2">
                  {project.awards!.map((award, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral-600 text-sm">
                      <span className="text-amber-500 shrink-0 mt-0.5" aria-hidden>🏆</span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Links */}
            {(project.githubUrl || project.youtubeUrl || project.externalUrl) && (
              <div className="flex flex-wrap gap-4 mb-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline min-h-[44px] min-w-[44px] inline-flex items-center transition-colors duration-200"
                  >
                    GitHub
                  </a>
                )}
                {project.youtubeUrl && (
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline min-h-[44px] min-w-[44px] inline-flex items-center transition-colors duration-200"
                  >
                    Video
                  </a>
                )}
                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline min-h-[44px] min-w-[44px] inline-flex items-center transition-colors duration-200"
                  >
                    Visit project
                  </a>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] px-4 py-2 text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
