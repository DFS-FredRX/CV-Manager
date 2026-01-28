import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { dbConfig } from './config/db.config'

import * as path from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../public'),
      serveRoot: '/static'
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.join(process.cwd(), '../.env')
    }),
    TypeOrmModule.forRoot(dbConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
