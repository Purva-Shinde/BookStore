import { json } from 'express';
import User from '../model/user.model.js';
import bcrypt from 'bcrypt';

export const signup = async(req,res)=>{
    try {
        const {fullname,email,password}= req.body;
        const userEmail = await User.findOne({email});
        if(userEmail){
            return res.status(400).json({message:"User Already Exist"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const CreateUserData = new User ({
            fullname,
            email,
            password:hashedPassword
        })
        await CreateUserData.save();
        return res.status(201).json({message:"User Saved Successfully",
        user:{
            _id:CreateUserData._id,
            fullname:CreateUserData.fullname,
            email:CreateUserData.email
        },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"User not Saved Successfully"});

    }
}   

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

            const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

         const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

         return res.status(200).json({
            message: "Login Successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
