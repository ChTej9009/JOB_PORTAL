import mongoose from "mongoose";
// import validator from "validator";

const jobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true, 'Comapany name is required']
    },
    position:{
        type:String,
        required:[true,'Job position is required'],
        maxlength: 100,
    },
    status:{
        type:String,
        enum:['pending','reject','interview'],
        default: 'pending',
    },
    workLocation:{
        type:String,
        default:"Hyderabad",
        required:[true, 'work location is required']
    },
    workType:{
        type:String,
        enum:['full-time','part-time','internship','contract'],
        default:'full-time',
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'user',
    },
    jobType:{
        type:String,
        default:'Development'
    }
},
{timestamps:true}
// with this we can show the time 
)

export default mongoose.model('Job', jobSchema)