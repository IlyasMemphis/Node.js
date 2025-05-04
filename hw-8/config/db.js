import { Sequelize } from 'sequelize'
import config from './config.json' assert { type: 'json'}
import sequelize from '../../hw-7/config/db'

const dbConfig = config.development

const sequelize = new Sequelize( 
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect
    }
)

export { sequelize }