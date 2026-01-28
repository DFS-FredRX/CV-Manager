import { isEmail, isInt } from 'class-validator'
import { DataSourceOptions } from 'typeorm'
import { EnvSchema } from 'src/interfaces/env.interface'

import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({ path: path.join(process.cwd(), '../.env') })

const requiredEnv: EnvSchema = {
    app: { frontend: 'FRONTEND_URL', backend: 'BACKEND_URL' },
    server: { logo: 'LOGO_URL', jwt: 'JWT_SECRET' },
    database: { host: 'DB_HOST', port: 'DB_PORT', user: 'DB_USER', password: 'DB_PASSWORD', name: 'DB_NAME' },
    mail: { host: 'MAIL_HOST', port: 'MAIL_PORT', user: 'MAIL_USER', password: 'MAIL_PASS', from: 'MAIL_FROM' }
}

const allEnv = Object.values(requiredEnv).flatMap(category => Object.values(category))
for (const env of allEnv) {
    if (!process.env[env]) throw new Error(`Variable d'environnement manquante: ${env}. Veuillez la définir dans votre fichier .env.`)
}

if (!isInt(Number(process.env.MAIL_PORT))) throw new Error(`Erreur de type: MAIL_PORT (${process.env.MAIL_PORT}) doit être un nombre entier.`)
if (!isEmail(process.env.MAIL_FROM)) throw new Error(`Erreur de format: MAIL_FROM (${process.env.MAIL_FROM}) n'est pas une adresse mail valide.`)

export const dbConfig: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    entities: [__dirname + '/../**/*.entity{.ts, .js}'],
    synchronize: true
}