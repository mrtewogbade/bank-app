import { Model } from "sequelize"

export interface IUser{
    id: string;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    isEmailVerified: boolean;
    accountStatus: string;
    createdAt: Date;
    updatedAt: Date;    
}

export interface IUserModel extends Model<IUser>, IUser {}
