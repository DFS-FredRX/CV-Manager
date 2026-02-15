import { DataSource } from "typeorm"

import * as dotenv from 'dotenv'
import * as path from 'path'

import { DatabaseOptions } from "./database.options"

dotenv.config({ path: path.resolve(process.cwd(), '../.env') })

export default new DataSource(DatabaseOptions())