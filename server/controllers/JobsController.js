import { response } from "express";
import { jobsService } from "../services/JobsService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";




export class JobsController extends BaseController {

    constructor() {
        super('api/jobs')
        this.router
            .get('', this.getAllJobs)
            .post('', this.createJob)
            .delete('/:name', this.deleteJob)
    }

    async getAllJobs(req, res, next) {
        try {
            let jobs = await jobsService.getJobs()
            return res.send(jobs)
        } catch (error) {
            next(error)
        }
    }

    async createJob(req, res, next) {
        try {
            let job = await jobsService.createJob(req.body)
            return res.send(job)
        } catch (error) {
            next(error)
        }
    }

    async deleteJob(req, res, next) {
        try {
            logger.log(req.params.name)
            let message = await jobsService.deleteJob(req.params.name)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}