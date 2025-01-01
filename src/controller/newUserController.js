
import bcrypt from "bcrypt";
import { NewUser } from "../schema/model";
import { secretKey } from "../utils/constant";
import jwt from 'jsonwebtoken'
import { sendEmail } from "../utils/sendEmail";

export let newUserController = async (req, res, next) => {
    try {

        let data = req.body;
        let hashedPassword = await bcrypt.hash(data.password);

        data = {
            ...data,
            isverifiedEmail: false,
            password: hashedPassword,
        }

        let result = await NewUser.create(data);
        //token generate 
        let infoObj = {
            id: result._id,
        }

        let expiryDate = {
            expirenIn: '1d',
        }
        let token = await jwt.sign(infoObj, secretKey, expiryDate);



        await sendEmail({
            to: data.email,
            subject: 'Verification Mail sent',
            html: `<h1>Verify your Email</h1>
            <p>Please click on the givel ink to verify your email</p>
            <a hres='http://localhost:3000/verify-email/?token=${token}'>Click here to Verify</a>`
        })




    } catch (error) {

    }

}