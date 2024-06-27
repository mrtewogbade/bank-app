import Db from "../database"
import { IUserModel } from "../interfaces/user-interface"
import { DataTypes } from "sequelize"
import { v4 as uuid4 } from "uuid"

const UserModel = Db.define<IUserModel>(
    'UserModel', {
        id:{
            type: DataTypes.UUID,
            defaultValue: () => uuid4(),
            allowNull: false,
            primaryKey: true,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,

        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        firstName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        role:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        isEmailVerified:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        accountStatus:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull: false,
    },


    }, {
        tableName: 'users',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }

);


export default UserModel;