// to get the existing users info
import userModel from '../models/userModel.js'
import bcrypt from 'bcryptjs'
// import next from '../middleware/errorMiddleware.js'

export const registerController = async (req,res,next) =>{
    try{
        // As the request we will get the body value from front end-we are using destructuring
            const {name, email, password} = req.body
        
            // validate
            if(!name){
               next('name is required')
            //    As code sees the next here, it will go directly to the middleware
                }
        

            if(!email){
                next('please provide the email')
            }
        

            if(!password){
                next('please provide the password')
            }
        

            // check the stored data
            // here we are using the mongobg part

            // we are getting this issue when we are sending data
//   {
//   "success": true,
//   "message": "Email is already available"
// }
// To avoid this we are commenting the below code

            const existingUser = await userModel.findOne({email})
            if(existingUser){
                console.log(existingUser)
                return res.status(200).send({
                    success:true,
                    message:'Email is already available'
                })
            }

            // store the data
            const newUser = {
                // name: name,
                // email:email,
                // password:password
                // if key and values are same then acc to es6 syntax concept
                name:name,
                email:email,
                // password: password
                password: bcrypt.hashSync(password)
            }
            console.log("new user..",newUser)
            const user = userModel.create(newUser)
            res.status(200).send({
                success:true,
                message:'User is registered successfully',
                user
            })

    }catch(err){
           next('Error in registry')
    }
}



export const loginController = async (req,res,next) =>{
    try{
        const {email,password} = req.body
        if(!email|| !password){
           next('Provide all fields')
        }
        
        const user = await userModel.findOne({email})
        // console.log(user)
        if(!user){
            next('Invalid email and password')
 
       }

// we need to compare the provided password and the password in the database relaated to user

       const isPassword = bcrypt.compareSync(password,user.password)
       if(!isPassword){
        next('Incorrect Password')
       }

    //    res.status(200).json({
    //     success: true,
    //     message: 'Login success!',
    //     user
    // })
    //    This else part is not 100% solution
   
    else{
            res.status(200).json({
        success: true,
        message: 'Login success!',
        user
    })}

}catch(err){
    err
    }
}




