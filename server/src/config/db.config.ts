import { registerAs } from '@nestjs/config'
import { DatabaseOptions } from './database.options'

export default registerAs('database', () => DatabaseOptions())