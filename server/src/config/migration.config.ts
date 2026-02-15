import { DataSource } from "typeorm"

import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '../.env') })

export default new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')],
    migrations: [path.join(__dirname, '/../migrations/*{.ts,.js}')]
})