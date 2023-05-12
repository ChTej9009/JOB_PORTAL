// mongoose.connect(process.env.MONGODB_URL)
// .then(()=> {
//     console.log('connected to MongoDB!')
// })


// We know when we fetch data from mongoDB , it will take some time and because javascript is single thread language , it will not wait for this part.But, we want to wait once connection is done then only we want to perform further action.
//so, We are using async await 
// try and catch is exception handling

// since we are not using the promise no need of .then
import mongoose from 'mongoose'

// converting it into arrow function and export it

const  connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL)
           
            console.log('connected to MongoDB!')
    }
    catch(error){
        console.log(`MongoDB Error: ${error}`)
    }

}

export default connectDB
// async function connectDB(){
//     try{
//         const conn = await mongoose.connect(process.env.MONGODB_URL)
           
//             console.log('connected to MongoDB!')
//     }
//     catch(error){
//         console.log(`MongoDB Error: ${error}`)
//     }

// }