import { Request, Response } from 'express'
import { JobType } from 'reedsy-types'
import { getGroupedJobs } from '@/services/jobs'

const getJobs = (request: Request, response: Response, type: JobType) => {
  const groupedJobs = getGroupedJobs(type)

  if (!groupedJobs) {
    return response.status(404).json({ error: 'No jobs found' })
  }

  response.status(200).json(groupedJobs)
}

export const getExports = (request: Request, response: Response) =>
  getJobs(request, response, JobType.EXPORT)

export const getImports = (request: Request, response: Response) =>
  getJobs(request, response, JobType.IMPORT)
