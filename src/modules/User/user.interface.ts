import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

type Role = 'user' | 'admin';

export interface TUser {
    name:string;
    email:string;
    password:string;
    photo?:string | null;
    role: Role;
    passwordChangedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    isBlocked?: boolean;
    
}

export interface UserModel extends Model<TUser>{
    isUserExistByEmail(email:string): Promise<TUser | null>;

    isPasswordMatched(
        plainTextPassword:string,
    hashedPassword: string
    ): Promise<boolean>;

    isJwtIssuedBeforePasswordChange(
        passwordChangeTimestamp: Date,
        jwtIssuedTimestamp:number,
    ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;