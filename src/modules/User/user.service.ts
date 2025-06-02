import { JwtPayload } from 'jsonwebtoken';
import { User } from './user.model';

const getSingleUserFromDB = async (userEmail: string, user: JwtPayload) =>{
    const result = await User.findOne({email: userEmail});

    return result;
};

const getAllUsersFromDB = async () =>{
    const result = await User.find();
    return result;
};

export const UserServices ={
    getSingleUserFromDB,
    getAllUsersFromDB,
}