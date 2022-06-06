
let fakeJobs = {
    Jobs: [
        { name: 'Tyler', title: 'Software Developer', Years: 1 },
        { name: 'David', title: 'Land Surveyor', Years: 6 }

    ]
}


class JobsService {

    async getJobs() {
        return fakeJobs.Jobs
    }

    createJob(jobData) {
        fakeJobs.Jobs.push(jobData)
        return jobData
    }

    async deleteJob(name) {
        fakeJobs.Jobs = fakeJobs.Jobs.filter(j => j.name != name)
        return 'You have been Promoted!'
    }

}





export const jobsService = new JobsService()