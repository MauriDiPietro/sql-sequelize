import db from '../db/db.js'
import {DataTypes} from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const PostModel = db.define(process.env.DB_TABLE, {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    }
});

export default PostModel;