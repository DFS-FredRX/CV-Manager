import { registerAs } from '@nestjs/config'
import { isInt } from 'class-validator'
import { DataSourceOptions } from 'typeorm'

export default registerAs('database', (): DataSourceOptions => {

    const envs = ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_NAME']
    envs.forEach(env => {
        if (!process.env[env]) throw new Error(`Config Database : ${env} manquant`)
    })
    
    if (!isInt(Number(process.env.DB_PORT))) throw new Error('Config Database : DB_PORT invalide')

    return {
        type: 'mysql',
        host: process.env.DB_HOST!,
        port: parseInt(process.env.DB_PORT!),
        username: process.env.DB_USER!,
        password: process.env.DB_PASSWORD!,
        database: process.env.DB_NAME!,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true
    }

})