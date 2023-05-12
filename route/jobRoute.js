import express from 'express'
import { createJobController, getAllJobController,updateJobController,deleteJobController } from '../controllers/jobController.js'

const route = express.Router()

route.post('/create-job', createJobController)

route.get('/get-jobs', getAllJobController)


// whenever we are updating or deleting we pass the id from the database and as this id is dynamic in nature- we define it with a colon(:) id
route.patch('/update-jobs/:id', updateJobController )
route.delete('/delete-job/:id', deleteJobController)

export default route
