import { DataSourceOptions } from "typeorm"
import { isInt } from "class-validator"

import * as path from 'path'

export const DatabaseOptions = (): DataSourceOptions => {

    const envs = ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_NAME']
    envs.forEach(env => {
        if (!process.env[env]) throw new Error(`Config Database : ${env} manquant`)
    })

    const port = Number(process.env.DB_PORT)
    if (!isInt(port)) throw new Error(`Config Database : DB_PORT invalide`)
    
    return {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: port,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')],
        migrations: [path.join(__dirname, '/../migrations/*{.ts,.js}')],
        synchronize: false,
        logging: process.env.NODE_ENV === 'development'
    }
}